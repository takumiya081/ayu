import {IResolvers, makeExecutableSchema} from 'apollo-server-micro';

import {resolvers} from '@/functions/interface/resolver/resolvers';

import typeDefs from './typeDef';

export const schema = makeExecutableSchema({
  typeDefs,
  // apolloとgraphql-code-genのtypeが微妙にマッチしないので強制的に合わせる
  // eslint-disable-next-line @typescript-eslint/ban-types
  resolvers: resolvers as IResolvers<{}>,
  resolverValidationOptions: {
    requireResolversForResolveType: false,
  },
});
