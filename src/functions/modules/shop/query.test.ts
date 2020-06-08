import {riversData} from '@/functions/modules/river/data/riversData';
import {unionsData} from '@/functions/modules/union/data/unionsData';

import {shopsData, unionIdsDelimiter} from './data/shopsData';
import {findShopById, queryShopsByLocation, queryShopsByRiverId} from './query';
import {ShopModel} from './ShopModel';

jest.mock('./data/shopsData');
jest.mock('@/functions/modules/union/data/unionsData');
jest.mock('@/functions/modules/river/data/riversData');

describe('shops query', () => {
  describe('findShopById', () => {
    test('shop idが存在するとき、shop modelを取得する', () => {
      const mockShop = shopsData[0];
      const result = findShopById(mockShop.id);
      const returnModel: ShopModel = {
        id: mockShop.id,
        name: mockShop.name,
        prefecture: mockShop.prefecture,
        link: mockShop.link,
        location: {
          lat: mockShop.lat,
          lng: mockShop.lng,
        },
        unionIds: mockShop.unionIds.split(unionIdsDelimiter),
      };
      expect(result).toStrictEqual(returnModel);
    });

    test('shop idが存在しないとき、undefined', () => {
      const result = findShopById('no-exist-id');
      expect(result).toBeUndefined();
    });
  });

  describe('queryShopsByRiverId', () => {
    test('river idが存在するとき、そのunionに関連するshop modelを取得する', () => {
      const river = riversData[1];
      const result = queryShopsByRiverId(river.id);
      const expectShops = shopsData.filter((s) =>
        s.unionIds.split(unionIdsDelimiter).includes(unionsData[0].id),
      );
      expect(result.map((s) => s.id)).toStrictEqual(expectShops.map((s) => s.id));
    });

    test('river idが存在しないとき、空配列になる', () => {
      const result = queryShopsByRiverId('not-exist');
      expect(result).toHaveLength(0);
    });
  });

  describe('queryShopsByLocation', () => {
    test('locationの近くのshop modelを取得する', () => {
      const result = queryShopsByLocation({lat: 35, lng: 137});
      expect(result).toHaveLength(3);
    });

    test('locationの近くのshopがない場合、空配列になる', () => {
      const result = queryShopsByLocation({lat: 60, lng: 10});
      expect(result).toHaveLength(0);
    });
  });
});
