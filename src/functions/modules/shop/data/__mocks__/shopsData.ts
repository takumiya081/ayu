import {ShopDataType} from '../shopsData';

const mockPrefectures = ['和歌山県', '奈良県', '三重県', '京都府', '滋賀県'];

const mockShopsData: ShopDataType[] = [];
for (let i = 0; i < 100; i++) {
  mockShopsData.push({
    id: `shop-test-id-${i}`,
    name: `shop name ${i}`,
    prefecture: mockPrefectures[i % mockPrefectures.length],
    link: `https://example.com?i=${i}`,
    address: `address${i}`,
    lat: 135.0 + 0.01 * i,
    lng: 33.0 + 0.01 * i,
    unionIds: `union-test-id-${i}`,
  });
}

export const shopsData: ReadonlyArray<ShopDataType> = mockShopsData;
