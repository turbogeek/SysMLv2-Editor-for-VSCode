// Generated from src/antlr/SysMLv2Parser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `SysMLv2Parser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface SysMLv2ParserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `SysMLv2Parser.compilationUnit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompilationUnit?: (ctx: CompilationUnitContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.rootNamespace`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRootNamespace?: (ctx: RootNamespaceContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.namespaceBodyElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamespaceBodyElement?: (ctx: NamespaceBodyElementContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.packageDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPackageDeclaration?: (ctx: PackageDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.libraryPackageDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLibraryPackageDeclaration?: (ctx: LibraryPackageDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.namespaceDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamespaceDeclaration?: (ctx: NamespaceDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.packageBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPackageBody?: (ctx: PackageBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.namespaceBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamespaceBody?: (ctx: NamespaceBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.aliasDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAliasDeclaration?: (ctx: AliasDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.aliasName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAliasName?: (ctx: AliasNameContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.importDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImportDeclaration?: (ctx: ImportDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.importFilter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImportFilter?: (ctx: ImportFilterContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.qualifiedNameWithWildcard`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQualifiedNameWithWildcard?: (ctx: QualifiedNameWithWildcardContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.prefixes`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrefixes?: (ctx: PrefixesContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.hashAnnotation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHashAnnotation?: (ctx: HashAnnotationContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.metadataAnnotation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMetadataAnnotation?: (ctx: MetadataAnnotationContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.annotationArguments`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotationArguments?: (ctx: AnnotationArgumentsContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.annotationArgument`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotationArgument?: (ctx: AnnotationArgumentContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.featurePrefix`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFeaturePrefix?: (ctx: FeaturePrefixContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.definitionPrefix`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefinitionPrefix?: (ctx: DefinitionPrefixContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.usagePrefix`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUsagePrefix?: (ctx: UsagePrefixContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.directionPrefix`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDirectionPrefix?: (ctx: DirectionPrefixContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.visibility`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVisibility?: (ctx: VisibilityContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.member`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMember?: (ctx: MemberContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.partDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPartDefinition?: (ctx: PartDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.actionDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitActionDefinition?: (ctx: ActionDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.stateDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStateDefinition?: (ctx: StateDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.requirementDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRequirementDefinition?: (ctx: RequirementDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.viewDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitViewDefinition?: (ctx: ViewDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.viewpointDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitViewpointDefinition?: (ctx: ViewpointDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.viewpointBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitViewpointBody?: (ctx: ViewpointBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.viewpointBodyElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitViewpointBodyElement?: (ctx: ViewpointBodyElementContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.constraintDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstraintDefinition?: (ctx: ConstraintDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.constraintDefBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstraintDefBody?: (ctx: ConstraintDefBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.constraintDefBodyElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstraintDefBodyElement?: (ctx: ConstraintDefBodyElementContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.attributeDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttributeDefinition?: (ctx: AttributeDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.portDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPortDefinition?: (ctx: PortDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.connectionDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConnectionDefinition?: (ctx: ConnectionDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.interfaceDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterfaceDefinition?: (ctx: InterfaceDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.allocationDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAllocationDefinition?: (ctx: AllocationDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.itemDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitItemDefinition?: (ctx: ItemDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.enumDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumDefinition?: (ctx: EnumDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.calcDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCalcDefinition?: (ctx: CalcDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.analysisDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnalysisDefinition?: (ctx: AnalysisDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.caseDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCaseDefinition?: (ctx: CaseDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.useCaseDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUseCaseDefinition?: (ctx: UseCaseDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.verificationDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVerificationDefinition?: (ctx: VerificationDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.concernDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConcernDefinition?: (ctx: ConcernDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.renderingDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRenderingDefinition?: (ctx: RenderingDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.occurrenceDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOccurrenceDefinition?: (ctx: OccurrenceDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.flowDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFlowDefinition?: (ctx: FlowDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.metadataDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMetadataDefinition?: (ctx: MetadataDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.individualDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIndividualDefinition?: (ctx: IndividualDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.metadataDefBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMetadataDefBody?: (ctx: MetadataDefBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.metadataDefBodyElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMetadataDefBodyElement?: (ctx: MetadataDefBodyElementContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.datatypeDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDatatypeDefinition?: (ctx: DatatypeDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.classDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassDefinition?: (ctx: ClassDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.structDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStructDefinition?: (ctx: StructDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.assocDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssocDefinition?: (ctx: AssocDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.behaviorDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBehaviorDefinition?: (ctx: BehaviorDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.functionDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionDefinition?: (ctx: FunctionDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.predicateDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPredicateDefinition?: (ctx: PredicateDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.interactionDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInteractionDefinition?: (ctx: InteractionDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.metaclassDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMetaclassDefinition?: (ctx: MetaclassDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.classifierDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassifierDefinition?: (ctx: ClassifierDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.typeDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeDefinition?: (ctx: TypeDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.featureDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFeatureDefinition?: (ctx: FeatureDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.connectorDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConnectorDefinition?: (ctx: ConnectorDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.bindingConnectorDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBindingConnectorDefinition?: (ctx: BindingConnectorDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.partUsage`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPartUsage?: (ctx: PartUsageContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.actionUsage`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitActionUsage?: (ctx: ActionUsageContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.actionKeyword`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitActionKeyword?: (ctx: ActionKeywordContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.actionSendClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitActionSendClause?: (ctx: ActionSendClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.stateUsage`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStateUsage?: (ctx: StateUsageContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.requirementUsage`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRequirementUsage?: (ctx: RequirementUsageContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.viewUsage`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitViewUsage?: (ctx: ViewUsageContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.constraintUsage`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstraintUsage?: (ctx: ConstraintUsageContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.constraintBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstraintBody?: (ctx: ConstraintBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.constraintBodyElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstraintBodyElement?: (ctx: ConstraintBodyElementContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.constraintParameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstraintParameter?: (ctx: ConstraintParameterContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.constraintExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstraintExpression?: (ctx: ConstraintExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.attributeUsage`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttributeUsage?: (ctx: AttributeUsageContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.enumUsage`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumUsage?: (ctx: EnumUsageContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.tupleOrValueInit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTupleOrValueInit?: (ctx: TupleOrValueInitContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.portUsage`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPortUsage?: (ctx: PortUsageContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.itemUsage`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitItemUsage?: (ctx: ItemUsageContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.refUsage`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRefUsage?: (ctx: RefUsageContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.refKind`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRefKind?: (ctx: RefKindContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.connectionUsage`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConnectionUsage?: (ctx: ConnectionUsageContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.flowConnectionUsage`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFlowConnectionUsage?: (ctx: FlowConnectionUsageContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.successionUsage`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSuccessionUsage?: (ctx: SuccessionUsageContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.successionFlowOf`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSuccessionFlowOf?: (ctx: SuccessionFlowOfContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.transitionUsage`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTransitionUsage?: (ctx: TransitionUsageContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.satisfyRequirement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSatisfyRequirement?: (ctx: SatisfyRequirementContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.allocateUsage`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAllocateUsage?: (ctx: AllocateUsageContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.namedAllocationList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamedAllocationList?: (ctx: NamedAllocationListContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.namedAllocation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamedAllocation?: (ctx: NamedAllocationContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.performUsage`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPerformUsage?: (ctx: PerformUsageContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.exhibitUsage`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExhibitUsage?: (ctx: ExhibitUsageContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.includeUsage`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIncludeUsage?: (ctx: IncludeUsageContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.calcUsage`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCalcUsage?: (ctx: CalcUsageContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.analysisUsage`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnalysisUsage?: (ctx: AnalysisUsageContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.caseUsage`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCaseUsage?: (ctx: CaseUsageContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.useCaseUsage`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUseCaseUsage?: (ctx: UseCaseUsageContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.verificationUsage`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVerificationUsage?: (ctx: VerificationUsageContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.renderingUsage`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRenderingUsage?: (ctx: RenderingUsageContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.viewpointUsage`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitViewpointUsage?: (ctx: ViewpointUsageContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.actorUsage`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitActorUsage?: (ctx: ActorUsageContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.stakeholderUsage`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStakeholderUsage?: (ctx: StakeholderUsageContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.concernUsage`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConcernUsage?: (ctx: ConcernUsageContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.concernBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConcernBody?: (ctx: ConcernBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.concernBodyElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConcernBodyElement?: (ctx: ConcernBodyElementContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.occurrenceUsage`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOccurrenceUsage?: (ctx: OccurrenceUsageContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.variantUsage`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariantUsage?: (ctx: VariantUsageContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.portionUsage`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPortionUsage?: (ctx: PortionUsageContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.stepUsage`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStepUsage?: (ctx: StepUsageContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.interfaceUsage`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterfaceUsage?: (ctx: InterfaceUsageContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.decideNode`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDecideNode?: (ctx: DecideNodeContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.decideBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDecideBody?: (ctx: DecideBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.ifBranch`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfBranch?: (ctx: IfBranchContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.elseBranch`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElseBranch?: (ctx: ElseBranchContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.mergeNode`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMergeNode?: (ctx: MergeNodeContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.forkNode`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForkNode?: (ctx: ForkNodeContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.joinNode`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJoinNode?: (ctx: JoinNodeContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.bindingUsage`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBindingUsage?: (ctx: BindingUsageContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.acceptUsage`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAcceptUsage?: (ctx: AcceptUsageContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.acceptTiming`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAcceptTiming?: (ctx: AcceptTimingContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.sendUsage`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSendUsage?: (ctx: SendUsageContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.assignUsage`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignUsage?: (ctx: AssignUsageContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.messageUsage`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMessageUsage?: (ctx: MessageUsageContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.dependencyDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDependencyDeclaration?: (ctx: DependencyDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.metadataUsage`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMetadataUsage?: (ctx: MetadataUsageContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.metadataBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMetadataBody?: (ctx: MetadataBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.metadataBodyElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMetadataBodyElement?: (ctx: MetadataBodyElementContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.endUsage`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEndUsage?: (ctx: EndUsageContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.endModifiers`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEndModifiers?: (ctx: EndModifiersContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.endMemberKind`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEndMemberKind?: (ctx: EndMemberKindContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.declarationName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclarationName?: (ctx: DeclarationNameContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.usageName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUsageName?: (ctx: UsageNameContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitName?: (ctx: NameContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.shortName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShortName?: (ctx: ShortNameContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.qualifiedName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQualifiedName?: (ctx: QualifiedNameContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.featureChain`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFeatureChain?: (ctx: FeatureChainContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.typeRelationships`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeRelationships?: (ctx: TypeRelationshipsContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.typeRelationship`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeRelationship?: (ctx: TypeRelationshipContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.featureRelationships`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFeatureRelationships?: (ctx: FeatureRelationshipsContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.featureRelationship`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFeatureRelationship?: (ctx: FeatureRelationshipContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.specializesClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSpecializesClause?: (ctx: SpecializesClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.redefinesClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRedefinesClause?: (ctx: RedefinesClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.subsetsClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubsetsClause?: (ctx: SubsetsClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.referencesClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReferencesClause?: (ctx: ReferencesClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.conjugatesClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConjugatesClause?: (ctx: ConjugatesClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.typingClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypingClause?: (ctx: TypingClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.unionsClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnionsClause?: (ctx: UnionsClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.intersectsClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntersectsClause?: (ctx: IntersectsClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.differencesClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDifferencesClause?: (ctx: DifferencesClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.disjointClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDisjointClause?: (ctx: DisjointClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.multiplicityClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiplicityClause?: (ctx: MultiplicityClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.multiplicityRange`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiplicityRange?: (ctx: MultiplicityRangeContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.multiplicityBound`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiplicityBound?: (ctx: MultiplicityBoundContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.connectionEndpoints`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConnectionEndpoints?: (ctx: ConnectionEndpointsContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.expressionList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionList?: (ctx: ExpressionListContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.flowEndpoints`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFlowEndpoints?: (ctx: FlowEndpointsContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.successionEndpoints`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSuccessionEndpoints?: (ctx: SuccessionEndpointsContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.transitionRelationships`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTransitionRelationships?: (ctx: TransitionRelationshipsContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.definitionBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefinitionBody?: (ctx: DefinitionBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.definitionBodyElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefinitionBodyElement?: (ctx: DefinitionBodyElementContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.simpleFeature`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimpleFeature?: (ctx: SimpleFeatureContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.returnFeature`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturnFeature?: (ctx: ReturnFeatureContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.inParameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInParameter?: (ctx: InParameterContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.parameterValueInit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameterValueInit?: (ctx: ParameterValueInitContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.outParameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOutParameter?: (ctx: OutParameterContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.inoutParameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInoutParameter?: (ctx: InoutParameterContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.usageBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUsageBody?: (ctx: UsageBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.usageBodyElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUsageBodyElement?: (ctx: UsageBodyElementContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.simpleParameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimpleParameter?: (ctx: SimpleParameterContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.anonymousRedefines`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnonymousRedefines?: (ctx: AnonymousRedefinesContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.metaExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMetaExpression?: (ctx: MetaExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.stateDefinitionBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStateDefinitionBody?: (ctx: StateDefinitionBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.stateUsageBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStateUsageBody?: (ctx: StateUsageBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.stateBodyElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStateBodyElement?: (ctx: StateBodyElementContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.acceptTransition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAcceptTransition?: (ctx: AcceptTransitionContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.doActionClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDoActionClause?: (ctx: DoActionClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.requirementBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRequirementBody?: (ctx: RequirementBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.requirementBodyElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRequirementBodyElement?: (ctx: RequirementBodyElementContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.viewBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitViewBody?: (ctx: ViewBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.viewBodyElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitViewBodyElement?: (ctx: ViewBodyElementContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.enumBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumBody?: (ctx: EnumBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.enumBodyElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumBodyElement?: (ctx: EnumBodyElementContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.enumMember`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumMember?: (ctx: EnumMemberContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.enumMemberBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumMemberBody?: (ctx: EnumMemberBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.enumMemberBodyElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumMemberBodyElement?: (ctx: EnumMemberBodyElementContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.transitionBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTransitionBody?: (ctx: TransitionBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.entryAction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEntryAction?: (ctx: EntryActionContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.doAction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDoAction?: (ctx: DoActionContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.exitAction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExitAction?: (ctx: ExitActionContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.assignStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignStatement?: (ctx: AssignStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.acceptClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAcceptClause?: (ctx: AcceptClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.guardClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGuardClause?: (ctx: GuardClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.effectClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEffectClause?: (ctx: EffectClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.subjectDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubjectDeclaration?: (ctx: SubjectDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.framedConcern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFramedConcern?: (ctx: FramedConcernContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.assumeConstraint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssumeConstraint?: (ctx: AssumeConstraintContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.requireConstraint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRequireConstraint?: (ctx: RequireConstraintContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.objectiveRequirement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObjectiveRequirement?: (ctx: ObjectiveRequirementContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.objectiveBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObjectiveBody?: (ctx: ObjectiveBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.objectiveBodyElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObjectiveBodyElement?: (ctx: ObjectiveBodyElementContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.verifyBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVerifyBody?: (ctx: VerifyBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.verifyBodyElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVerifyBodyElement?: (ctx: VerifyBodyElementContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.verifyRequirement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVerifyRequirement?: (ctx: VerifyRequirementContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.exposeStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExposeStatement?: (ctx: ExposeStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.renderStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRenderStatement?: (ctx: RenderStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.filterStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFilterStatement?: (ctx: FilterStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.filterClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFilterClause?: (ctx: FilterClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.valueInit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValueInit?: (ctx: ValueInitContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.thenStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitThenStatement?: (ctx: ThenStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.invariantStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInvariantStatement?: (ctx: InvariantStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.flowStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFlowStatement?: (ctx: FlowStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.terminateStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTerminateStatement?: (ctx: TerminateStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.doStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDoStatement?: (ctx: DoStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.expressionStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionStatement?: (ctx: ExpressionStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.ifStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfStatement?: (ctx: IfStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.elseIfClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElseIfClause?: (ctx: ElseIfClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.elseClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElseClause?: (ctx: ElseClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.whileStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhileStatement?: (ctx: WhileStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.loopStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLoopStatement?: (ctx: LoopStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.forStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForStatement?: (ctx: ForStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.assignmentStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignmentStatement?: (ctx: AssignmentStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.sendStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSendStatement?: (ctx: SendStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.acceptStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAcceptStatement?: (ctx: AcceptStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.conditionalExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConditionalExpression?: (ctx: ConditionalExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.nullCoalescingExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNullCoalescingExpression?: (ctx: NullCoalescingExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.impliesExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImpliesExpression?: (ctx: ImpliesExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.orExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOrExpression?: (ctx: OrExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.xorExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitXorExpression?: (ctx: XorExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.andExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAndExpression?: (ctx: AndExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.equalityExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEqualityExpression?: (ctx: EqualityExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.classificationExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassificationExpression?: (ctx: ClassificationExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.relationalExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRelationalExpression?: (ctx: RelationalExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.extentExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExtentExpression?: (ctx: ExtentExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.additiveExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAdditiveExpression?: (ctx: AdditiveExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.multiplicativeExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiplicativeExpression?: (ctx: MultiplicativeExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.exponentiationExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExponentiationExpression?: (ctx: ExponentiationExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.unaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryExpression?: (ctx: UnaryExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimaryExpression?: (ctx: PrimaryExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.sequenceSuffix`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSequenceSuffix?: (ctx: SequenceSuffixContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.baseExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBaseExpression?: (ctx: BaseExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.collectionLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCollectionLiteral?: (ctx: CollectionLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.thisExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitThisExpression?: (ctx: ThisExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.newExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNewExpression?: (ctx: NewExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.literalExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteralExpression?: (ctx: LiteralExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.nameExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNameExpression?: (ctx: NameExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.invocationExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInvocationExpression?: (ctx: InvocationExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.bodyExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBodyExpression?: (ctx: BodyExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.metadataAccessExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMetadataAccessExpression?: (ctx: MetadataAccessExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.argumentList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgumentList?: (ctx: ArgumentListContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.namedArgument`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamedArgument?: (ctx: NamedArgumentContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.positionalArgument`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPositionalArgument?: (ctx: PositionalArgumentContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.comment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComment?: (ctx: CommentContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.documentation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDocumentation?: (ctx: DocumentationContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.documentationBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDocumentationBody?: (ctx: DocumentationBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.textualRepresentation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTextualRepresentation?: (ctx: TextualRepresentationContext) => Result;

	/**
	 * Visit a parse tree produced by `SysMLv2Parser.languageStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLanguageStatement?: (ctx: LanguageStatementContext) => Result;
}

