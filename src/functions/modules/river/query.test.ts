// import * as faker from 'faker';

import {riversData} from './data/riversData';
import {findRiverById} from './query';
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
});
