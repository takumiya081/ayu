import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { RiverModel } from '@/functions/modules/river/RiverModel';
import { ShopModel } from '@/functions/modules/shop/ShopModel';
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
  readonly lat: Scalars['Float'];
  /** 経度 */
  readonly lng: Scalars['Float'];
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
  /** ホームページなど */
  readonly link?: Maybe<Scalars['URI']>;
  /** name of union */
  readonly name: Scalars['String'];
  /** 解禁期間 */
  readonly term?: Maybe<Scalars['String']>;
};

/** おとり店 */
export type Shop = Node & {
  readonly __typename?: 'Shop';
  /** 住所 */
  readonly address: Scalars['String'];
  /** id of union */
  readonly id: Scalars['ID'];
  /** ホームページなど */
  readonly link?: Maybe<Scalars['URI']>;
  /** geo location of river */
  readonly location: Location;
  /** name of union */
  readonly name: Scalars['String'];
};

/** locaition parameter input */
export type LocationInput = {
  /** 緯度 */
  readonly lat: Scalars['Float'];
  /** 経度 */
  readonly lng: Scalars['Float'];
};

/**
 * query type
 * 今の所数が莫大になる気がしないので、一旦relayではなく配列にする
 */
export type Query = {
  readonly __typename?: 'Query';
  /** find River */
  readonly river?: Maybe<River>;
  /** search river by name */
  readonly searchRiver: ReadonlyArray<River>;
  /** find Shop */
  readonly shop?: Maybe<Shop>;
  /** query shop */
  readonly shops: ReadonlyArray<Shop>;
};


/**
 * query type
 * 今の所数が莫大になる気がしないので、一旦relayではなく配列にする
 */
export type QueryRiverArgs = {
  id: Scalars['String'];
};


/**
 * query type
 * 今の所数が莫大になる気がしないので、一旦relayではなく配列にする
 */
export type QuerySearchRiverArgs = {
  query: Scalars['String'];
};


/**
 * query type
 * 今の所数が莫大になる気がしないので、一旦relayではなく配列にする
 */
export type QueryShopArgs = {
  id: Scalars['String'];
};


/**
 * query type
 * 今の所数が莫大になる気がしないので、一旦relayではなく配列にする
 */
export type QueryShopsArgs = {
  location?: Maybe<LocationInput>;
  riverId?: Maybe<Scalars['String']>;
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
  URI: ResolverTypeWrapper<Scalars['URI']>;
  Node: ResolversTypes['River'] | ResolversTypes['Union'] | ResolversTypes['Shop'];
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Location: ResolverTypeWrapper<Location>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  River: ResolverTypeWrapper<RiverModel>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Union: ResolverTypeWrapper<Union>;
  Shop: ResolverTypeWrapper<ShopModel>;
  LocationInput: LocationInput;
  Query: ResolverTypeWrapper<{}>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  URI: Scalars['URI'];
  Node: ResolversParentTypes['River'] | ResolversParentTypes['Union'] | ResolversParentTypes['Shop'];
  ID: Scalars['ID'];
  Location: Location;
  Float: Scalars['Float'];
  River: RiverModel;
  String: Scalars['String'];
  Union: Union;
  Shop: ShopModel;
  LocationInput: LocationInput;
  Query: {};
  Boolean: Scalars['Boolean'];
};

export interface UriScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['URI'], any> {
  name: 'URI';
}

export type NodeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Node'] = ResolversParentTypes['Node']> = {
  __resolveType: TypeResolveFn<'River' | 'Union' | 'Shop', ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
};

export type LocationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Location'] = ResolversParentTypes['Location']> = {
  lat?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  lng?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
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
  link?: Resolver<Maybe<ResolversTypes['URI']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  term?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type ShopResolvers<ContextType = any, ParentType extends ResolversParentTypes['Shop'] = ResolversParentTypes['Shop']> = {
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  link?: Resolver<Maybe<ResolversTypes['URI']>, ParentType, ContextType>;
  location?: Resolver<ResolversTypes['Location'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  river?: Resolver<Maybe<ResolversTypes['River']>, ParentType, ContextType, RequireFields<QueryRiverArgs, 'id'>>;
  searchRiver?: Resolver<ReadonlyArray<ResolversTypes['River']>, ParentType, ContextType, RequireFields<QuerySearchRiverArgs, 'query'>>;
  shop?: Resolver<Maybe<ResolversTypes['Shop']>, ParentType, ContextType, RequireFields<QueryShopArgs, 'id'>>;
  shops?: Resolver<ReadonlyArray<ResolversTypes['Shop']>, ParentType, ContextType, RequireFields<QueryShopsArgs, never>>;
};

export type Resolvers<ContextType = any> = {
  URI?: GraphQLScalarType;
  Node?: NodeResolvers;
  Location?: LocationResolvers<ContextType>;
  River?: RiverResolvers<ContextType>;
  Union?: UnionResolvers<ContextType>;
  Shop?: ShopResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
