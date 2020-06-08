import {RiverDataType} from '../riversData';

const mockPrefectures = ['和歌山県', '奈良県', '三重県', '京都府', '滋賀県'];

const mockRiversData: RiverDataType[] = [];
for (let i = 0; i < 100; i++) {
  mockRiversData.push({
    id: `river-test-id-${i}`,
    name: `river name ${i}`,
    lat: i + 120,
    lng: i + 90,
    prefecture: mockPrefectures[i % mockPrefectures.length],
    unionId: `union-test-id-${i}`,
  });
}

export const riversData: ReadonlyArray<RiverDataType> = mockRiversData;
