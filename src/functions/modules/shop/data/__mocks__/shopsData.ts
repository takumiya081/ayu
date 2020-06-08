import {ShopDataType} from '../shopsData';

const mockPrefectures = ['和歌山県', '奈良県', '三重県', '京都府', '滋賀県'];

const mockShopsData: ShopDataType[] = [];
for (let i = 0; i < 100; i++) {
  mockShopsData.push({
    id: `river-test-id-${i}`,
    name: `river name ${i}`,
    prefecture: mockPrefectures[i % mockPrefectures.length],
    phone: `000-000-${i}`,
    terms: `${i}期間`,
    link: `https://example.com?i=${i}`,
  });
}

export const shopsData: ReadonlyArray<ShopDataType> = mockShopsData;
