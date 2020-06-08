import {ShopDataType, shopsData} from './data/shopsData';
import {ShopModel} from './ShopModel';

export function toShopModel(data: ShopDataType): ShopModel {
  return {
    id: data.id,
    name: data.name,
    prefecture: data.prefecture,
    phone: data.phone,
    link: data.link,
    terms: data.terms,
  };
}

export function findShopById(id: string): ShopModel | undefined {
  const result = shopsData.find((r) => r.id === id);
  return result ? toShopModel(result) : result;
}
