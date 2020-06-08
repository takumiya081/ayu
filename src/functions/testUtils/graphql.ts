import gql from 'graphql-tag';
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
  lat: Scalars['Int'];
  /** 経度 */
  lng: Scalars['Int'];
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
  /** 漁協に所属している川 */
  rivers: Array<River>;
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
  /** 漁協に所属している川 */
  unions: Array<Union>;
};

export type QueryShopLocationInput = {
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
  /** query shop by location */
  queryShop: Array<Shop>;
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
export type QueryQueryShopArgs = {
  location?: Maybe<QueryShopLocationInput>;
  riverId?: Maybe<Scalars['String']>;
};


export const TestRiverQuery = gql`
    query TestRiverQuery($id: String!) {
  river(id: $id) {
    id
    location {
      lat
      lng
    }
    name
    union {
      id
      name
      rivers {
        id
      }
    }
  }
}
    `;
export const TestSearchRiverQuery = gql`
    query TestSearchRiverQuery($query: String!) {
  searchRiver(query: $query) {
    id
    location {
      lat
      lng
    }
    name
    union {
      id
      name
      rivers {
        id
      }
    }
  }
}
    `;