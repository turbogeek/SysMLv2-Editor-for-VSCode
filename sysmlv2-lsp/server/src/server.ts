/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
import {
	createConnection,
	TextDocuments,
	Diagnostic,
	DiagnosticSeverity,
	ProposedFeatures,
	InitializeParams,
	DidChangeConfigurationNotification,
	CompletionItem,
	CompletionItemKind,
	TextDocumentPositionParams,
	TextDocumentSyncKind,
	InitializeResult,
	DocumentDiagnosticReportKind,
	type DocumentDiagnosticReport,
	CodeAction,
	CodeActionKind,
	CodeActionParams,
	DocumentFormattingParams,
	TextEdit
} from 'vscode-languageserver/node';

import {
	TextDocument
} from 'vscode-languageserver-textdocument';

import { CharStreams, CommonTokenStream, ANTLRErrorListener, Recognizer, RecognitionException } from 'antlr4ts';
import { ParseTreeWalker } from 'antlr4ts/tree/ParseTreeWalker';
import { SysMLv2Lexer } from './antlr/SysMLv2Lexer';
import { SysMLv2Parser, ImportDeclarationContext } from './antlr/SysMLv2Parser';
import { SysMLv2ParserListener } from './antlr/SysMLv2ParserListener';

class SysMLSemanticValidator implements SysMLv2ParserListener {
	constructor(public diagnostics: Diagnostic[], public textDocument: TextDocument) {}

	enterImportDeclaration(ctx: ImportDeclarationContext) {
		let hasVisibility = false;
		if (ctx.visibility()) {
			hasVisibility = true;
		} else if (ctx.parent && (ctx.parent as any).visibility && (ctx.parent as any).visibility()) {
			hasVisibility = true;
		}

		if (!hasVisibility) {
			const start = this.textDocument.positionAt(ctx.start.startIndex);
			const end = this.textDocument.positionAt(ctx.start.stopIndex + 1);
			this.diagnostics.push({
				severity: DiagnosticSeverity.Error,
				range: { start, end },
				message: "Import declarations should specify visibility (public, private, or protected).",
				source: 'sysmlv2',
				code: 'sysmlv2-import-visibility'
			});
		}
	}

	private checkUnnamedDirectedUsage(ctx: any, keywordToken: any, keywordName: string) {
		if (ctx.directionPrefix && ctx.directionPrefix() && !ctx.usageName()) {
			if (keywordToken) {
				const start = this.textDocument.positionAt(keywordToken.startIndex);
				const end = this.textDocument.positionAt(keywordToken.stopIndex + 1);
				this.diagnostics.push({
					severity: DiagnosticSeverity.Error,
					range: { start, end },
					message: `Unnamed ${keywordName} usage with direction '${ctx.directionPrefix().text}'. If you intended to name this parameter '${keywordToken.text}', use single quotes to resolve the reserved word conflict: '${keywordToken.text}'.`,
					source: 'sysmlv2',
					code: 'sysmlv2-reserved-word'
				});
			}
		}
	}

	private getKeywordTokenSafely(ctx: any, keywordName: string) {
		try {
			const node = ctx[keywordName] ? ctx[keywordName]() : null;
			return node ? node.symbol : null;
		} catch (e) {
			return null;
		}
	}

	enterPartUsage(ctx: any) { this.checkUnnamedDirectedUsage(ctx, this.getKeywordTokenSafely(ctx, 'PART'), 'part'); }
	enterActionUsage(ctx: any) { this.checkUnnamedDirectedUsage(ctx, this.getKeywordTokenSafely(ctx, 'ACTION'), 'action'); }
	enterAttributeUsage(ctx: any) { this.checkUnnamedDirectedUsage(ctx, this.getKeywordTokenSafely(ctx, 'ATTRIBUTE'), 'attribute'); }
	enterPortUsage(ctx: any) { this.checkUnnamedDirectedUsage(ctx, this.getKeywordTokenSafely(ctx, 'PORT'), 'port'); }
	enterItemUsage(ctx: any) { this.checkUnnamedDirectedUsage(ctx, this.getKeywordTokenSafely(ctx, 'ITEM'), 'item'); }
	enterRefUsage(ctx: any) { this.checkUnnamedDirectedUsage(ctx, this.getKeywordTokenSafely(ctx, 'REF'), 'ref'); }
	enterCalcUsage(ctx: any) { this.checkUnnamedDirectedUsage(ctx, this.getKeywordTokenSafely(ctx, 'CALC'), 'calc'); }
}

class SysMLErrorListener implements ANTLRErrorListener<any> {
	public diagnostics: Diagnostic[] = [];
	constructor(private textDocument: TextDocument) {}

	syntaxError<T>(
		recognizer: Recognizer<T, any>,
		offendingSymbol: T,
		line: number,
		charPositionInLine: number,
		msg: string,
		e: RecognitionException | undefined
	): void {
		let length = 1;
		if (offendingSymbol && (offendingSymbol as any).text) {
			length = (offendingSymbol as any).text.length;
		}
		const start = { line: line - 1, character: charPositionInLine };
		const end = { line: line - 1, character: charPositionInLine + length };

		let diagnosticCode: string | undefined;
		if (msg.startsWith("no viable alternative at input '")) {
			const tokenText = (offendingSymbol as any).text || '';
			msg = `No viable alternative at input '${tokenText}'. If this is a name, there may be a reserved word conflict. Use single quotes to make it an unrestricted name (e.g., '${tokenText}').`;
			diagnosticCode = 'sysmlv2-reserved-word';
		} else if (msg.includes("extraneous input") || msg.includes("mismatched input")) {
			const parser = recognizer as any;
			if (parser && parser.inputStream) {
				const stream = parser.inputStream;
				const offendingToken = offendingSymbol as any;
				const tokenIndex = offendingToken?.tokenIndex;
				if (tokenIndex !== undefined && tokenIndex > 0) {
					for (let i = tokenIndex; i >= Math.max(0, tokenIndex - 2); i--) {
						const token = stream.get(i);
						if (token && token.text && /^[a-zA-Z_]\w*$/.test(token.text) && !token.text.startsWith("'")) {
							const tokenText = token.text;
							const tokenStart = { line: token.line - 1, character: token.charPositionInLine };
							const tokenEnd = { line: token.line - 1, character: token.charPositionInLine + tokenText.length };
							
							this.diagnostics.push({
								severity: DiagnosticSeverity.Error,
								range: { start: tokenStart, end: tokenEnd },
								message: `Possible reserved word conflict near '${tokenText}'. If this was intended as a name, enclose it in single quotes (e.g., '${tokenText}').`,
								source: 'sysmlv2',
								code: 'sysmlv2-reserved-word'
							});
							break;
						}
					}
				}
			}
		}

		this.diagnostics.push({
			severity: DiagnosticSeverity.Error,
			range: { start, end },
			message: msg,
			source: 'sysmlv2',
			code: diagnosticCode
		});
	}
}

// Create a connection for the server, using Node's IPC as a transport.
// Also include all preview / proposed LSP features.
const connection = createConnection(ProposedFeatures.all);

// Create a simple text document manager.
const documents = new TextDocuments(TextDocument);

let hasConfigurationCapability = false;
let hasWorkspaceFolderCapability = false;
let hasDiagnosticRelatedInformationCapability = false;

connection.onInitialize((params: InitializeParams) => {
	const capabilities = params.capabilities;

	// Does the client support the `workspace/configuration` request?
	// If not, we fall back using global settings.
	hasConfigurationCapability = !!(
		capabilities.workspace && !!capabilities.workspace.configuration
	);
	hasWorkspaceFolderCapability = !!(
		capabilities.workspace && !!capabilities.workspace.workspaceFolders
	);
	hasDiagnosticRelatedInformationCapability = !!(
		capabilities.textDocument &&
		capabilities.textDocument.publishDiagnostics &&
		capabilities.textDocument.publishDiagnostics.relatedInformation
	);

	const result: InitializeResult = {
		capabilities: {
			textDocumentSync: TextDocumentSyncKind.Incremental,
			// Tell the client that this server supports code completion.
			completionProvider: {
				resolveProvider: true
			},
			codeActionProvider: true,
			documentSymbolProvider: true,
			hoverProvider: true,
			documentFormattingProvider: true,
			diagnosticProvider: {
				interFileDependencies: false,
				workspaceDiagnostics: false
			}
		}
	};
	if (hasWorkspaceFolderCapability) {
		result.capabilities.workspace = {
			workspaceFolders: {
				supported: true
			}
		};
	}
	return result;
});

connection.onInitialized(() => {
	if (hasConfigurationCapability) {
		// Register for all configuration changes.
		connection.client.register(DidChangeConfigurationNotification.type, undefined);
	}
	if (hasWorkspaceFolderCapability) {
		connection.workspace.onDidChangeWorkspaceFolders(_event => {
			connection.console.log('Workspace folder change event received.');
		});
	}
});

// The example settings
interface ExampleSettings {
	maxNumberOfProblems: number;
	warnOnSingleLineComments: boolean;
}

// The global settings, used when the `workspace/configuration` request is not supported by the client.
// Please note that this is not the case when using this server with the client provided in this example
// but could happen with other clients.
const defaultSettings: ExampleSettings = { maxNumberOfProblems: 1000, warnOnSingleLineComments: true };
let globalSettings: ExampleSettings = defaultSettings;

// Cache the settings of all open documents
const documentSettings = new Map<string, Thenable<ExampleSettings>>();

connection.onDidChangeConfiguration(change => {
	if (hasConfigurationCapability) {
		// Reset all cached document settings
		documentSettings.clear();
	} else {
		globalSettings = (
			(change.settings.sysmlv2 || defaultSettings)
		);
	}
	// Refresh the diagnostics since the `maxNumberOfProblems` could have changed.
	// We could optimize things here and re-fetch the setting first can compare it
	// to the existing setting, but this is out of scope for this example.
	connection.languages.diagnostics.refresh();
});

function getDocumentSettings(resource: string): Thenable<ExampleSettings> {
	if (!hasConfigurationCapability) {
		return Promise.resolve(globalSettings);
	}
	let result = documentSettings.get(resource);
	if (!result) {
		result = connection.workspace.getConfiguration({
			scopeUri: resource,
			section: 'sysmlv2'
		}).then(config => config || globalSettings);
		documentSettings.set(resource, result);
	}
	return result;
}

// Only keep settings for open documents
documents.onDidClose(e => {
	documentSettings.delete(e.document.uri);
});


connection.languages.diagnostics.on(async (params) => {
	const document = documents.get(params.textDocument.uri);
	if (document !== undefined) {
		return {
			kind: DocumentDiagnosticReportKind.Full,
			items: await validateTextDocument(document)
		} satisfies DocumentDiagnosticReport;
	} else {
		// We don't know the document. We can either try to read it from disk
		// or we don't report problems for it.
		return {
			kind: DocumentDiagnosticReportKind.Full,
			items: []
		} satisfies DocumentDiagnosticReport;
	}
});

// The content of a text document has changed. This event is emitted
// when the text document first opened or when its content has changed.
documents.onDidChangeContent(async change => {
	const diagnostics = await validateTextDocument(change.document);
	connection.sendDiagnostics({ uri: change.document.uri, diagnostics });
});

async function validateTextDocument(textDocument: TextDocument): Promise<Diagnostic[]> {
	try {
		connection.console.log(`Validating document: ${textDocument.uri}`);
		let settings = await getDocumentSettings(textDocument.uri);
		if (!settings) {
			settings = defaultSettings;
		}

		const text = textDocument.getText();
		const chars = CharStreams.fromString(text);
		const lexer = new SysMLv2Lexer(chars);
		const tokens = new CommonTokenStream(lexer);
		const parser = new SysMLv2Parser(tokens);

		const errorListener = new SysMLErrorListener(textDocument);
		lexer.removeErrorListeners();
		lexer.addErrorListener(errorListener);
		parser.removeErrorListeners();
		parser.addErrorListener(errorListener);

		let tree;
		try {
			tree = parser.compilationUnit();
		} catch (e) {
			console.error("Parse error:", e);
		}

		if (tree) {
			const semanticValidator = new SysMLSemanticValidator(errorListener.diagnostics, textDocument);
			ParseTreeWalker.DEFAULT.walk(semanticValidator as any, tree);
		}

		// Single line comment warnings
		if (settings.warnOnSingleLineComments) {
			tokens.fill();
			for (const t of tokens.getTokens()) {
				if (t.channel === 1 && t.text && t.text.startsWith('//')) {
					const start = textDocument.positionAt(t.startIndex);
					const end = textDocument.positionAt(t.stopIndex + 1);
					errorListener.diagnostics.push({
						severity: DiagnosticSeverity.Warning,
						range: { start, end },
						message: 'Single line comments (//) do not become part of the language model. Consider using doc /* ... */ instead.',
						source: 'sysmlv2'
					});
				}
			}
		}

		connection.console.log(`Validation complete. Found ${errorListener.diagnostics.length} issues.`);
		return errorListener.diagnostics;
	} catch (e) {
		connection.console.error(`Validation failed with error: ${e}`);
		return [];
	}
}

connection.onDidChangeWatchedFiles(_change => {
	// Monitored files have change in VSCode
	connection.console.log('We received a file change event');
});

// This handler provides the initial list of the completion items.
connection.onCompletion(
	(_textDocumentPosition: TextDocumentPositionParams): CompletionItem[] => {
		// The pass parameter contains the position of the text document in
		// which code complete got requested. For the example we ignore this
		// info and always provide the same completion items.
		return [
			{
				label: 'TypeScript',
				kind: CompletionItemKind.Text,
				data: 1
			},
			{
				label: 'JavaScript',
				kind: CompletionItemKind.Text,
				data: 2
			}
		];
	}
);

// This handler resolves additional information for the item selected in
// the completion list.
connection.onCompletionResolve(
	(item: CompletionItem): CompletionItem => {
		if (item.data === 1) {
			item.detail = 'TypeScript details';
			item.documentation = 'TypeScript documentation';
		} else if (item.data === 2) {
			item.detail = 'JavaScript details';
			item.documentation = 'JavaScript documentation';
		}
		return item;
	}
);

connection.onCodeAction((params: CodeActionParams) => {
	const textDocument = documents.get(params.textDocument.uri);
	if (!textDocument) {
		return [];
	}

	const codeActions: CodeAction[] = [];
	for (const diagnostic of params.context.diagnostics) {
		if (diagnostic.code === 'sysmlv2-reserved-word') {
			const range = diagnostic.range;
			const offendingText = textDocument.getText(range);
			// Wrap in quotes
			const newText = `'${offendingText}'`;
			
			const fix: CodeAction = {
				title: `Quote reserved word '${offendingText}'`,
				kind: CodeActionKind.QuickFix,
				diagnostics: [diagnostic],
				edit: {
					changes: {
						[params.textDocument.uri]: [{
							range: range,
							newText: newText
						}]
					}
				}
			};
			codeActions.push(fix);
		} else if (diagnostic.code === 'sysmlv2-import-visibility') {
			const range = diagnostic.range;
			const fix: CodeAction = {
				title: `Add 'private' visibility`,
				kind: CodeActionKind.QuickFix,
				diagnostics: [diagnostic],
				edit: {
					changes: {
						[params.textDocument.uri]: [{
							range: { start: range.start, end: range.start },
							newText: 'private '
						}]
					}
				}
			};
			codeActions.push(fix);
		}
	}
	return codeActions;
});

// Make the text document manager listen on the connection
// for open, change and close text document events
documents.listen(connection);

// Listen on the connection
connection.onDocumentSymbol(() => {
	return [];
});

connection.onHover(() => {
	return null;
});

connection.onDocumentFormatting((params: DocumentFormattingParams) => {
	const document = documents.get(params.textDocument.uri);
	if (!document) {
		return [];
	}

	const text = document.getText();
	const edits: TextEdit[] = [];
	
	const lines = text.split(/\r?\n/);
	let currentIndent = 0;
	const tabSize = params.options.tabSize || 4;
	const insertSpaces = params.options.insertSpaces;
	const indentString = insertSpaces ? ' '.repeat(tabSize) : '\t';

	for (let i = 0; i < lines.length; i++) {
		let line = lines[i];
		const originalLine = line;
		let trimmedLine = line.trim();
		
		// Very basic heuristics for SysMLv2 block indentation
		// Decrease indent if line starts with closing brace
		if (trimmedLine.startsWith('}')) {
			currentIndent = Math.max(0, currentIndent - 1);
		}

		// Calculate desired indentation
		const desiredIndentation = indentString.repeat(currentIndent);
		
		if (trimmedLine.length > 0) {
			const expectedLine = desiredIndentation + trimmedLine;
			if (originalLine !== expectedLine) {
				edits.push(TextEdit.replace(
					{
						start: { line: i, character: 0 },
						end: { line: i, character: originalLine.length }
					},
					expectedLine
				));
			}
		} else if (originalLine.length > 0) {
			// Clear lines containing only whitespace
			edits.push(TextEdit.replace(
				{
					start: { line: i, character: 0 },
					end: { line: i, character: originalLine.length }
				},
				''
			));
		}

		// Increase indent if line ends with opening brace
		if (trimmedLine.endsWith('{')) {
			currentIndent++;
		}
	}

	return edits;
});

connection.listen();
process.on('uncaughtException', err => require('fs').writeFileSync('E:\\_Documents\\git\\SysMLv2-Editor-for-VSCode\\error.log', String(err.stack)));
