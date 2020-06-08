import {UnionDataType} from '../unionsData';

const mockPrefectures = ['和歌山県', '奈良県', '三重県', '京都府', '滋賀県'];

const mockUnionsData: UnionDataType[] = [];
for (let i = 0; i < 100; i++) {
  mockUnionsData.push({
    id: `shop-test-id-${i}`,
    name: `shop name ${i}`,
    prefecture: mockPrefectures[i % mockPrefectures.length],
    link: `https://example.com?i=${i}`,
    phone: `000-000-${i}`,
    terms: `${i} - ${i}`,
  });
}

export const unionsData: ReadonlyArray<UnionDataType> = mockUnionsData;
