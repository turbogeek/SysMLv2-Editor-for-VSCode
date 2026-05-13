// Generated from src/antlr/SysMLv2Parser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { CompilationUnitContext } from "./SysMLv2Parser";
import { RootNamespaceContext } from "./SysMLv2Parser";
import { NamespaceBodyElementContext } from "./SysMLv2Parser";
import { PackageDeclarationContext } from "./SysMLv2Parser";
import { LibraryPackageDeclarationContext } from "./SysMLv2Parser";
import { NamespaceDeclarationContext } from "./SysMLv2Parser";
import { PackageBodyContext } from "./SysMLv2Parser";
import { NamespaceBodyContext } from "./SysMLv2Parser";
import { AliasDeclarationContext } from "./SysMLv2Parser";
import { AliasNameContext } from "./SysMLv2Parser";
import { ImportDeclarationContext } from "./SysMLv2Parser";
import { ImportFilterContext } from "./SysMLv2Parser";
import { QualifiedNameWithWildcardContext } from "./SysMLv2Parser";
import { PrefixesContext } from "./SysMLv2Parser";
import { HashAnnotationContext } from "./SysMLv2Parser";
import { MetadataAnnotationContext } from "./SysMLv2Parser";
import { AnnotationArgumentsContext } from "./SysMLv2Parser";
import { AnnotationArgumentContext } from "./SysMLv2Parser";
import { FeaturePrefixContext } from "./SysMLv2Parser";
import { DefinitionPrefixContext } from "./SysMLv2Parser";
import { UsagePrefixContext } from "./SysMLv2Parser";
import { DirectionPrefixContext } from "./SysMLv2Parser";
import { VisibilityContext } from "./SysMLv2Parser";
import { MemberContext } from "./SysMLv2Parser";
import { PartDefinitionContext } from "./SysMLv2Parser";
import { ActionDefinitionContext } from "./SysMLv2Parser";
import { StateDefinitionContext } from "./SysMLv2Parser";
import { RequirementDefinitionContext } from "./SysMLv2Parser";
import { ViewDefinitionContext } from "./SysMLv2Parser";
import { ViewpointDefinitionContext } from "./SysMLv2Parser";
import { ViewpointBodyContext } from "./SysMLv2Parser";
import { ViewpointBodyElementContext } from "./SysMLv2Parser";
import { ConstraintDefinitionContext } from "./SysMLv2Parser";
import { ConstraintDefBodyContext } from "./SysMLv2Parser";
import { ConstraintDefBodyElementContext } from "./SysMLv2Parser";
import { AttributeDefinitionContext } from "./SysMLv2Parser";
import { PortDefinitionContext } from "./SysMLv2Parser";
import { ConnectionDefinitionContext } from "./SysMLv2Parser";
import { InterfaceDefinitionContext } from "./SysMLv2Parser";
import { AllocationDefinitionContext } from "./SysMLv2Parser";
import { ItemDefinitionContext } from "./SysMLv2Parser";
import { EnumDefinitionContext } from "./SysMLv2Parser";
import { CalcDefinitionContext } from "./SysMLv2Parser";
import { AnalysisDefinitionContext } from "./SysMLv2Parser";
import { CaseDefinitionContext } from "./SysMLv2Parser";
import { UseCaseDefinitionContext } from "./SysMLv2Parser";
import { VerificationDefinitionContext } from "./SysMLv2Parser";
import { ConcernDefinitionContext } from "./SysMLv2Parser";
import { RenderingDefinitionContext } from "./SysMLv2Parser";
import { OccurrenceDefinitionContext } from "./SysMLv2Parser";
import { FlowDefinitionContext } from "./SysMLv2Parser";
import { MetadataDefinitionContext } from "./SysMLv2Parser";
import { IndividualDefinitionContext } from "./SysMLv2Parser";
import { MetadataDefBodyContext } from "./SysMLv2Parser";
import { MetadataDefBodyElementContext } from "./SysMLv2Parser";
import { DatatypeDefinitionContext } from "./SysMLv2Parser";
import { ClassDefinitionContext } from "./SysMLv2Parser";
import { StructDefinitionContext } from "./SysMLv2Parser";
import { AssocDefinitionContext } from "./SysMLv2Parser";
import { BehaviorDefinitionContext } from "./SysMLv2Parser";
import { FunctionDefinitionContext } from "./SysMLv2Parser";
import { PredicateDefinitionContext } from "./SysMLv2Parser";
import { InteractionDefinitionContext } from "./SysMLv2Parser";
import { MetaclassDefinitionContext } from "./SysMLv2Parser";
import { ClassifierDefinitionContext } from "./SysMLv2Parser";
import { TypeDefinitionContext } from "./SysMLv2Parser";
import { FeatureDefinitionContext } from "./SysMLv2Parser";
import { ConnectorDefinitionContext } from "./SysMLv2Parser";
import { BindingConnectorDefinitionContext } from "./SysMLv2Parser";
import { PartUsageContext } from "./SysMLv2Parser";
import { ActionUsageContext } from "./SysMLv2Parser";
import { ActionKeywordContext } from "./SysMLv2Parser";
import { ActionSendClauseContext } from "./SysMLv2Parser";
import { StateUsageContext } from "./SysMLv2Parser";
import { RequirementUsageContext } from "./SysMLv2Parser";
import { ViewUsageContext } from "./SysMLv2Parser";
import { ConstraintUsageContext } from "./SysMLv2Parser";
import { ConstraintBodyContext } from "./SysMLv2Parser";
import { ConstraintBodyElementContext } from "./SysMLv2Parser";
import { ConstraintParameterContext } from "./SysMLv2Parser";
import { ConstraintExpressionContext } from "./SysMLv2Parser";
import { AttributeUsageContext } from "./SysMLv2Parser";
import { EnumUsageContext } from "./SysMLv2Parser";
import { TupleOrValueInitContext } from "./SysMLv2Parser";
import { PortUsageContext } from "./SysMLv2Parser";
import { ItemUsageContext } from "./SysMLv2Parser";
import { RefUsageContext } from "./SysMLv2Parser";
import { RefKindContext } from "./SysMLv2Parser";
import { ConnectionUsageContext } from "./SysMLv2Parser";
import { FlowConnectionUsageContext } from "./SysMLv2Parser";
import { SuccessionUsageContext } from "./SysMLv2Parser";
import { SuccessionFlowOfContext } from "./SysMLv2Parser";
import { TransitionUsageContext } from "./SysMLv2Parser";
import { SatisfyRequirementContext } from "./SysMLv2Parser";
import { AllocateUsageContext } from "./SysMLv2Parser";
import { NamedAllocationListContext } from "./SysMLv2Parser";
import { NamedAllocationContext } from "./SysMLv2Parser";
import { PerformUsageContext } from "./SysMLv2Parser";
import { ExhibitUsageContext } from "./SysMLv2Parser";
import { IncludeUsageContext } from "./SysMLv2Parser";
import { CalcUsageContext } from "./SysMLv2Parser";
import { AnalysisUsageContext } from "./SysMLv2Parser";
import { CaseUsageContext } from "./SysMLv2Parser";
import { UseCaseUsageContext } from "./SysMLv2Parser";
import { VerificationUsageContext } from "./SysMLv2Parser";
import { RenderingUsageContext } from "./SysMLv2Parser";
import { ViewpointUsageContext } from "./SysMLv2Parser";
import { ActorUsageContext } from "./SysMLv2Parser";
import { StakeholderUsageContext } from "./SysMLv2Parser";
import { ConcernUsageContext } from "./SysMLv2Parser";
import { ConcernBodyContext } from "./SysMLv2Parser";
import { ConcernBodyElementContext } from "./SysMLv2Parser";
import { OccurrenceUsageContext } from "./SysMLv2Parser";
import { VariantUsageContext } from "./SysMLv2Parser";
import { PortionUsageContext } from "./SysMLv2Parser";
import { StepUsageContext } from "./SysMLv2Parser";
import { InterfaceUsageContext } from "./SysMLv2Parser";
import { DecideNodeContext } from "./SysMLv2Parser";
import { DecideBodyContext } from "./SysMLv2Parser";
import { IfBranchContext } from "./SysMLv2Parser";
import { ElseBranchContext } from "./SysMLv2Parser";
import { MergeNodeContext } from "./SysMLv2Parser";
import { ForkNodeContext } from "./SysMLv2Parser";
import { JoinNodeContext } from "./SysMLv2Parser";
import { BindingUsageContext } from "./SysMLv2Parser";
import { AcceptUsageContext } from "./SysMLv2Parser";
import { AcceptTimingContext } from "./SysMLv2Parser";
import { SendUsageContext } from "./SysMLv2Parser";
import { AssignUsageContext } from "./SysMLv2Parser";
import { MessageUsageContext } from "./SysMLv2Parser";
import { DependencyDeclarationContext } from "./SysMLv2Parser";
import { MetadataUsageContext } from "./SysMLv2Parser";
import { MetadataBodyContext } from "./SysMLv2Parser";
import { MetadataBodyElementContext } from "./SysMLv2Parser";
import { EndUsageContext } from "./SysMLv2Parser";
import { EndModifiersContext } from "./SysMLv2Parser";
import { EndMemberKindContext } from "./SysMLv2Parser";
import { DeclarationNameContext } from "./SysMLv2Parser";
import { UsageNameContext } from "./SysMLv2Parser";
import { NameContext } from "./SysMLv2Parser";
import { ShortNameContext } from "./SysMLv2Parser";
import { QualifiedNameContext } from "./SysMLv2Parser";
import { FeatureChainContext } from "./SysMLv2Parser";
import { TypeRelationshipsContext } from "./SysMLv2Parser";
import { TypeRelationshipContext } from "./SysMLv2Parser";
import { FeatureRelationshipsContext } from "./SysMLv2Parser";
import { FeatureRelationshipContext } from "./SysMLv2Parser";
import { SpecializesClauseContext } from "./SysMLv2Parser";
import { RedefinesClauseContext } from "./SysMLv2Parser";
import { SubsetsClauseContext } from "./SysMLv2Parser";
import { ReferencesClauseContext } from "./SysMLv2Parser";
import { ConjugatesClauseContext } from "./SysMLv2Parser";
import { TypingClauseContext } from "./SysMLv2Parser";
import { UnionsClauseContext } from "./SysMLv2Parser";
import { IntersectsClauseContext } from "./SysMLv2Parser";
import { DifferencesClauseContext } from "./SysMLv2Parser";
import { DisjointClauseContext } from "./SysMLv2Parser";
import { MultiplicityClauseContext } from "./SysMLv2Parser";
import { MultiplicityRangeContext } from "./SysMLv2Parser";
import { MultiplicityBoundContext } from "./SysMLv2Parser";
import { ConnectionEndpointsContext } from "./SysMLv2Parser";
import { ExpressionListContext } from "./SysMLv2Parser";
import { FlowEndpointsContext } from "./SysMLv2Parser";
import { SuccessionEndpointsContext } from "./SysMLv2Parser";
import { TransitionRelationshipsContext } from "./SysMLv2Parser";
import { DefinitionBodyContext } from "./SysMLv2Parser";
import { DefinitionBodyElementContext } from "./SysMLv2Parser";
import { SimpleFeatureContext } from "./SysMLv2Parser";
import { ReturnFeatureContext } from "./SysMLv2Parser";
import { InParameterContext } from "./SysMLv2Parser";
import { ParameterValueInitContext } from "./SysMLv2Parser";
import { OutParameterContext } from "./SysMLv2Parser";
import { InoutParameterContext } from "./SysMLv2Parser";
import { UsageBodyContext } from "./SysMLv2Parser";
import { UsageBodyElementContext } from "./SysMLv2Parser";
import { SimpleParameterContext } from "./SysMLv2Parser";
import { AnonymousRedefinesContext } from "./SysMLv2Parser";
import { MetaExpressionContext } from "./SysMLv2Parser";
import { StateDefinitionBodyContext } from "./SysMLv2Parser";
import { StateUsageBodyContext } from "./SysMLv2Parser";
import { StateBodyElementContext } from "./SysMLv2Parser";
import { AcceptTransitionContext } from "./SysMLv2Parser";
import { DoActionClauseContext } from "./SysMLv2Parser";
import { RequirementBodyContext } from "./SysMLv2Parser";
import { RequirementBodyElementContext } from "./SysMLv2Parser";
import { ViewBodyContext } from "./SysMLv2Parser";
import { ViewBodyElementContext } from "./SysMLv2Parser";
import { EnumBodyContext } from "./SysMLv2Parser";
import { EnumBodyElementContext } from "./SysMLv2Parser";
import { EnumMemberContext } from "./SysMLv2Parser";
import { EnumMemberBodyContext } from "./SysMLv2Parser";
import { EnumMemberBodyElementContext } from "./SysMLv2Parser";
import { TransitionBodyContext } from "./SysMLv2Parser";
import { EntryActionContext } from "./SysMLv2Parser";
import { DoActionContext } from "./SysMLv2Parser";
import { ExitActionContext } from "./SysMLv2Parser";
import { AssignStatementContext } from "./SysMLv2Parser";
import { AcceptClauseContext } from "./SysMLv2Parser";
import { GuardClauseContext } from "./SysMLv2Parser";
import { EffectClauseContext } from "./SysMLv2Parser";
import { SubjectDeclarationContext } from "./SysMLv2Parser";
import { FramedConcernContext } from "./SysMLv2Parser";
import { AssumeConstraintContext } from "./SysMLv2Parser";
import { RequireConstraintContext } from "./SysMLv2Parser";
import { ObjectiveRequirementContext } from "./SysMLv2Parser";
import { ObjectiveBodyContext } from "./SysMLv2Parser";
import { ObjectiveBodyElementContext } from "./SysMLv2Parser";
import { VerifyBodyContext } from "./SysMLv2Parser";
import { VerifyBodyElementContext } from "./SysMLv2Parser";
import { VerifyRequirementContext } from "./SysMLv2Parser";
import { ExposeStatementContext } from "./SysMLv2Parser";
import { RenderStatementContext } from "./SysMLv2Parser";
import { FilterStatementContext } from "./SysMLv2Parser";
import { FilterClauseContext } from "./SysMLv2Parser";
import { ValueInitContext } from "./SysMLv2Parser";
import { StatementContext } from "./SysMLv2Parser";
import { ThenStatementContext } from "./SysMLv2Parser";
import { InvariantStatementContext } from "./SysMLv2Parser";
import { FlowStatementContext } from "./SysMLv2Parser";
import { TerminateStatementContext } from "./SysMLv2Parser";
import { DoStatementContext } from "./SysMLv2Parser";
import { ExpressionStatementContext } from "./SysMLv2Parser";
import { IfStatementContext } from "./SysMLv2Parser";
import { ElseIfClauseContext } from "./SysMLv2Parser";
import { ElseClauseContext } from "./SysMLv2Parser";
import { WhileStatementContext } from "./SysMLv2Parser";
import { LoopStatementContext } from "./SysMLv2Parser";
import { ForStatementContext } from "./SysMLv2Parser";
import { AssignmentStatementContext } from "./SysMLv2Parser";
import { SendStatementContext } from "./SysMLv2Parser";
import { AcceptStatementContext } from "./SysMLv2Parser";
import { ExpressionContext } from "./SysMLv2Parser";
import { ConditionalExpressionContext } from "./SysMLv2Parser";
import { NullCoalescingExpressionContext } from "./SysMLv2Parser";
import { ImpliesExpressionContext } from "./SysMLv2Parser";
import { OrExpressionContext } from "./SysMLv2Parser";
import { XorExpressionContext } from "./SysMLv2Parser";
import { AndExpressionContext } from "./SysMLv2Parser";
import { EqualityExpressionContext } from "./SysMLv2Parser";
import { ClassificationExpressionContext } from "./SysMLv2Parser";
import { RelationalExpressionContext } from "./SysMLv2Parser";
import { ExtentExpressionContext } from "./SysMLv2Parser";
import { AdditiveExpressionContext } from "./SysMLv2Parser";
import { MultiplicativeExpressionContext } from "./SysMLv2Parser";
import { ExponentiationExpressionContext } from "./SysMLv2Parser";
import { UnaryExpressionContext } from "./SysMLv2Parser";
import { PrimaryExpressionContext } from "./SysMLv2Parser";
import { SequenceSuffixContext } from "./SysMLv2Parser";
import { BaseExpressionContext } from "./SysMLv2Parser";
import { CollectionLiteralContext } from "./SysMLv2Parser";
import { ThisExpressionContext } from "./SysMLv2Parser";
import { NewExpressionContext } from "./SysMLv2Parser";
import { LiteralExpressionContext } from "./SysMLv2Parser";
import { NameExpressionContext } from "./SysMLv2Parser";
import { InvocationExpressionContext } from "./SysMLv2Parser";
import { BodyExpressionContext } from "./SysMLv2Parser";
import { MetadataAccessExpressionContext } from "./SysMLv2Parser";
import { ArgumentListContext } from "./SysMLv2Parser";
import { NamedArgumentContext } from "./SysMLv2Parser";
import { PositionalArgumentContext } from "./SysMLv2Parser";
import { CommentContext } from "./SysMLv2Parser";
import { DocumentationContext } from "./SysMLv2Parser";
import { DocumentationBodyContext } from "./SysMLv2Parser";
import { TextualRepresentationContext } from "./SysMLv2Parser";
import { LanguageStatementContext } from "./SysMLv2Parser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `SysMLv2Parser`.
 */
export interface SysMLv2ParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `SysMLv2Parser.compilationUnit`.
	 * @param ctx the parse tree
	 */
	enterCompilationUnit?: (ctx: CompilationUnitContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.compilationUnit`.
	 * @param ctx the parse tree
	 */
	exitCompilationUnit?: (ctx: CompilationUnitContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.rootNamespace`.
	 * @param ctx the parse tree
	 */
	enterRootNamespace?: (ctx: RootNamespaceContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.rootNamespace`.
	 * @param ctx the parse tree
	 */
	exitRootNamespace?: (ctx: RootNamespaceContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.namespaceBodyElement`.
	 * @param ctx the parse tree
	 */
	enterNamespaceBodyElement?: (ctx: NamespaceBodyElementContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.namespaceBodyElement`.
	 * @param ctx the parse tree
	 */
	exitNamespaceBodyElement?: (ctx: NamespaceBodyElementContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.packageDeclaration`.
	 * @param ctx the parse tree
	 */
	enterPackageDeclaration?: (ctx: PackageDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.packageDeclaration`.
	 * @param ctx the parse tree
	 */
	exitPackageDeclaration?: (ctx: PackageDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.libraryPackageDeclaration`.
	 * @param ctx the parse tree
	 */
	enterLibraryPackageDeclaration?: (ctx: LibraryPackageDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.libraryPackageDeclaration`.
	 * @param ctx the parse tree
	 */
	exitLibraryPackageDeclaration?: (ctx: LibraryPackageDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.namespaceDeclaration`.
	 * @param ctx the parse tree
	 */
	enterNamespaceDeclaration?: (ctx: NamespaceDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.namespaceDeclaration`.
	 * @param ctx the parse tree
	 */
	exitNamespaceDeclaration?: (ctx: NamespaceDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.packageBody`.
	 * @param ctx the parse tree
	 */
	enterPackageBody?: (ctx: PackageBodyContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.packageBody`.
	 * @param ctx the parse tree
	 */
	exitPackageBody?: (ctx: PackageBodyContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.namespaceBody`.
	 * @param ctx the parse tree
	 */
	enterNamespaceBody?: (ctx: NamespaceBodyContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.namespaceBody`.
	 * @param ctx the parse tree
	 */
	exitNamespaceBody?: (ctx: NamespaceBodyContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.aliasDeclaration`.
	 * @param ctx the parse tree
	 */
	enterAliasDeclaration?: (ctx: AliasDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.aliasDeclaration`.
	 * @param ctx the parse tree
	 */
	exitAliasDeclaration?: (ctx: AliasDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.aliasName`.
	 * @param ctx the parse tree
	 */
	enterAliasName?: (ctx: AliasNameContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.aliasName`.
	 * @param ctx the parse tree
	 */
	exitAliasName?: (ctx: AliasNameContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.importDeclaration`.
	 * @param ctx the parse tree
	 */
	enterImportDeclaration?: (ctx: ImportDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.importDeclaration`.
	 * @param ctx the parse tree
	 */
	exitImportDeclaration?: (ctx: ImportDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.importFilter`.
	 * @param ctx the parse tree
	 */
	enterImportFilter?: (ctx: ImportFilterContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.importFilter`.
	 * @param ctx the parse tree
	 */
	exitImportFilter?: (ctx: ImportFilterContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.qualifiedNameWithWildcard`.
	 * @param ctx the parse tree
	 */
	enterQualifiedNameWithWildcard?: (ctx: QualifiedNameWithWildcardContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.qualifiedNameWithWildcard`.
	 * @param ctx the parse tree
	 */
	exitQualifiedNameWithWildcard?: (ctx: QualifiedNameWithWildcardContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.prefixes`.
	 * @param ctx the parse tree
	 */
	enterPrefixes?: (ctx: PrefixesContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.prefixes`.
	 * @param ctx the parse tree
	 */
	exitPrefixes?: (ctx: PrefixesContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.hashAnnotation`.
	 * @param ctx the parse tree
	 */
	enterHashAnnotation?: (ctx: HashAnnotationContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.hashAnnotation`.
	 * @param ctx the parse tree
	 */
	exitHashAnnotation?: (ctx: HashAnnotationContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.metadataAnnotation`.
	 * @param ctx the parse tree
	 */
	enterMetadataAnnotation?: (ctx: MetadataAnnotationContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.metadataAnnotation`.
	 * @param ctx the parse tree
	 */
	exitMetadataAnnotation?: (ctx: MetadataAnnotationContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.annotationArguments`.
	 * @param ctx the parse tree
	 */
	enterAnnotationArguments?: (ctx: AnnotationArgumentsContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.annotationArguments`.
	 * @param ctx the parse tree
	 */
	exitAnnotationArguments?: (ctx: AnnotationArgumentsContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.annotationArgument`.
	 * @param ctx the parse tree
	 */
	enterAnnotationArgument?: (ctx: AnnotationArgumentContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.annotationArgument`.
	 * @param ctx the parse tree
	 */
	exitAnnotationArgument?: (ctx: AnnotationArgumentContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.featurePrefix`.
	 * @param ctx the parse tree
	 */
	enterFeaturePrefix?: (ctx: FeaturePrefixContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.featurePrefix`.
	 * @param ctx the parse tree
	 */
	exitFeaturePrefix?: (ctx: FeaturePrefixContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.definitionPrefix`.
	 * @param ctx the parse tree
	 */
	enterDefinitionPrefix?: (ctx: DefinitionPrefixContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.definitionPrefix`.
	 * @param ctx the parse tree
	 */
	exitDefinitionPrefix?: (ctx: DefinitionPrefixContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.usagePrefix`.
	 * @param ctx the parse tree
	 */
	enterUsagePrefix?: (ctx: UsagePrefixContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.usagePrefix`.
	 * @param ctx the parse tree
	 */
	exitUsagePrefix?: (ctx: UsagePrefixContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.directionPrefix`.
	 * @param ctx the parse tree
	 */
	enterDirectionPrefix?: (ctx: DirectionPrefixContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.directionPrefix`.
	 * @param ctx the parse tree
	 */
	exitDirectionPrefix?: (ctx: DirectionPrefixContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.visibility`.
	 * @param ctx the parse tree
	 */
	enterVisibility?: (ctx: VisibilityContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.visibility`.
	 * @param ctx the parse tree
	 */
	exitVisibility?: (ctx: VisibilityContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.member`.
	 * @param ctx the parse tree
	 */
	enterMember?: (ctx: MemberContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.member`.
	 * @param ctx the parse tree
	 */
	exitMember?: (ctx: MemberContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.partDefinition`.
	 * @param ctx the parse tree
	 */
	enterPartDefinition?: (ctx: PartDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.partDefinition`.
	 * @param ctx the parse tree
	 */
	exitPartDefinition?: (ctx: PartDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.actionDefinition`.
	 * @param ctx the parse tree
	 */
	enterActionDefinition?: (ctx: ActionDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.actionDefinition`.
	 * @param ctx the parse tree
	 */
	exitActionDefinition?: (ctx: ActionDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.stateDefinition`.
	 * @param ctx the parse tree
	 */
	enterStateDefinition?: (ctx: StateDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.stateDefinition`.
	 * @param ctx the parse tree
	 */
	exitStateDefinition?: (ctx: StateDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.requirementDefinition`.
	 * @param ctx the parse tree
	 */
	enterRequirementDefinition?: (ctx: RequirementDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.requirementDefinition`.
	 * @param ctx the parse tree
	 */
	exitRequirementDefinition?: (ctx: RequirementDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.viewDefinition`.
	 * @param ctx the parse tree
	 */
	enterViewDefinition?: (ctx: ViewDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.viewDefinition`.
	 * @param ctx the parse tree
	 */
	exitViewDefinition?: (ctx: ViewDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.viewpointDefinition`.
	 * @param ctx the parse tree
	 */
	enterViewpointDefinition?: (ctx: ViewpointDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.viewpointDefinition`.
	 * @param ctx the parse tree
	 */
	exitViewpointDefinition?: (ctx: ViewpointDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.viewpointBody`.
	 * @param ctx the parse tree
	 */
	enterViewpointBody?: (ctx: ViewpointBodyContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.viewpointBody`.
	 * @param ctx the parse tree
	 */
	exitViewpointBody?: (ctx: ViewpointBodyContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.viewpointBodyElement`.
	 * @param ctx the parse tree
	 */
	enterViewpointBodyElement?: (ctx: ViewpointBodyElementContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.viewpointBodyElement`.
	 * @param ctx the parse tree
	 */
	exitViewpointBodyElement?: (ctx: ViewpointBodyElementContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.constraintDefinition`.
	 * @param ctx the parse tree
	 */
	enterConstraintDefinition?: (ctx: ConstraintDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.constraintDefinition`.
	 * @param ctx the parse tree
	 */
	exitConstraintDefinition?: (ctx: ConstraintDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.constraintDefBody`.
	 * @param ctx the parse tree
	 */
	enterConstraintDefBody?: (ctx: ConstraintDefBodyContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.constraintDefBody`.
	 * @param ctx the parse tree
	 */
	exitConstraintDefBody?: (ctx: ConstraintDefBodyContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.constraintDefBodyElement`.
	 * @param ctx the parse tree
	 */
	enterConstraintDefBodyElement?: (ctx: ConstraintDefBodyElementContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.constraintDefBodyElement`.
	 * @param ctx the parse tree
	 */
	exitConstraintDefBodyElement?: (ctx: ConstraintDefBodyElementContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.attributeDefinition`.
	 * @param ctx the parse tree
	 */
	enterAttributeDefinition?: (ctx: AttributeDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.attributeDefinition`.
	 * @param ctx the parse tree
	 */
	exitAttributeDefinition?: (ctx: AttributeDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.portDefinition`.
	 * @param ctx the parse tree
	 */
	enterPortDefinition?: (ctx: PortDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.portDefinition`.
	 * @param ctx the parse tree
	 */
	exitPortDefinition?: (ctx: PortDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.connectionDefinition`.
	 * @param ctx the parse tree
	 */
	enterConnectionDefinition?: (ctx: ConnectionDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.connectionDefinition`.
	 * @param ctx the parse tree
	 */
	exitConnectionDefinition?: (ctx: ConnectionDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.interfaceDefinition`.
	 * @param ctx the parse tree
	 */
	enterInterfaceDefinition?: (ctx: InterfaceDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.interfaceDefinition`.
	 * @param ctx the parse tree
	 */
	exitInterfaceDefinition?: (ctx: InterfaceDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.allocationDefinition`.
	 * @param ctx the parse tree
	 */
	enterAllocationDefinition?: (ctx: AllocationDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.allocationDefinition`.
	 * @param ctx the parse tree
	 */
	exitAllocationDefinition?: (ctx: AllocationDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.itemDefinition`.
	 * @param ctx the parse tree
	 */
	enterItemDefinition?: (ctx: ItemDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.itemDefinition`.
	 * @param ctx the parse tree
	 */
	exitItemDefinition?: (ctx: ItemDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.enumDefinition`.
	 * @param ctx the parse tree
	 */
	enterEnumDefinition?: (ctx: EnumDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.enumDefinition`.
	 * @param ctx the parse tree
	 */
	exitEnumDefinition?: (ctx: EnumDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.calcDefinition`.
	 * @param ctx the parse tree
	 */
	enterCalcDefinition?: (ctx: CalcDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.calcDefinition`.
	 * @param ctx the parse tree
	 */
	exitCalcDefinition?: (ctx: CalcDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.analysisDefinition`.
	 * @param ctx the parse tree
	 */
	enterAnalysisDefinition?: (ctx: AnalysisDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.analysisDefinition`.
	 * @param ctx the parse tree
	 */
	exitAnalysisDefinition?: (ctx: AnalysisDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.caseDefinition`.
	 * @param ctx the parse tree
	 */
	enterCaseDefinition?: (ctx: CaseDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.caseDefinition`.
	 * @param ctx the parse tree
	 */
	exitCaseDefinition?: (ctx: CaseDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.useCaseDefinition`.
	 * @param ctx the parse tree
	 */
	enterUseCaseDefinition?: (ctx: UseCaseDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.useCaseDefinition`.
	 * @param ctx the parse tree
	 */
	exitUseCaseDefinition?: (ctx: UseCaseDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.verificationDefinition`.
	 * @param ctx the parse tree
	 */
	enterVerificationDefinition?: (ctx: VerificationDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.verificationDefinition`.
	 * @param ctx the parse tree
	 */
	exitVerificationDefinition?: (ctx: VerificationDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.concernDefinition`.
	 * @param ctx the parse tree
	 */
	enterConcernDefinition?: (ctx: ConcernDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.concernDefinition`.
	 * @param ctx the parse tree
	 */
	exitConcernDefinition?: (ctx: ConcernDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.renderingDefinition`.
	 * @param ctx the parse tree
	 */
	enterRenderingDefinition?: (ctx: RenderingDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.renderingDefinition`.
	 * @param ctx the parse tree
	 */
	exitRenderingDefinition?: (ctx: RenderingDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.occurrenceDefinition`.
	 * @param ctx the parse tree
	 */
	enterOccurrenceDefinition?: (ctx: OccurrenceDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.occurrenceDefinition`.
	 * @param ctx the parse tree
	 */
	exitOccurrenceDefinition?: (ctx: OccurrenceDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.flowDefinition`.
	 * @param ctx the parse tree
	 */
	enterFlowDefinition?: (ctx: FlowDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.flowDefinition`.
	 * @param ctx the parse tree
	 */
	exitFlowDefinition?: (ctx: FlowDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.metadataDefinition`.
	 * @param ctx the parse tree
	 */
	enterMetadataDefinition?: (ctx: MetadataDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.metadataDefinition`.
	 * @param ctx the parse tree
	 */
	exitMetadataDefinition?: (ctx: MetadataDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.individualDefinition`.
	 * @param ctx the parse tree
	 */
	enterIndividualDefinition?: (ctx: IndividualDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.individualDefinition`.
	 * @param ctx the parse tree
	 */
	exitIndividualDefinition?: (ctx: IndividualDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.metadataDefBody`.
	 * @param ctx the parse tree
	 */
	enterMetadataDefBody?: (ctx: MetadataDefBodyContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.metadataDefBody`.
	 * @param ctx the parse tree
	 */
	exitMetadataDefBody?: (ctx: MetadataDefBodyContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.metadataDefBodyElement`.
	 * @param ctx the parse tree
	 */
	enterMetadataDefBodyElement?: (ctx: MetadataDefBodyElementContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.metadataDefBodyElement`.
	 * @param ctx the parse tree
	 */
	exitMetadataDefBodyElement?: (ctx: MetadataDefBodyElementContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.datatypeDefinition`.
	 * @param ctx the parse tree
	 */
	enterDatatypeDefinition?: (ctx: DatatypeDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.datatypeDefinition`.
	 * @param ctx the parse tree
	 */
	exitDatatypeDefinition?: (ctx: DatatypeDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.classDefinition`.
	 * @param ctx the parse tree
	 */
	enterClassDefinition?: (ctx: ClassDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.classDefinition`.
	 * @param ctx the parse tree
	 */
	exitClassDefinition?: (ctx: ClassDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.structDefinition`.
	 * @param ctx the parse tree
	 */
	enterStructDefinition?: (ctx: StructDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.structDefinition`.
	 * @param ctx the parse tree
	 */
	exitStructDefinition?: (ctx: StructDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.assocDefinition`.
	 * @param ctx the parse tree
	 */
	enterAssocDefinition?: (ctx: AssocDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.assocDefinition`.
	 * @param ctx the parse tree
	 */
	exitAssocDefinition?: (ctx: AssocDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.behaviorDefinition`.
	 * @param ctx the parse tree
	 */
	enterBehaviorDefinition?: (ctx: BehaviorDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.behaviorDefinition`.
	 * @param ctx the parse tree
	 */
	exitBehaviorDefinition?: (ctx: BehaviorDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.functionDefinition`.
	 * @param ctx the parse tree
	 */
	enterFunctionDefinition?: (ctx: FunctionDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.functionDefinition`.
	 * @param ctx the parse tree
	 */
	exitFunctionDefinition?: (ctx: FunctionDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.predicateDefinition`.
	 * @param ctx the parse tree
	 */
	enterPredicateDefinition?: (ctx: PredicateDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.predicateDefinition`.
	 * @param ctx the parse tree
	 */
	exitPredicateDefinition?: (ctx: PredicateDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.interactionDefinition`.
	 * @param ctx the parse tree
	 */
	enterInteractionDefinition?: (ctx: InteractionDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.interactionDefinition`.
	 * @param ctx the parse tree
	 */
	exitInteractionDefinition?: (ctx: InteractionDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.metaclassDefinition`.
	 * @param ctx the parse tree
	 */
	enterMetaclassDefinition?: (ctx: MetaclassDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.metaclassDefinition`.
	 * @param ctx the parse tree
	 */
	exitMetaclassDefinition?: (ctx: MetaclassDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.classifierDefinition`.
	 * @param ctx the parse tree
	 */
	enterClassifierDefinition?: (ctx: ClassifierDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.classifierDefinition`.
	 * @param ctx the parse tree
	 */
	exitClassifierDefinition?: (ctx: ClassifierDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.typeDefinition`.
	 * @param ctx the parse tree
	 */
	enterTypeDefinition?: (ctx: TypeDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.typeDefinition`.
	 * @param ctx the parse tree
	 */
	exitTypeDefinition?: (ctx: TypeDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.featureDefinition`.
	 * @param ctx the parse tree
	 */
	enterFeatureDefinition?: (ctx: FeatureDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.featureDefinition`.
	 * @param ctx the parse tree
	 */
	exitFeatureDefinition?: (ctx: FeatureDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.connectorDefinition`.
	 * @param ctx the parse tree
	 */
	enterConnectorDefinition?: (ctx: ConnectorDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.connectorDefinition`.
	 * @param ctx the parse tree
	 */
	exitConnectorDefinition?: (ctx: ConnectorDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.bindingConnectorDefinition`.
	 * @param ctx the parse tree
	 */
	enterBindingConnectorDefinition?: (ctx: BindingConnectorDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.bindingConnectorDefinition`.
	 * @param ctx the parse tree
	 */
	exitBindingConnectorDefinition?: (ctx: BindingConnectorDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.partUsage`.
	 * @param ctx the parse tree
	 */
	enterPartUsage?: (ctx: PartUsageContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.partUsage`.
	 * @param ctx the parse tree
	 */
	exitPartUsage?: (ctx: PartUsageContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.actionUsage`.
	 * @param ctx the parse tree
	 */
	enterActionUsage?: (ctx: ActionUsageContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.actionUsage`.
	 * @param ctx the parse tree
	 */
	exitActionUsage?: (ctx: ActionUsageContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.actionKeyword`.
	 * @param ctx the parse tree
	 */
	enterActionKeyword?: (ctx: ActionKeywordContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.actionKeyword`.
	 * @param ctx the parse tree
	 */
	exitActionKeyword?: (ctx: ActionKeywordContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.actionSendClause`.
	 * @param ctx the parse tree
	 */
	enterActionSendClause?: (ctx: ActionSendClauseContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.actionSendClause`.
	 * @param ctx the parse tree
	 */
	exitActionSendClause?: (ctx: ActionSendClauseContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.stateUsage`.
	 * @param ctx the parse tree
	 */
	enterStateUsage?: (ctx: StateUsageContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.stateUsage`.
	 * @param ctx the parse tree
	 */
	exitStateUsage?: (ctx: StateUsageContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.requirementUsage`.
	 * @param ctx the parse tree
	 */
	enterRequirementUsage?: (ctx: RequirementUsageContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.requirementUsage`.
	 * @param ctx the parse tree
	 */
	exitRequirementUsage?: (ctx: RequirementUsageContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.viewUsage`.
	 * @param ctx the parse tree
	 */
	enterViewUsage?: (ctx: ViewUsageContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.viewUsage`.
	 * @param ctx the parse tree
	 */
	exitViewUsage?: (ctx: ViewUsageContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.constraintUsage`.
	 * @param ctx the parse tree
	 */
	enterConstraintUsage?: (ctx: ConstraintUsageContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.constraintUsage`.
	 * @param ctx the parse tree
	 */
	exitConstraintUsage?: (ctx: ConstraintUsageContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.constraintBody`.
	 * @param ctx the parse tree
	 */
	enterConstraintBody?: (ctx: ConstraintBodyContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.constraintBody`.
	 * @param ctx the parse tree
	 */
	exitConstraintBody?: (ctx: ConstraintBodyContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.constraintBodyElement`.
	 * @param ctx the parse tree
	 */
	enterConstraintBodyElement?: (ctx: ConstraintBodyElementContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.constraintBodyElement`.
	 * @param ctx the parse tree
	 */
	exitConstraintBodyElement?: (ctx: ConstraintBodyElementContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.constraintParameter`.
	 * @param ctx the parse tree
	 */
	enterConstraintParameter?: (ctx: ConstraintParameterContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.constraintParameter`.
	 * @param ctx the parse tree
	 */
	exitConstraintParameter?: (ctx: ConstraintParameterContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.constraintExpression`.
	 * @param ctx the parse tree
	 */
	enterConstraintExpression?: (ctx: ConstraintExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.constraintExpression`.
	 * @param ctx the parse tree
	 */
	exitConstraintExpression?: (ctx: ConstraintExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.attributeUsage`.
	 * @param ctx the parse tree
	 */
	enterAttributeUsage?: (ctx: AttributeUsageContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.attributeUsage`.
	 * @param ctx the parse tree
	 */
	exitAttributeUsage?: (ctx: AttributeUsageContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.enumUsage`.
	 * @param ctx the parse tree
	 */
	enterEnumUsage?: (ctx: EnumUsageContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.enumUsage`.
	 * @param ctx the parse tree
	 */
	exitEnumUsage?: (ctx: EnumUsageContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.tupleOrValueInit`.
	 * @param ctx the parse tree
	 */
	enterTupleOrValueInit?: (ctx: TupleOrValueInitContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.tupleOrValueInit`.
	 * @param ctx the parse tree
	 */
	exitTupleOrValueInit?: (ctx: TupleOrValueInitContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.portUsage`.
	 * @param ctx the parse tree
	 */
	enterPortUsage?: (ctx: PortUsageContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.portUsage`.
	 * @param ctx the parse tree
	 */
	exitPortUsage?: (ctx: PortUsageContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.itemUsage`.
	 * @param ctx the parse tree
	 */
	enterItemUsage?: (ctx: ItemUsageContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.itemUsage`.
	 * @param ctx the parse tree
	 */
	exitItemUsage?: (ctx: ItemUsageContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.refUsage`.
	 * @param ctx the parse tree
	 */
	enterRefUsage?: (ctx: RefUsageContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.refUsage`.
	 * @param ctx the parse tree
	 */
	exitRefUsage?: (ctx: RefUsageContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.refKind`.
	 * @param ctx the parse tree
	 */
	enterRefKind?: (ctx: RefKindContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.refKind`.
	 * @param ctx the parse tree
	 */
	exitRefKind?: (ctx: RefKindContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.connectionUsage`.
	 * @param ctx the parse tree
	 */
	enterConnectionUsage?: (ctx: ConnectionUsageContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.connectionUsage`.
	 * @param ctx the parse tree
	 */
	exitConnectionUsage?: (ctx: ConnectionUsageContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.flowConnectionUsage`.
	 * @param ctx the parse tree
	 */
	enterFlowConnectionUsage?: (ctx: FlowConnectionUsageContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.flowConnectionUsage`.
	 * @param ctx the parse tree
	 */
	exitFlowConnectionUsage?: (ctx: FlowConnectionUsageContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.successionUsage`.
	 * @param ctx the parse tree
	 */
	enterSuccessionUsage?: (ctx: SuccessionUsageContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.successionUsage`.
	 * @param ctx the parse tree
	 */
	exitSuccessionUsage?: (ctx: SuccessionUsageContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.successionFlowOf`.
	 * @param ctx the parse tree
	 */
	enterSuccessionFlowOf?: (ctx: SuccessionFlowOfContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.successionFlowOf`.
	 * @param ctx the parse tree
	 */
	exitSuccessionFlowOf?: (ctx: SuccessionFlowOfContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.transitionUsage`.
	 * @param ctx the parse tree
	 */
	enterTransitionUsage?: (ctx: TransitionUsageContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.transitionUsage`.
	 * @param ctx the parse tree
	 */
	exitTransitionUsage?: (ctx: TransitionUsageContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.satisfyRequirement`.
	 * @param ctx the parse tree
	 */
	enterSatisfyRequirement?: (ctx: SatisfyRequirementContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.satisfyRequirement`.
	 * @param ctx the parse tree
	 */
	exitSatisfyRequirement?: (ctx: SatisfyRequirementContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.allocateUsage`.
	 * @param ctx the parse tree
	 */
	enterAllocateUsage?: (ctx: AllocateUsageContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.allocateUsage`.
	 * @param ctx the parse tree
	 */
	exitAllocateUsage?: (ctx: AllocateUsageContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.namedAllocationList`.
	 * @param ctx the parse tree
	 */
	enterNamedAllocationList?: (ctx: NamedAllocationListContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.namedAllocationList`.
	 * @param ctx the parse tree
	 */
	exitNamedAllocationList?: (ctx: NamedAllocationListContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.namedAllocation`.
	 * @param ctx the parse tree
	 */
	enterNamedAllocation?: (ctx: NamedAllocationContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.namedAllocation`.
	 * @param ctx the parse tree
	 */
	exitNamedAllocation?: (ctx: NamedAllocationContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.performUsage`.
	 * @param ctx the parse tree
	 */
	enterPerformUsage?: (ctx: PerformUsageContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.performUsage`.
	 * @param ctx the parse tree
	 */
	exitPerformUsage?: (ctx: PerformUsageContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.exhibitUsage`.
	 * @param ctx the parse tree
	 */
	enterExhibitUsage?: (ctx: ExhibitUsageContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.exhibitUsage`.
	 * @param ctx the parse tree
	 */
	exitExhibitUsage?: (ctx: ExhibitUsageContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.includeUsage`.
	 * @param ctx the parse tree
	 */
	enterIncludeUsage?: (ctx: IncludeUsageContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.includeUsage`.
	 * @param ctx the parse tree
	 */
	exitIncludeUsage?: (ctx: IncludeUsageContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.calcUsage`.
	 * @param ctx the parse tree
	 */
	enterCalcUsage?: (ctx: CalcUsageContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.calcUsage`.
	 * @param ctx the parse tree
	 */
	exitCalcUsage?: (ctx: CalcUsageContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.analysisUsage`.
	 * @param ctx the parse tree
	 */
	enterAnalysisUsage?: (ctx: AnalysisUsageContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.analysisUsage`.
	 * @param ctx the parse tree
	 */
	exitAnalysisUsage?: (ctx: AnalysisUsageContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.caseUsage`.
	 * @param ctx the parse tree
	 */
	enterCaseUsage?: (ctx: CaseUsageContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.caseUsage`.
	 * @param ctx the parse tree
	 */
	exitCaseUsage?: (ctx: CaseUsageContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.useCaseUsage`.
	 * @param ctx the parse tree
	 */
	enterUseCaseUsage?: (ctx: UseCaseUsageContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.useCaseUsage`.
	 * @param ctx the parse tree
	 */
	exitUseCaseUsage?: (ctx: UseCaseUsageContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.verificationUsage`.
	 * @param ctx the parse tree
	 */
	enterVerificationUsage?: (ctx: VerificationUsageContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.verificationUsage`.
	 * @param ctx the parse tree
	 */
	exitVerificationUsage?: (ctx: VerificationUsageContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.renderingUsage`.
	 * @param ctx the parse tree
	 */
	enterRenderingUsage?: (ctx: RenderingUsageContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.renderingUsage`.
	 * @param ctx the parse tree
	 */
	exitRenderingUsage?: (ctx: RenderingUsageContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.viewpointUsage`.
	 * @param ctx the parse tree
	 */
	enterViewpointUsage?: (ctx: ViewpointUsageContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.viewpointUsage`.
	 * @param ctx the parse tree
	 */
	exitViewpointUsage?: (ctx: ViewpointUsageContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.actorUsage`.
	 * @param ctx the parse tree
	 */
	enterActorUsage?: (ctx: ActorUsageContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.actorUsage`.
	 * @param ctx the parse tree
	 */
	exitActorUsage?: (ctx: ActorUsageContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.stakeholderUsage`.
	 * @param ctx the parse tree
	 */
	enterStakeholderUsage?: (ctx: StakeholderUsageContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.stakeholderUsage`.
	 * @param ctx the parse tree
	 */
	exitStakeholderUsage?: (ctx: StakeholderUsageContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.concernUsage`.
	 * @param ctx the parse tree
	 */
	enterConcernUsage?: (ctx: ConcernUsageContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.concernUsage`.
	 * @param ctx the parse tree
	 */
	exitConcernUsage?: (ctx: ConcernUsageContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.concernBody`.
	 * @param ctx the parse tree
	 */
	enterConcernBody?: (ctx: ConcernBodyContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.concernBody`.
	 * @param ctx the parse tree
	 */
	exitConcernBody?: (ctx: ConcernBodyContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.concernBodyElement`.
	 * @param ctx the parse tree
	 */
	enterConcernBodyElement?: (ctx: ConcernBodyElementContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.concernBodyElement`.
	 * @param ctx the parse tree
	 */
	exitConcernBodyElement?: (ctx: ConcernBodyElementContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.occurrenceUsage`.
	 * @param ctx the parse tree
	 */
	enterOccurrenceUsage?: (ctx: OccurrenceUsageContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.occurrenceUsage`.
	 * @param ctx the parse tree
	 */
	exitOccurrenceUsage?: (ctx: OccurrenceUsageContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.variantUsage`.
	 * @param ctx the parse tree
	 */
	enterVariantUsage?: (ctx: VariantUsageContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.variantUsage`.
	 * @param ctx the parse tree
	 */
	exitVariantUsage?: (ctx: VariantUsageContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.portionUsage`.
	 * @param ctx the parse tree
	 */
	enterPortionUsage?: (ctx: PortionUsageContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.portionUsage`.
	 * @param ctx the parse tree
	 */
	exitPortionUsage?: (ctx: PortionUsageContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.stepUsage`.
	 * @param ctx the parse tree
	 */
	enterStepUsage?: (ctx: StepUsageContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.stepUsage`.
	 * @param ctx the parse tree
	 */
	exitStepUsage?: (ctx: StepUsageContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.interfaceUsage`.
	 * @param ctx the parse tree
	 */
	enterInterfaceUsage?: (ctx: InterfaceUsageContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.interfaceUsage`.
	 * @param ctx the parse tree
	 */
	exitInterfaceUsage?: (ctx: InterfaceUsageContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.decideNode`.
	 * @param ctx the parse tree
	 */
	enterDecideNode?: (ctx: DecideNodeContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.decideNode`.
	 * @param ctx the parse tree
	 */
	exitDecideNode?: (ctx: DecideNodeContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.decideBody`.
	 * @param ctx the parse tree
	 */
	enterDecideBody?: (ctx: DecideBodyContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.decideBody`.
	 * @param ctx the parse tree
	 */
	exitDecideBody?: (ctx: DecideBodyContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.ifBranch`.
	 * @param ctx the parse tree
	 */
	enterIfBranch?: (ctx: IfBranchContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.ifBranch`.
	 * @param ctx the parse tree
	 */
	exitIfBranch?: (ctx: IfBranchContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.elseBranch`.
	 * @param ctx the parse tree
	 */
	enterElseBranch?: (ctx: ElseBranchContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.elseBranch`.
	 * @param ctx the parse tree
	 */
	exitElseBranch?: (ctx: ElseBranchContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.mergeNode`.
	 * @param ctx the parse tree
	 */
	enterMergeNode?: (ctx: MergeNodeContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.mergeNode`.
	 * @param ctx the parse tree
	 */
	exitMergeNode?: (ctx: MergeNodeContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.forkNode`.
	 * @param ctx the parse tree
	 */
	enterForkNode?: (ctx: ForkNodeContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.forkNode`.
	 * @param ctx the parse tree
	 */
	exitForkNode?: (ctx: ForkNodeContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.joinNode`.
	 * @param ctx the parse tree
	 */
	enterJoinNode?: (ctx: JoinNodeContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.joinNode`.
	 * @param ctx the parse tree
	 */
	exitJoinNode?: (ctx: JoinNodeContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.bindingUsage`.
	 * @param ctx the parse tree
	 */
	enterBindingUsage?: (ctx: BindingUsageContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.bindingUsage`.
	 * @param ctx the parse tree
	 */
	exitBindingUsage?: (ctx: BindingUsageContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.acceptUsage`.
	 * @param ctx the parse tree
	 */
	enterAcceptUsage?: (ctx: AcceptUsageContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.acceptUsage`.
	 * @param ctx the parse tree
	 */
	exitAcceptUsage?: (ctx: AcceptUsageContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.acceptTiming`.
	 * @param ctx the parse tree
	 */
	enterAcceptTiming?: (ctx: AcceptTimingContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.acceptTiming`.
	 * @param ctx the parse tree
	 */
	exitAcceptTiming?: (ctx: AcceptTimingContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.sendUsage`.
	 * @param ctx the parse tree
	 */
	enterSendUsage?: (ctx: SendUsageContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.sendUsage`.
	 * @param ctx the parse tree
	 */
	exitSendUsage?: (ctx: SendUsageContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.assignUsage`.
	 * @param ctx the parse tree
	 */
	enterAssignUsage?: (ctx: AssignUsageContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.assignUsage`.
	 * @param ctx the parse tree
	 */
	exitAssignUsage?: (ctx: AssignUsageContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.messageUsage`.
	 * @param ctx the parse tree
	 */
	enterMessageUsage?: (ctx: MessageUsageContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.messageUsage`.
	 * @param ctx the parse tree
	 */
	exitMessageUsage?: (ctx: MessageUsageContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.dependencyDeclaration`.
	 * @param ctx the parse tree
	 */
	enterDependencyDeclaration?: (ctx: DependencyDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.dependencyDeclaration`.
	 * @param ctx the parse tree
	 */
	exitDependencyDeclaration?: (ctx: DependencyDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.metadataUsage`.
	 * @param ctx the parse tree
	 */
	enterMetadataUsage?: (ctx: MetadataUsageContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.metadataUsage`.
	 * @param ctx the parse tree
	 */
	exitMetadataUsage?: (ctx: MetadataUsageContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.metadataBody`.
	 * @param ctx the parse tree
	 */
	enterMetadataBody?: (ctx: MetadataBodyContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.metadataBody`.
	 * @param ctx the parse tree
	 */
	exitMetadataBody?: (ctx: MetadataBodyContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.metadataBodyElement`.
	 * @param ctx the parse tree
	 */
	enterMetadataBodyElement?: (ctx: MetadataBodyElementContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.metadataBodyElement`.
	 * @param ctx the parse tree
	 */
	exitMetadataBodyElement?: (ctx: MetadataBodyElementContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.endUsage`.
	 * @param ctx the parse tree
	 */
	enterEndUsage?: (ctx: EndUsageContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.endUsage`.
	 * @param ctx the parse tree
	 */
	exitEndUsage?: (ctx: EndUsageContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.endModifiers`.
	 * @param ctx the parse tree
	 */
	enterEndModifiers?: (ctx: EndModifiersContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.endModifiers`.
	 * @param ctx the parse tree
	 */
	exitEndModifiers?: (ctx: EndModifiersContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.endMemberKind`.
	 * @param ctx the parse tree
	 */
	enterEndMemberKind?: (ctx: EndMemberKindContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.endMemberKind`.
	 * @param ctx the parse tree
	 */
	exitEndMemberKind?: (ctx: EndMemberKindContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.declarationName`.
	 * @param ctx the parse tree
	 */
	enterDeclarationName?: (ctx: DeclarationNameContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.declarationName`.
	 * @param ctx the parse tree
	 */
	exitDeclarationName?: (ctx: DeclarationNameContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.usageName`.
	 * @param ctx the parse tree
	 */
	enterUsageName?: (ctx: UsageNameContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.usageName`.
	 * @param ctx the parse tree
	 */
	exitUsageName?: (ctx: UsageNameContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.name`.
	 * @param ctx the parse tree
	 */
	enterName?: (ctx: NameContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.name`.
	 * @param ctx the parse tree
	 */
	exitName?: (ctx: NameContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.shortName`.
	 * @param ctx the parse tree
	 */
	enterShortName?: (ctx: ShortNameContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.shortName`.
	 * @param ctx the parse tree
	 */
	exitShortName?: (ctx: ShortNameContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.qualifiedName`.
	 * @param ctx the parse tree
	 */
	enterQualifiedName?: (ctx: QualifiedNameContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.qualifiedName`.
	 * @param ctx the parse tree
	 */
	exitQualifiedName?: (ctx: QualifiedNameContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.featureChain`.
	 * @param ctx the parse tree
	 */
	enterFeatureChain?: (ctx: FeatureChainContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.featureChain`.
	 * @param ctx the parse tree
	 */
	exitFeatureChain?: (ctx: FeatureChainContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.typeRelationships`.
	 * @param ctx the parse tree
	 */
	enterTypeRelationships?: (ctx: TypeRelationshipsContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.typeRelationships`.
	 * @param ctx the parse tree
	 */
	exitTypeRelationships?: (ctx: TypeRelationshipsContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.typeRelationship`.
	 * @param ctx the parse tree
	 */
	enterTypeRelationship?: (ctx: TypeRelationshipContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.typeRelationship`.
	 * @param ctx the parse tree
	 */
	exitTypeRelationship?: (ctx: TypeRelationshipContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.featureRelationships`.
	 * @param ctx the parse tree
	 */
	enterFeatureRelationships?: (ctx: FeatureRelationshipsContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.featureRelationships`.
	 * @param ctx the parse tree
	 */
	exitFeatureRelationships?: (ctx: FeatureRelationshipsContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.featureRelationship`.
	 * @param ctx the parse tree
	 */
	enterFeatureRelationship?: (ctx: FeatureRelationshipContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.featureRelationship`.
	 * @param ctx the parse tree
	 */
	exitFeatureRelationship?: (ctx: FeatureRelationshipContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.specializesClause`.
	 * @param ctx the parse tree
	 */
	enterSpecializesClause?: (ctx: SpecializesClauseContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.specializesClause`.
	 * @param ctx the parse tree
	 */
	exitSpecializesClause?: (ctx: SpecializesClauseContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.redefinesClause`.
	 * @param ctx the parse tree
	 */
	enterRedefinesClause?: (ctx: RedefinesClauseContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.redefinesClause`.
	 * @param ctx the parse tree
	 */
	exitRedefinesClause?: (ctx: RedefinesClauseContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.subsetsClause`.
	 * @param ctx the parse tree
	 */
	enterSubsetsClause?: (ctx: SubsetsClauseContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.subsetsClause`.
	 * @param ctx the parse tree
	 */
	exitSubsetsClause?: (ctx: SubsetsClauseContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.referencesClause`.
	 * @param ctx the parse tree
	 */
	enterReferencesClause?: (ctx: ReferencesClauseContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.referencesClause`.
	 * @param ctx the parse tree
	 */
	exitReferencesClause?: (ctx: ReferencesClauseContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.conjugatesClause`.
	 * @param ctx the parse tree
	 */
	enterConjugatesClause?: (ctx: ConjugatesClauseContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.conjugatesClause`.
	 * @param ctx the parse tree
	 */
	exitConjugatesClause?: (ctx: ConjugatesClauseContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.typingClause`.
	 * @param ctx the parse tree
	 */
	enterTypingClause?: (ctx: TypingClauseContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.typingClause`.
	 * @param ctx the parse tree
	 */
	exitTypingClause?: (ctx: TypingClauseContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.unionsClause`.
	 * @param ctx the parse tree
	 */
	enterUnionsClause?: (ctx: UnionsClauseContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.unionsClause`.
	 * @param ctx the parse tree
	 */
	exitUnionsClause?: (ctx: UnionsClauseContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.intersectsClause`.
	 * @param ctx the parse tree
	 */
	enterIntersectsClause?: (ctx: IntersectsClauseContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.intersectsClause`.
	 * @param ctx the parse tree
	 */
	exitIntersectsClause?: (ctx: IntersectsClauseContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.differencesClause`.
	 * @param ctx the parse tree
	 */
	enterDifferencesClause?: (ctx: DifferencesClauseContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.differencesClause`.
	 * @param ctx the parse tree
	 */
	exitDifferencesClause?: (ctx: DifferencesClauseContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.disjointClause`.
	 * @param ctx the parse tree
	 */
	enterDisjointClause?: (ctx: DisjointClauseContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.disjointClause`.
	 * @param ctx the parse tree
	 */
	exitDisjointClause?: (ctx: DisjointClauseContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.multiplicityClause`.
	 * @param ctx the parse tree
	 */
	enterMultiplicityClause?: (ctx: MultiplicityClauseContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.multiplicityClause`.
	 * @param ctx the parse tree
	 */
	exitMultiplicityClause?: (ctx: MultiplicityClauseContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.multiplicityRange`.
	 * @param ctx the parse tree
	 */
	enterMultiplicityRange?: (ctx: MultiplicityRangeContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.multiplicityRange`.
	 * @param ctx the parse tree
	 */
	exitMultiplicityRange?: (ctx: MultiplicityRangeContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.multiplicityBound`.
	 * @param ctx the parse tree
	 */
	enterMultiplicityBound?: (ctx: MultiplicityBoundContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.multiplicityBound`.
	 * @param ctx the parse tree
	 */
	exitMultiplicityBound?: (ctx: MultiplicityBoundContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.connectionEndpoints`.
	 * @param ctx the parse tree
	 */
	enterConnectionEndpoints?: (ctx: ConnectionEndpointsContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.connectionEndpoints`.
	 * @param ctx the parse tree
	 */
	exitConnectionEndpoints?: (ctx: ConnectionEndpointsContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.expressionList`.
	 * @param ctx the parse tree
	 */
	enterExpressionList?: (ctx: ExpressionListContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.expressionList`.
	 * @param ctx the parse tree
	 */
	exitExpressionList?: (ctx: ExpressionListContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.flowEndpoints`.
	 * @param ctx the parse tree
	 */
	enterFlowEndpoints?: (ctx: FlowEndpointsContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.flowEndpoints`.
	 * @param ctx the parse tree
	 */
	exitFlowEndpoints?: (ctx: FlowEndpointsContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.successionEndpoints`.
	 * @param ctx the parse tree
	 */
	enterSuccessionEndpoints?: (ctx: SuccessionEndpointsContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.successionEndpoints`.
	 * @param ctx the parse tree
	 */
	exitSuccessionEndpoints?: (ctx: SuccessionEndpointsContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.transitionRelationships`.
	 * @param ctx the parse tree
	 */
	enterTransitionRelationships?: (ctx: TransitionRelationshipsContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.transitionRelationships`.
	 * @param ctx the parse tree
	 */
	exitTransitionRelationships?: (ctx: TransitionRelationshipsContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.definitionBody`.
	 * @param ctx the parse tree
	 */
	enterDefinitionBody?: (ctx: DefinitionBodyContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.definitionBody`.
	 * @param ctx the parse tree
	 */
	exitDefinitionBody?: (ctx: DefinitionBodyContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.definitionBodyElement`.
	 * @param ctx the parse tree
	 */
	enterDefinitionBodyElement?: (ctx: DefinitionBodyElementContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.definitionBodyElement`.
	 * @param ctx the parse tree
	 */
	exitDefinitionBodyElement?: (ctx: DefinitionBodyElementContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.simpleFeature`.
	 * @param ctx the parse tree
	 */
	enterSimpleFeature?: (ctx: SimpleFeatureContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.simpleFeature`.
	 * @param ctx the parse tree
	 */
	exitSimpleFeature?: (ctx: SimpleFeatureContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.returnFeature`.
	 * @param ctx the parse tree
	 */
	enterReturnFeature?: (ctx: ReturnFeatureContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.returnFeature`.
	 * @param ctx the parse tree
	 */
	exitReturnFeature?: (ctx: ReturnFeatureContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.inParameter`.
	 * @param ctx the parse tree
	 */
	enterInParameter?: (ctx: InParameterContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.inParameter`.
	 * @param ctx the parse tree
	 */
	exitInParameter?: (ctx: InParameterContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.parameterValueInit`.
	 * @param ctx the parse tree
	 */
	enterParameterValueInit?: (ctx: ParameterValueInitContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.parameterValueInit`.
	 * @param ctx the parse tree
	 */
	exitParameterValueInit?: (ctx: ParameterValueInitContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.outParameter`.
	 * @param ctx the parse tree
	 */
	enterOutParameter?: (ctx: OutParameterContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.outParameter`.
	 * @param ctx the parse tree
	 */
	exitOutParameter?: (ctx: OutParameterContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.inoutParameter`.
	 * @param ctx the parse tree
	 */
	enterInoutParameter?: (ctx: InoutParameterContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.inoutParameter`.
	 * @param ctx the parse tree
	 */
	exitInoutParameter?: (ctx: InoutParameterContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.usageBody`.
	 * @param ctx the parse tree
	 */
	enterUsageBody?: (ctx: UsageBodyContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.usageBody`.
	 * @param ctx the parse tree
	 */
	exitUsageBody?: (ctx: UsageBodyContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.usageBodyElement`.
	 * @param ctx the parse tree
	 */
	enterUsageBodyElement?: (ctx: UsageBodyElementContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.usageBodyElement`.
	 * @param ctx the parse tree
	 */
	exitUsageBodyElement?: (ctx: UsageBodyElementContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.simpleParameter`.
	 * @param ctx the parse tree
	 */
	enterSimpleParameter?: (ctx: SimpleParameterContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.simpleParameter`.
	 * @param ctx the parse tree
	 */
	exitSimpleParameter?: (ctx: SimpleParameterContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.anonymousRedefines`.
	 * @param ctx the parse tree
	 */
	enterAnonymousRedefines?: (ctx: AnonymousRedefinesContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.anonymousRedefines`.
	 * @param ctx the parse tree
	 */
	exitAnonymousRedefines?: (ctx: AnonymousRedefinesContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.metaExpression`.
	 * @param ctx the parse tree
	 */
	enterMetaExpression?: (ctx: MetaExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.metaExpression`.
	 * @param ctx the parse tree
	 */
	exitMetaExpression?: (ctx: MetaExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.stateDefinitionBody`.
	 * @param ctx the parse tree
	 */
	enterStateDefinitionBody?: (ctx: StateDefinitionBodyContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.stateDefinitionBody`.
	 * @param ctx the parse tree
	 */
	exitStateDefinitionBody?: (ctx: StateDefinitionBodyContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.stateUsageBody`.
	 * @param ctx the parse tree
	 */
	enterStateUsageBody?: (ctx: StateUsageBodyContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.stateUsageBody`.
	 * @param ctx the parse tree
	 */
	exitStateUsageBody?: (ctx: StateUsageBodyContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.stateBodyElement`.
	 * @param ctx the parse tree
	 */
	enterStateBodyElement?: (ctx: StateBodyElementContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.stateBodyElement`.
	 * @param ctx the parse tree
	 */
	exitStateBodyElement?: (ctx: StateBodyElementContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.acceptTransition`.
	 * @param ctx the parse tree
	 */
	enterAcceptTransition?: (ctx: AcceptTransitionContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.acceptTransition`.
	 * @param ctx the parse tree
	 */
	exitAcceptTransition?: (ctx: AcceptTransitionContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.doActionClause`.
	 * @param ctx the parse tree
	 */
	enterDoActionClause?: (ctx: DoActionClauseContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.doActionClause`.
	 * @param ctx the parse tree
	 */
	exitDoActionClause?: (ctx: DoActionClauseContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.requirementBody`.
	 * @param ctx the parse tree
	 */
	enterRequirementBody?: (ctx: RequirementBodyContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.requirementBody`.
	 * @param ctx the parse tree
	 */
	exitRequirementBody?: (ctx: RequirementBodyContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.requirementBodyElement`.
	 * @param ctx the parse tree
	 */
	enterRequirementBodyElement?: (ctx: RequirementBodyElementContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.requirementBodyElement`.
	 * @param ctx the parse tree
	 */
	exitRequirementBodyElement?: (ctx: RequirementBodyElementContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.viewBody`.
	 * @param ctx the parse tree
	 */
	enterViewBody?: (ctx: ViewBodyContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.viewBody`.
	 * @param ctx the parse tree
	 */
	exitViewBody?: (ctx: ViewBodyContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.viewBodyElement`.
	 * @param ctx the parse tree
	 */
	enterViewBodyElement?: (ctx: ViewBodyElementContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.viewBodyElement`.
	 * @param ctx the parse tree
	 */
	exitViewBodyElement?: (ctx: ViewBodyElementContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.enumBody`.
	 * @param ctx the parse tree
	 */
	enterEnumBody?: (ctx: EnumBodyContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.enumBody`.
	 * @param ctx the parse tree
	 */
	exitEnumBody?: (ctx: EnumBodyContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.enumBodyElement`.
	 * @param ctx the parse tree
	 */
	enterEnumBodyElement?: (ctx: EnumBodyElementContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.enumBodyElement`.
	 * @param ctx the parse tree
	 */
	exitEnumBodyElement?: (ctx: EnumBodyElementContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.enumMember`.
	 * @param ctx the parse tree
	 */
	enterEnumMember?: (ctx: EnumMemberContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.enumMember`.
	 * @param ctx the parse tree
	 */
	exitEnumMember?: (ctx: EnumMemberContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.enumMemberBody`.
	 * @param ctx the parse tree
	 */
	enterEnumMemberBody?: (ctx: EnumMemberBodyContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.enumMemberBody`.
	 * @param ctx the parse tree
	 */
	exitEnumMemberBody?: (ctx: EnumMemberBodyContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.enumMemberBodyElement`.
	 * @param ctx the parse tree
	 */
	enterEnumMemberBodyElement?: (ctx: EnumMemberBodyElementContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.enumMemberBodyElement`.
	 * @param ctx the parse tree
	 */
	exitEnumMemberBodyElement?: (ctx: EnumMemberBodyElementContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.transitionBody`.
	 * @param ctx the parse tree
	 */
	enterTransitionBody?: (ctx: TransitionBodyContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.transitionBody`.
	 * @param ctx the parse tree
	 */
	exitTransitionBody?: (ctx: TransitionBodyContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.entryAction`.
	 * @param ctx the parse tree
	 */
	enterEntryAction?: (ctx: EntryActionContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.entryAction`.
	 * @param ctx the parse tree
	 */
	exitEntryAction?: (ctx: EntryActionContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.doAction`.
	 * @param ctx the parse tree
	 */
	enterDoAction?: (ctx: DoActionContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.doAction`.
	 * @param ctx the parse tree
	 */
	exitDoAction?: (ctx: DoActionContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.exitAction`.
	 * @param ctx the parse tree
	 */
	enterExitAction?: (ctx: ExitActionContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.exitAction`.
	 * @param ctx the parse tree
	 */
	exitExitAction?: (ctx: ExitActionContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.assignStatement`.
	 * @param ctx the parse tree
	 */
	enterAssignStatement?: (ctx: AssignStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.assignStatement`.
	 * @param ctx the parse tree
	 */
	exitAssignStatement?: (ctx: AssignStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.acceptClause`.
	 * @param ctx the parse tree
	 */
	enterAcceptClause?: (ctx: AcceptClauseContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.acceptClause`.
	 * @param ctx the parse tree
	 */
	exitAcceptClause?: (ctx: AcceptClauseContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.guardClause`.
	 * @param ctx the parse tree
	 */
	enterGuardClause?: (ctx: GuardClauseContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.guardClause`.
	 * @param ctx the parse tree
	 */
	exitGuardClause?: (ctx: GuardClauseContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.effectClause`.
	 * @param ctx the parse tree
	 */
	enterEffectClause?: (ctx: EffectClauseContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.effectClause`.
	 * @param ctx the parse tree
	 */
	exitEffectClause?: (ctx: EffectClauseContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.subjectDeclaration`.
	 * @param ctx the parse tree
	 */
	enterSubjectDeclaration?: (ctx: SubjectDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.subjectDeclaration`.
	 * @param ctx the parse tree
	 */
	exitSubjectDeclaration?: (ctx: SubjectDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.framedConcern`.
	 * @param ctx the parse tree
	 */
	enterFramedConcern?: (ctx: FramedConcernContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.framedConcern`.
	 * @param ctx the parse tree
	 */
	exitFramedConcern?: (ctx: FramedConcernContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.assumeConstraint`.
	 * @param ctx the parse tree
	 */
	enterAssumeConstraint?: (ctx: AssumeConstraintContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.assumeConstraint`.
	 * @param ctx the parse tree
	 */
	exitAssumeConstraint?: (ctx: AssumeConstraintContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.requireConstraint`.
	 * @param ctx the parse tree
	 */
	enterRequireConstraint?: (ctx: RequireConstraintContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.requireConstraint`.
	 * @param ctx the parse tree
	 */
	exitRequireConstraint?: (ctx: RequireConstraintContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.objectiveRequirement`.
	 * @param ctx the parse tree
	 */
	enterObjectiveRequirement?: (ctx: ObjectiveRequirementContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.objectiveRequirement`.
	 * @param ctx the parse tree
	 */
	exitObjectiveRequirement?: (ctx: ObjectiveRequirementContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.objectiveBody`.
	 * @param ctx the parse tree
	 */
	enterObjectiveBody?: (ctx: ObjectiveBodyContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.objectiveBody`.
	 * @param ctx the parse tree
	 */
	exitObjectiveBody?: (ctx: ObjectiveBodyContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.objectiveBodyElement`.
	 * @param ctx the parse tree
	 */
	enterObjectiveBodyElement?: (ctx: ObjectiveBodyElementContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.objectiveBodyElement`.
	 * @param ctx the parse tree
	 */
	exitObjectiveBodyElement?: (ctx: ObjectiveBodyElementContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.verifyBody`.
	 * @param ctx the parse tree
	 */
	enterVerifyBody?: (ctx: VerifyBodyContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.verifyBody`.
	 * @param ctx the parse tree
	 */
	exitVerifyBody?: (ctx: VerifyBodyContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.verifyBodyElement`.
	 * @param ctx the parse tree
	 */
	enterVerifyBodyElement?: (ctx: VerifyBodyElementContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.verifyBodyElement`.
	 * @param ctx the parse tree
	 */
	exitVerifyBodyElement?: (ctx: VerifyBodyElementContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.verifyRequirement`.
	 * @param ctx the parse tree
	 */
	enterVerifyRequirement?: (ctx: VerifyRequirementContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.verifyRequirement`.
	 * @param ctx the parse tree
	 */
	exitVerifyRequirement?: (ctx: VerifyRequirementContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.exposeStatement`.
	 * @param ctx the parse tree
	 */
	enterExposeStatement?: (ctx: ExposeStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.exposeStatement`.
	 * @param ctx the parse tree
	 */
	exitExposeStatement?: (ctx: ExposeStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.renderStatement`.
	 * @param ctx the parse tree
	 */
	enterRenderStatement?: (ctx: RenderStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.renderStatement`.
	 * @param ctx the parse tree
	 */
	exitRenderStatement?: (ctx: RenderStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.filterStatement`.
	 * @param ctx the parse tree
	 */
	enterFilterStatement?: (ctx: FilterStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.filterStatement`.
	 * @param ctx the parse tree
	 */
	exitFilterStatement?: (ctx: FilterStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.filterClause`.
	 * @param ctx the parse tree
	 */
	enterFilterClause?: (ctx: FilterClauseContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.filterClause`.
	 * @param ctx the parse tree
	 */
	exitFilterClause?: (ctx: FilterClauseContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.valueInit`.
	 * @param ctx the parse tree
	 */
	enterValueInit?: (ctx: ValueInitContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.valueInit`.
	 * @param ctx the parse tree
	 */
	exitValueInit?: (ctx: ValueInitContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.thenStatement`.
	 * @param ctx the parse tree
	 */
	enterThenStatement?: (ctx: ThenStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.thenStatement`.
	 * @param ctx the parse tree
	 */
	exitThenStatement?: (ctx: ThenStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.invariantStatement`.
	 * @param ctx the parse tree
	 */
	enterInvariantStatement?: (ctx: InvariantStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.invariantStatement`.
	 * @param ctx the parse tree
	 */
	exitInvariantStatement?: (ctx: InvariantStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.flowStatement`.
	 * @param ctx the parse tree
	 */
	enterFlowStatement?: (ctx: FlowStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.flowStatement`.
	 * @param ctx the parse tree
	 */
	exitFlowStatement?: (ctx: FlowStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.terminateStatement`.
	 * @param ctx the parse tree
	 */
	enterTerminateStatement?: (ctx: TerminateStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.terminateStatement`.
	 * @param ctx the parse tree
	 */
	exitTerminateStatement?: (ctx: TerminateStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.doStatement`.
	 * @param ctx the parse tree
	 */
	enterDoStatement?: (ctx: DoStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.doStatement`.
	 * @param ctx the parse tree
	 */
	exitDoStatement?: (ctx: DoStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.expressionStatement`.
	 * @param ctx the parse tree
	 */
	enterExpressionStatement?: (ctx: ExpressionStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.expressionStatement`.
	 * @param ctx the parse tree
	 */
	exitExpressionStatement?: (ctx: ExpressionStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.ifStatement`.
	 * @param ctx the parse tree
	 */
	enterIfStatement?: (ctx: IfStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.ifStatement`.
	 * @param ctx the parse tree
	 */
	exitIfStatement?: (ctx: IfStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.elseIfClause`.
	 * @param ctx the parse tree
	 */
	enterElseIfClause?: (ctx: ElseIfClauseContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.elseIfClause`.
	 * @param ctx the parse tree
	 */
	exitElseIfClause?: (ctx: ElseIfClauseContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.elseClause`.
	 * @param ctx the parse tree
	 */
	enterElseClause?: (ctx: ElseClauseContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.elseClause`.
	 * @param ctx the parse tree
	 */
	exitElseClause?: (ctx: ElseClauseContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.whileStatement`.
	 * @param ctx the parse tree
	 */
	enterWhileStatement?: (ctx: WhileStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.whileStatement`.
	 * @param ctx the parse tree
	 */
	exitWhileStatement?: (ctx: WhileStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.loopStatement`.
	 * @param ctx the parse tree
	 */
	enterLoopStatement?: (ctx: LoopStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.loopStatement`.
	 * @param ctx the parse tree
	 */
	exitLoopStatement?: (ctx: LoopStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.forStatement`.
	 * @param ctx the parse tree
	 */
	enterForStatement?: (ctx: ForStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.forStatement`.
	 * @param ctx the parse tree
	 */
	exitForStatement?: (ctx: ForStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.assignmentStatement`.
	 * @param ctx the parse tree
	 */
	enterAssignmentStatement?: (ctx: AssignmentStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.assignmentStatement`.
	 * @param ctx the parse tree
	 */
	exitAssignmentStatement?: (ctx: AssignmentStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.sendStatement`.
	 * @param ctx the parse tree
	 */
	enterSendStatement?: (ctx: SendStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.sendStatement`.
	 * @param ctx the parse tree
	 */
	exitSendStatement?: (ctx: SendStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.acceptStatement`.
	 * @param ctx the parse tree
	 */
	enterAcceptStatement?: (ctx: AcceptStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.acceptStatement`.
	 * @param ctx the parse tree
	 */
	exitAcceptStatement?: (ctx: AcceptStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.conditionalExpression`.
	 * @param ctx the parse tree
	 */
	enterConditionalExpression?: (ctx: ConditionalExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.conditionalExpression`.
	 * @param ctx the parse tree
	 */
	exitConditionalExpression?: (ctx: ConditionalExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.nullCoalescingExpression`.
	 * @param ctx the parse tree
	 */
	enterNullCoalescingExpression?: (ctx: NullCoalescingExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.nullCoalescingExpression`.
	 * @param ctx the parse tree
	 */
	exitNullCoalescingExpression?: (ctx: NullCoalescingExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.impliesExpression`.
	 * @param ctx the parse tree
	 */
	enterImpliesExpression?: (ctx: ImpliesExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.impliesExpression`.
	 * @param ctx the parse tree
	 */
	exitImpliesExpression?: (ctx: ImpliesExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.orExpression`.
	 * @param ctx the parse tree
	 */
	enterOrExpression?: (ctx: OrExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.orExpression`.
	 * @param ctx the parse tree
	 */
	exitOrExpression?: (ctx: OrExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.xorExpression`.
	 * @param ctx the parse tree
	 */
	enterXorExpression?: (ctx: XorExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.xorExpression`.
	 * @param ctx the parse tree
	 */
	exitXorExpression?: (ctx: XorExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.andExpression`.
	 * @param ctx the parse tree
	 */
	enterAndExpression?: (ctx: AndExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.andExpression`.
	 * @param ctx the parse tree
	 */
	exitAndExpression?: (ctx: AndExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.equalityExpression`.
	 * @param ctx the parse tree
	 */
	enterEqualityExpression?: (ctx: EqualityExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.equalityExpression`.
	 * @param ctx the parse tree
	 */
	exitEqualityExpression?: (ctx: EqualityExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.classificationExpression`.
	 * @param ctx the parse tree
	 */
	enterClassificationExpression?: (ctx: ClassificationExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.classificationExpression`.
	 * @param ctx the parse tree
	 */
	exitClassificationExpression?: (ctx: ClassificationExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.relationalExpression`.
	 * @param ctx the parse tree
	 */
	enterRelationalExpression?: (ctx: RelationalExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.relationalExpression`.
	 * @param ctx the parse tree
	 */
	exitRelationalExpression?: (ctx: RelationalExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.extentExpression`.
	 * @param ctx the parse tree
	 */
	enterExtentExpression?: (ctx: ExtentExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.extentExpression`.
	 * @param ctx the parse tree
	 */
	exitExtentExpression?: (ctx: ExtentExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.additiveExpression`.
	 * @param ctx the parse tree
	 */
	enterAdditiveExpression?: (ctx: AdditiveExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.additiveExpression`.
	 * @param ctx the parse tree
	 */
	exitAdditiveExpression?: (ctx: AdditiveExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.multiplicativeExpression`.
	 * @param ctx the parse tree
	 */
	enterMultiplicativeExpression?: (ctx: MultiplicativeExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.multiplicativeExpression`.
	 * @param ctx the parse tree
	 */
	exitMultiplicativeExpression?: (ctx: MultiplicativeExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.exponentiationExpression`.
	 * @param ctx the parse tree
	 */
	enterExponentiationExpression?: (ctx: ExponentiationExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.exponentiationExpression`.
	 * @param ctx the parse tree
	 */
	exitExponentiationExpression?: (ctx: ExponentiationExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.unaryExpression`.
	 * @param ctx the parse tree
	 */
	enterUnaryExpression?: (ctx: UnaryExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.unaryExpression`.
	 * @param ctx the parse tree
	 */
	exitUnaryExpression?: (ctx: UnaryExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterPrimaryExpression?: (ctx: PrimaryExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitPrimaryExpression?: (ctx: PrimaryExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.sequenceSuffix`.
	 * @param ctx the parse tree
	 */
	enterSequenceSuffix?: (ctx: SequenceSuffixContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.sequenceSuffix`.
	 * @param ctx the parse tree
	 */
	exitSequenceSuffix?: (ctx: SequenceSuffixContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.baseExpression`.
	 * @param ctx the parse tree
	 */
	enterBaseExpression?: (ctx: BaseExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.baseExpression`.
	 * @param ctx the parse tree
	 */
	exitBaseExpression?: (ctx: BaseExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.collectionLiteral`.
	 * @param ctx the parse tree
	 */
	enterCollectionLiteral?: (ctx: CollectionLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.collectionLiteral`.
	 * @param ctx the parse tree
	 */
	exitCollectionLiteral?: (ctx: CollectionLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.thisExpression`.
	 * @param ctx the parse tree
	 */
	enterThisExpression?: (ctx: ThisExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.thisExpression`.
	 * @param ctx the parse tree
	 */
	exitThisExpression?: (ctx: ThisExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.newExpression`.
	 * @param ctx the parse tree
	 */
	enterNewExpression?: (ctx: NewExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.newExpression`.
	 * @param ctx the parse tree
	 */
	exitNewExpression?: (ctx: NewExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.literalExpression`.
	 * @param ctx the parse tree
	 */
	enterLiteralExpression?: (ctx: LiteralExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.literalExpression`.
	 * @param ctx the parse tree
	 */
	exitLiteralExpression?: (ctx: LiteralExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.nameExpression`.
	 * @param ctx the parse tree
	 */
	enterNameExpression?: (ctx: NameExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.nameExpression`.
	 * @param ctx the parse tree
	 */
	exitNameExpression?: (ctx: NameExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.invocationExpression`.
	 * @param ctx the parse tree
	 */
	enterInvocationExpression?: (ctx: InvocationExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.invocationExpression`.
	 * @param ctx the parse tree
	 */
	exitInvocationExpression?: (ctx: InvocationExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.bodyExpression`.
	 * @param ctx the parse tree
	 */
	enterBodyExpression?: (ctx: BodyExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.bodyExpression`.
	 * @param ctx the parse tree
	 */
	exitBodyExpression?: (ctx: BodyExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.metadataAccessExpression`.
	 * @param ctx the parse tree
	 */
	enterMetadataAccessExpression?: (ctx: MetadataAccessExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.metadataAccessExpression`.
	 * @param ctx the parse tree
	 */
	exitMetadataAccessExpression?: (ctx: MetadataAccessExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.argumentList`.
	 * @param ctx the parse tree
	 */
	enterArgumentList?: (ctx: ArgumentListContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.argumentList`.
	 * @param ctx the parse tree
	 */
	exitArgumentList?: (ctx: ArgumentListContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.namedArgument`.
	 * @param ctx the parse tree
	 */
	enterNamedArgument?: (ctx: NamedArgumentContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.namedArgument`.
	 * @param ctx the parse tree
	 */
	exitNamedArgument?: (ctx: NamedArgumentContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.positionalArgument`.
	 * @param ctx the parse tree
	 */
	enterPositionalArgument?: (ctx: PositionalArgumentContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.positionalArgument`.
	 * @param ctx the parse tree
	 */
	exitPositionalArgument?: (ctx: PositionalArgumentContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.comment`.
	 * @param ctx the parse tree
	 */
	enterComment?: (ctx: CommentContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.comment`.
	 * @param ctx the parse tree
	 */
	exitComment?: (ctx: CommentContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.documentation`.
	 * @param ctx the parse tree
	 */
	enterDocumentation?: (ctx: DocumentationContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.documentation`.
	 * @param ctx the parse tree
	 */
	exitDocumentation?: (ctx: DocumentationContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.documentationBody`.
	 * @param ctx the parse tree
	 */
	enterDocumentationBody?: (ctx: DocumentationBodyContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.documentationBody`.
	 * @param ctx the parse tree
	 */
	exitDocumentationBody?: (ctx: DocumentationBodyContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.textualRepresentation`.
	 * @param ctx the parse tree
	 */
	enterTextualRepresentation?: (ctx: TextualRepresentationContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.textualRepresentation`.
	 * @param ctx the parse tree
	 */
	exitTextualRepresentation?: (ctx: TextualRepresentationContext) => void;

	/**
	 * Enter a parse tree produced by `SysMLv2Parser.languageStatement`.
	 * @param ctx the parse tree
	 */
	enterLanguageStatement?: (ctx: LanguageStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SysMLv2Parser.languageStatement`.
	 * @param ctx the parse tree
	 */
	exitLanguageStatement?: (ctx: LanguageStatementContext) => void;
}

