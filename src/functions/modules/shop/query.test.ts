// import * as faker from 'faker';

import {shopsData} from './data/shopsData';
import {findShopById} from './query';
import {ShopModel} from './ShopModel';

jest.mock('./data/shopsData');

describe('shops query', () => {
  describe('findShopById', () => {
    test('shop idが存在するとき、shop modelを取得する', () => {
      const mockShop = shopsData[0];
      const result = findShopById(mockShop.id);
      const returnModel: ShopModel = {
        id: mockShop.id,
        name: mockShop.name,
        prefecture: mockShop.prefecture,
        phone: mockShop.phone,
        link: mockShop.link,
        terms: mockShop.terms,
      };
      expect(result).toStrictEqual(returnModel);
    });

    test('shop idが存在しないとき、undefined', () => {
      const result = findShopById('no-exist-id');
      expect(result).toBeUndefined();
    });
  });
});
