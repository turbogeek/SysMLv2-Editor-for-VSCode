const fs = require('fs');
const antlr4 = require('antlr4ng');
const { SysMLv2Lexer } = require('./out/antlr/SysMLv2Lexer');
const { SysMLv2Parser } = require('./out/antlr/SysMLv2Parser');

const input = "calc def MyCalc { in part : WheelBase; return : Real = part.baseRadius * 10.0; }";
const chars = antlr4.CharStream.fromString(input);
const lexer = new SysMLv2Lexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new SysMLv2Parser(tokens);

parser.buildParseTrees = true;

class CustomErrorListener extends antlr4.BaseErrorListener {
    syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
        console.error(`ERROR: line ${line}:${column} ${msg}`);
    }
}

parser.removeErrorListeners();
parser.addErrorListener(new CustomErrorListener());

const tree = parser.namespaceBody();

function printTree(node, indent = '') {
    if (!node) return;
    
    let name = node.constructor.name;
    if (name.endsWith('Context')) name = name.slice(0, -7);
    
    console.log(`${indent}${name}`);
    
    if (node.children) {
        for (let child of node.children) {
            if (child.symbol) {
                console.log(`${indent}  Token: ${child.symbol.text} (${parser.symbolicNames[child.symbol.type]})`);
            } else {
                printTree(child, indent + '  ');
            }
        }
    }
}

printTree(tree);
