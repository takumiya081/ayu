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
    address: data.address,
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

export function queryShopsByLocation({lat, lng}: {lat: number; lng: number}): ShopModel[] {
  // 日本付近の10キロに相当する緯度
  const latDiff = 0.090133729745762;
  // 日本付近の10キロに相当する経度
  const lngDiff = 0.10966404715491394;
  const maxLat = lat + latDiff;
  const minLat = lat - latDiff;
  const maxLng = lng + lngDiff;
  const minLng = lng - lngDiff;
  return shopsData
    .filter((s) => {
      if (s.lat < minLat || maxLat < s.lat) {
        return false;
      }
      if (s.lng < minLng || maxLng < s.lng) {
        return false;
      }
      return true;
    })
    .map((s) => toShopModel(s));
}
