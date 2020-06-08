import {findRiverById, queryByName} from '@/functions/modules/river/query';

import {Resolvers} from './resolverTypes';

// eslint-disable-next-line @typescript-eslint/ban-types
export const resolvers: Resolvers<{}> = {
  Query: {
    river: (_, {id}) => {
      return findRiverById(id) || null;
    },
    searchRiver: (_, {query}) => {
      return queryByName(query);
    },
  },
  River: {
    id: (parent) => parent.id,
    name: (parent) => parent.name,
    location: (parent) => parent.location,
  },
};
