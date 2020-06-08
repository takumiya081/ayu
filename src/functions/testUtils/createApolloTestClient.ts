import {ApolloServer} from 'apollo-server-micro';
// eslint-disable-next-line import/no-extraneous-dependencies
import {createTestClient} from 'apollo-server-testing';
import depthLimit from 'graphql-depth-limit';

import {schema} from '@/functions/infrastructure/schema';

export function createApolloTestClient() {
  return createTestClient(
    new ApolloServer({
      schema,
      validationRules: [depthLimit(4)],
    }),
  );
}
