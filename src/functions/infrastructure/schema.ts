import {makeExecutableSchema} from 'apollo-server-micro';

import typeDefs from './typeDef';

export const schema = makeExecutableSchema({
  typeDefs,
  // TODO: resolvers,
});
