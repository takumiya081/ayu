import {ShopDataType} from '../shopsData';

export const unionIdsDelimiter = ',';

const mockPrefectures = ['和歌山県', '奈良県', '三重県', '京都府', '滋賀県'];

const mockShopsData: ShopDataType[] = [];
for (let i = 0; i < 100; i++) {
  mockShopsData.push({
    id: `shop-test-id-${i}`,
    name: `shop name ${i}`,
    prefecture: mockPrefectures[i % mockPrefectures.length],
    link: `https://example.com?i=${i}`,
    address: `address${i}`,
    lng: 135.0 + 0.05 * i,
    lat: 33.0 + 0.05 * i,
    unionIds: `union-test-id-${i},union-test-id-${i + 1}`,
  });
}

export const shopsData: ReadonlyArray<ShopDataType> = mockShopsData;
