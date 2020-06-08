import {findRiverById} from '../river/query';
import {ShopDataType, shopsData, unionIdsDelimiter} from './data/shopsData';
import {ShopModel} from './ShopModel';

export function toShopModel(data: ShopDataType): ShopModel {
  return {
    id: data.id,
    name: data.name,
    location: {
      lng: data.lng,
      lat: data.lat,
    },
    prefecture: data.prefecture,
    link: data.link,
    unionIds: data.unionIds.split(unionIdsDelimiter),
  };
}

export function findShopById(id: string): ShopModel | undefined {
  const result = shopsData.find((r) => r.id === id);
  return result ? toShopModel(result) : result;
}

export function queryShopsByRiverId(riverId: string): ShopModel[] {
  const river = findRiverById(riverId);
  const unionId = river && river.unionId;
  if (!unionId) {
    return [];
  }
  const filter = (s: ShopDataType) => s.unionIds.split(unionIdsDelimiter).includes(unionId);
  const shops = shopsData.filter(filter);
  return shops.map((s) => toShopModel(s));
}
