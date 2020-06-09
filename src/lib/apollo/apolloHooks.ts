import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
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
  id: Scalars['ID'];
};

/** geo location */
export type Location = {
  __typename?: 'Location';
  /** 緯度 */
  lat: Scalars['Float'];
  /** 経度 */
  lng: Scalars['Float'];
};

/**
 * 川
 * 一本の川でも漁協が別れている場合は、別の川とする
 * 川は必ず漁協に属しているとは限らない ex: 常願寺川
 */
export type River = Node & {
  __typename?: 'River';
  /** id of river */
  id: Scalars['ID'];
  /** geo location of river */
  location: Location;
  /** name of river */
  name: Scalars['String'];
  /** 漁協 */
  union?: Maybe<Union>;
};

/** 漁協 */
export type Union = Node & {
  __typename?: 'Union';
  /** id of union */
  id: Scalars['ID'];
  /** ホームページなど */
  link?: Maybe<Scalars['URI']>;
  /** name of union */
  name: Scalars['String'];
  /** 解禁期間 */
  term?: Maybe<Scalars['String']>;
};

/** おとり店 */
export type Shop = Node & {
  __typename?: 'Shop';
  /** id of union */
  id: Scalars['ID'];
  /** ホームページなど */
  link?: Maybe<Scalars['URI']>;
  /** geo location of river */
  location: Location;
  /** name of union */
  name: Scalars['String'];
};

/** locaition parameter input */
export type LocationInput = {
  lat: Scalars['Int'];
  lng: Scalars['Int'];
};

/**
 * query type
 * 今の所数が莫大になる気がしないので、一旦relayではなく配列にする
 */
export type Query = {
  __typename?: 'Query';
  /** find River */
  river?: Maybe<River>;
  /** search river by name */
  searchRiver: Array<River>;
  /** find Shop */
  shop?: Maybe<Shop>;
  /** query shop */
  shops: Array<Shop>;
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

export type SearchRiverQueryVariables = {
  query: Scalars['String'];
};


export type SearchRiverQuery = (
  { __typename?: 'Query' }
  & { searchRiver: Array<(
    { __typename?: 'River' }
    & Pick<River, 'id' | 'name'>
    & { location: (
      { __typename?: 'Location' }
      & Pick<Location, 'lat' | 'lng'>
    ) }
  )> }
);


export const SearchRiverDocument = gql`
    query SearchRiver($query: String!) {
  searchRiver(query: $query) {
    id
    name
    location {
      lat
      lng
    }
  }
}
    `;

/**
 * __useSearchRiverQuery__
 *
 * To run a query within a React component, call `useSearchRiverQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchRiverQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchRiverQuery({
 *   variables: {
 *      query: // value for 'query'
 *   },
 * });
 */
export function useSearchRiverQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<SearchRiverQuery, SearchRiverQueryVariables>) {
        return ApolloReactHooks.useQuery<SearchRiverQuery, SearchRiverQueryVariables>(SearchRiverDocument, baseOptions);
      }
export function useSearchRiverLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SearchRiverQuery, SearchRiverQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<SearchRiverQuery, SearchRiverQueryVariables>(SearchRiverDocument, baseOptions);
        }
export type SearchRiverQueryHookResult = ReturnType<typeof useSearchRiverQuery>;
export type SearchRiverLazyQueryHookResult = ReturnType<typeof useSearchRiverLazyQuery>;
export type SearchRiverQueryResult = ApolloReactCommon.QueryResult<SearchRiverQuery, SearchRiverQueryVariables>;