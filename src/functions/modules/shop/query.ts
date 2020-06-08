import {ShopDataType, shopsData} from './data/shopsData';
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
  };
}

export function findShopById(id: string): ShopModel | undefined {
  const result = shopsData.find((r) => r.id === id);
  return result ? toShopModel(result) : result;
}
