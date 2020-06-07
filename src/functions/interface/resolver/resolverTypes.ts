import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** An RFC 3986, RFC 3987, and RFC 6570 (level 4) compliant URI string. */
  URI: string;
};


/** An object with an ID. */
export type Node = {
  /** id */
  readonly id: Scalars['ID'];
};

/** geo location */
export type Location = {
  readonly __typename?: 'Location';
  /** 緯度 */
  readonly lat: Scalars['Int'];
  /** 経度 */
  readonly lng: Scalars['Int'];
};

/**
 * 川
 * 一本の川でも漁協が別れている場合は、別の川とする
 * 川は必ず漁協に属しているとは限らない ex: 常願寺川
 */
export type River = Node & {
  readonly __typename?: 'River';
  /** id of river */
  readonly id: Scalars['ID'];
  /** geo location of river */
  readonly location: Location;
  /** name of river */
  readonly name: Scalars['String'];
  /** 漁協 */
  readonly union?: Maybe<Union>;
};

/** 漁協 */
export type Union = Node & {
  readonly __typename?: 'Union';
  /** id of union */
  readonly id: Scalars['ID'];
  /** name of union */
  readonly name: Scalars['String'];
  /** 漁協に所属している川 */
  readonly rivers: ReadonlyArray<River>;
};

/** おとり店 */
export type Shop = Node & {
  readonly __typename?: 'Shop';
  /** id of union */
  readonly id: Scalars['ID'];
  /** ホームページなど */
  readonly link?: Maybe<Scalars['URI']>;
  /** geo location of river */
  readonly location: Location;
  /** name of union */
  readonly name: Scalars['String'];
  /** 漁協に所属している川 */
  readonly unions: ReadonlyArray<Union>;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  readonly __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean'];
};

/** the connection type for River. */
export type RiverConnection = {
  readonly __typename?: 'RiverConnection';
  /** A list of edges. */
  readonly edges: ReadonlyArray<RiverEdge>;
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
};

/** The connection type for River. */
export type RiverEdge = {
  readonly __typename?: 'RiverEdge';
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
  /** The item at the end of the edge. */
  readonly node: River;
};

/** query type */
export type Query = {
  readonly __typename?: 'Query';
  /** find River */
  readonly river?: Maybe<River>;
  /** search river by name */
  readonly searchRiver: RiverConnection;
  /** find Shop */
  readonly shop?: Maybe<Shop>;
  /** find Union */
  readonly union?: Maybe<Union>;
};


/** query type */
export type QueryRiverArgs = {
  id: Scalars['String'];
};


/** query type */
export type QuerySearchRiverArgs = {
  query: Scalars['String'];
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
};


/** query type */
export type QueryShopArgs = {
  id: Scalars['String'];
};


/** query type */
export type QueryUnionArgs = {
  id: Scalars['String'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}> = (obj: T, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  String: ResolverTypeWrapper<Scalars['String']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  URI: ResolverTypeWrapper<Scalars['URI']>;
  Node: ResolversTypes['River'] | ResolversTypes['Union'] | ResolversTypes['Shop'];
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Location: ResolverTypeWrapper<Location>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  River: ResolverTypeWrapper<River>;
  Union: ResolverTypeWrapper<Union>;
  Shop: ResolverTypeWrapper<Shop>;
  PageInfo: ResolverTypeWrapper<PageInfo>;
  RiverConnection: ResolverTypeWrapper<RiverConnection>;
  RiverEdge: ResolverTypeWrapper<RiverEdge>;
  Query: ResolverTypeWrapper<{}>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  String: Scalars['String'];
  Boolean: Scalars['Boolean'];
  URI: Scalars['URI'];
  Node: ResolversParentTypes['River'] | ResolversParentTypes['Union'] | ResolversParentTypes['Shop'];
  ID: Scalars['ID'];
  Location: Location;
  Int: Scalars['Int'];
  River: River;
  Union: Union;
  Shop: Shop;
  PageInfo: PageInfo;
  RiverConnection: RiverConnection;
  RiverEdge: RiverEdge;
  Query: {};
};

export interface UriScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['URI'], any> {
  name: 'URI';
}

export type NodeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Node'] = ResolversParentTypes['Node']> = {
  __resolveType: TypeResolveFn<'River' | 'Union' | 'Shop', ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
};

export type LocationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Location'] = ResolversParentTypes['Location']> = {
  lat?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  lng?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type RiverResolvers<ContextType = any, ParentType extends ResolversParentTypes['River'] = ResolversParentTypes['River']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  location?: Resolver<ResolversTypes['Location'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  union?: Resolver<Maybe<ResolversTypes['Union']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type UnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Union'] = ResolversParentTypes['Union']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  rivers?: Resolver<ReadonlyArray<ResolversTypes['River']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type ShopResolvers<ContextType = any, ParentType extends ResolversParentTypes['Shop'] = ResolversParentTypes['Shop']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  link?: Resolver<Maybe<ResolversTypes['URI']>, ParentType, ContextType>;
  location?: Resolver<ResolversTypes['Location'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  unions?: Resolver<ReadonlyArray<ResolversTypes['Union']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type PageInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo']> = {
  endCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type RiverConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['RiverConnection'] = ResolversParentTypes['RiverConnection']> = {
  edges?: Resolver<ReadonlyArray<ResolversTypes['RiverEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type RiverEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['RiverEdge'] = ResolversParentTypes['RiverEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['River'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  river?: Resolver<Maybe<ResolversTypes['River']>, ParentType, ContextType, RequireFields<QueryRiverArgs, 'id'>>;
  searchRiver?: Resolver<ResolversTypes['RiverConnection'], ParentType, ContextType, RequireFields<QuerySearchRiverArgs, 'query'>>;
  shop?: Resolver<Maybe<ResolversTypes['Shop']>, ParentType, ContextType, RequireFields<QueryShopArgs, 'id'>>;
  union?: Resolver<Maybe<ResolversTypes['Union']>, ParentType, ContextType, RequireFields<QueryUnionArgs, 'id'>>;
};

export type Resolvers<ContextType = any> = {
  URI?: GraphQLScalarType;
  Node?: NodeResolvers;
  Location?: LocationResolvers<ContextType>;
  River?: RiverResolvers<ContextType>;
  Union?: UnionResolvers<ContextType>;
  Shop?: ShopResolvers<ContextType>;
  PageInfo?: PageInfoResolvers<ContextType>;
  RiverConnection?: RiverConnectionResolvers<ContextType>;
  RiverEdge?: RiverEdgeResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
