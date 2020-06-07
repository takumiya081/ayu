import {ApolloServer} from 'apollo-server-micro';
import depthLimit from 'graphql-depth-limit';

import {schema} from './schema';

export const apolloServer = new ApolloServer({schema, validationRules: [depthLimit(4)]});
