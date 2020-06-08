// import * as faker from 'faker';

import {riversData} from './data/riversData';
import {findRiverById, queryByName} from './query';
import {RiverModel} from './RiverModel';

jest.mock('./data/riversData');

describe('query', () => {
  describe('findRiverById', () => {
    test('idが存在するとき、modelを取得する', () => {
      const mockRiver = riversData[0];
      const result = findRiverById(mockRiver.id);
      const returnModel: RiverModel = {
        id: mockRiver.id,
        name: mockRiver.name,
        location: {
          lat: mockRiver.lat,
          lng: mockRiver.lng,
        },
        prefecture: mockRiver.prefecture,
        unionId: mockRiver.unionId,
      };
      expect(result).toStrictEqual(returnModel);
    });

    test('idが存在しないとき、undefined', () => {
      const result = findRiverById('no-exist-id');
      expect(result).toBeUndefined();
    });
  });

  describe('queryByName', () => {
    test('部分一致するものがある場合、Modelの配列を返す', () => {
      const result = queryByName('river name 2');
      expect(result).toHaveLength(11);
    });

    test('部分一致するものがない場合、空配列を返す', () => {
      const result = queryByName('存在しない川');
      expect(result).toHaveLength(0);
    });
  });
});
