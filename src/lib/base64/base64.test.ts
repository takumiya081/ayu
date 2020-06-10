import {atob} from './atob';
import {btoa} from './btoa';

describe('base64', () => {
  describe('atob', () => {
    test('エンコードできる', () => {
      const testString = 'サンプル　文字列-test';
      expect(btoa(testString)).toBe('44K144Oz44OX44Or44CA5paH5a2X5YiXLXRlc3Q=');
    });
  });

  describe('btoa', () => {
    test('デコードできる', () => {
      const testString = '44K144Oz44OX44Or44CA5paH5a2X5YiXLXRlc3Q=';
      expect(atob(testString)).toBe('サンプル　文字列-test');
    });
  });
});
