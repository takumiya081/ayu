/* eslint-disable import/no-default-export */
import {apolloServer} from '@/functions/infrastructure/apolloServer';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default apolloServer.createHandler({path: '/api/graphql'});
