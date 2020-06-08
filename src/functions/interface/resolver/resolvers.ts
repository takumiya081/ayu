import {findRiverById, queryByName} from '@/functions/modules/river/query';
import {
  findShopById,
  queryShopsByLocation,
  queryShopsByRiverId,
} from '@/functions/modules/shop/query';

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
    shop: (_, {id}) => {
      return findShopById(id) || null;
    },
    shops: (_, {riverId, location}) => {
      if (riverId) {
        const result = queryShopsByRiverId(riverId);
        return result;
      }
      if (location) {
        return queryShopsByLocation(location);
      }
      return [];
    },
  },
  River: {
    id: (parent) => parent.id,
    name: (parent) => parent.name,
    location: (parent) => parent.location,
  },
  Shop: {
    id: (parent) => parent.id,
    name: (parent) => parent.name,
    link: (parent) => parent.link || null,
    location: (parent) => parent.location,
  },
};
