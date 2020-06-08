// import * as faker from 'faker';

import {unionsData} from './data/unionsData';
import {findUnionById} from './query';
import {UnionModel} from './UnionModel';

jest.mock('./data/unionsData');

describe('unions query', () => {
  describe('findUnionById', () => {
    test('union union modelを取得する', () => {
      const mockShop = unionsData[0];
      const result = findUnionById(mockShop.id);
      const returnModel: UnionModel = {
        id: mockShop.id,
        name: mockShop.name,
        prefecture: mockShop.prefecture,
        link: mockShop.link,
        phone: mockShop.phone,
        terms: mockShop.terms,
      };
      expect(result).toStrictEqual(returnModel);
    });

    test('union idが存在しないとき、undefined', () => {
      const result = findUnionById('no-exist-id');
      expect(result).toBeUndefined();
    });
  });
});
