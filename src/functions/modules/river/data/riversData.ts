export interface RiverDataType {
  id: string;
  name: string;
  lat: number;
  lng: number;
  unionId?: string;
  prefecture: string;
}

export const riversData: ReadonlyArray<RiverDataType> = [
  {
    id: 'river-日置川-33.808927-135.611457',
    prefecture: '和歌山県',
    name: '日置川',
    lat: 33.808927,
    lng: 135.611457,
    unionId: 'union-和歌山県-日置川漁業協同組合',
  },
  {
    id: 'river-古座川-33.561905-135.686945',
    prefecture: '和歌山県',
    name: '古座川',
    lat: 33.561905,
    lng: 135.686945,
    unionId: 'union-和歌山県-古座川漁業協同組合',
  },
  {
    id: 'river-紀ノ川-34.31021-135.606522',
    prefecture: '和歌山県',
    name: '紀ノ川',
    lat: 34.31021,
    lng: 135.606522,
    unionId: 'union-和歌山県-紀ノ川漁業協同組合',
  },
  {
    id: 'river-有田川-34.04713-135.343151',
    prefecture: '和歌山県',
    name: '有田川',
    lat: 34.04713,
    lng: 135.343151,
    unionId: 'union-和歌山県-有田川漁業協同組合',
  },
  {
    id: 'river-貴志川-34.225495-135.327583',
    prefecture: '和歌山県',
    name: '貴志川',
    lat: 34.225495,
    lng: 135.327583,
    unionId: 'union-和歌山県-貴志川漁業協同組合',
  },
  {
    id: 'river-日高川-33.921087-135.434861',
    prefecture: '和歌山県',
    name: '日高川',
    lat: 33.921087,
    lng: 135.434861,
    unionId: 'union-和歌山県-日高川漁業協同組合',
  },
  {
    id: 'river-富田川-33.787221-135.512022',
    prefecture: '和歌山県',
    name: '富田川',
    lat: 33.787221,
    lng: 135.512022,
    unionId: 'union-和歌山県-富田川漁業協同組合',
  },
  {
    id: 'river-熊野川-33.867404-135.76179',
    prefecture: '和歌山県',
    name: '熊野川',
    lat: 33.867404,
    lng: 135.76179,
    unionId: 'union-和歌山県-熊野川漁業協同組合・熊野川漁業協同組合連合協議会',
  },
  {
    id: 'river-北山川-33.890741-135.895256',
    prefecture: '和歌山県',
    name: '北山川',
    lat: 33.890741,
    lng: 135.895256,
    unionId: 'union-和歌山県-熊野川漁業協同組合・熊野川漁業協同組合連合協議会',
  },
  {
    id: 'river-美山川-35.320526-135.67847',
    prefecture: '京都府',
    name: '美山川',
    lat: 35.320526,
    lng: 135.67847,
    unionId: 'union-京都府-美山漁業協同組合',
  },
];
