import {atob, btoa} from 'abab';

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
      const encodedId = atob(id);
      if (encodedId === null) {
        throw new Error('river id cannot decoded');
      }
      return findRiverById(encodedId) || null;
    },
    searchRiver: (_, {query}) => {
      return queryByName(query);
    },
    shop: (_, {id}) => {
      const encodedId = atob(id);
      if (encodedId === null) {
        throw new Error('shop id cannot decoded');
      }
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
      if (id === null) {
        throw new Error(`river id cannot encoded`);
      }
      return id;
    },
    name: (parent) => parent.name,
    location: (parent) => parent.location,
  },
  Shop: {
    id: (parent) => {
      const id = btoa(parent.id);
      if (id === null) {
        throw new Error(`Shop id cannot encoded`);
      }
      return id;
    },
    name: (parent) => parent.name,
    link: (parent) => parent.link || null,
    location: (parent) => parent.location,
  },
};
