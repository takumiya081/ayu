import {findRiverById, queryByName} from '@/functions/modules/river/query';
import {
  findShopById,
  queryShopsByLocation,
  queryShopsByRiverId,
} from '@/functions/modules/shop/query';
import {atob, btoa} from '@/lib/base64';

import {Resolvers} from './resolverTypes';

// eslint-disable-next-line @typescript-eslint/ban-types
export const resolvers: Resolvers<{}> = {
  Query: {
    river: (_, {id}) => {
      const encodedId = atob(id);
      return findRiverById(encodedId) || null;
    },
    searchRiver: (_, {query}) => {
      return queryByName(query);
    },
    shop: (_, {id}) => {
      const encodedId = atob(id);
      return findShopById(encodedId) || null;
    },
    shops: (_, {riverId, location}) => {
      if (riverId) {
        const encodedId = atob(riverId);
        if (encodedId === null) {
          throw new Error('river id cannot decoded');
        }
        return queryShopsByRiverId(encodedId);
      }
      if (location) {
        return queryShopsByLocation(location);
      }
      return [];
    },
  },
  River: {
    id: (parent) => {
      const id = btoa(parent.id);
      return id;
    },
    name: (parent) => parent.name,
    location: (parent) => parent.location,
  },
  Shop: {
    id: (parent) => {
      const id = btoa(parent.id);
      return id;
    },
    address: (parent) => parent.address,
    name: (parent) => parent.name,
    link: (parent) => parent.link || null,
    location: (parent) => parent.location,
  },
};
