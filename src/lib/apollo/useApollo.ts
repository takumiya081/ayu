/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-var-requires */

// https://github.com/vercel/next.js/blob/canary/examples/api-routes-apollo-server-and-client/apollo/client.js
import {InMemoryCache, NormalizedCacheObject} from 'apollo-cache-inmemory';
import {ApolloClient} from 'apollo-client';
import {useMemo} from 'react';

let apolloClient: ApolloClient<NormalizedCacheObject>;

function createIsomorphLink() {
  if (typeof window === 'undefined') {
    const {SchemaLink} = require('apollo-link-schema');
    const {schema} = require('../../functions/infrastructure/schema');
    return new SchemaLink({schema});
  }
  const {HttpLink} = require('apollo-link-http');
  return new HttpLink({
    uri: '/api/graphql',
    credentials: 'same-origin',
  });
}

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: createIsomorphLink(),
    cache: new InMemoryCache(),
  });
}

export function initializeApollo(initialState = null) {
  // eslint-disable-next-line no-underscore-dangle
  const _apolloClient = apolloClient ?? createApolloClient();

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // get hydrated here
  if (initialState) {
    _apolloClient.cache.restore({});
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return _apolloClient;
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useApollo(initialState: any) {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
}
