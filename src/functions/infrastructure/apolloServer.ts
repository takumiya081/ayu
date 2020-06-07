import {ApolloServer} from 'apollo-server-micro';
import depthLimit from 'graphql-depth-limit';

import {schema} from './schema';

export const apolloServer = new ApolloServer({
  schema,
  validationRules: [depthLimit(4)],
  plugins: [
    {
      requestDidStart: ({request}) => {
        // eslint-disable-next-line no-console
        console.info('graphql server request start', {request});
        return {
          didEncounterErrors: ({errors}) => {
            // eslint-disable-next-line no-console
            console.warn('graphql server error', {errors});
          },
          willSendResponse: ({response}) => {
            // eslint-disable-next-line no-console
            console.info('graphql server response', {response});
          },
        };
      },
    },
  ],
});
