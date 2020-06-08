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
    id: 'river-日置川-33.363-135.282',
    prefecture: '和歌山県',
    name: '日置川',
    lat: 33.363,
    lng: 135.282,
    unionId: 'union-和歌山県-日置川漁業協同組合',
  },
  {
    id: 'river-古座川-33.3134-135.4901',
    prefecture: '和歌山県',
    name: '古座川',
    lat: 33.3134,
    lng: 135.4901,
    unionId: 'union-和歌山県-古座川漁業協同組合',
  },
  {
    id: 'river-紀ノ川-34.1738-135.3118',
    prefecture: '和歌山県',
    name: '紀ノ川',
    lat: 34.1738,
    lng: 135.3118,
    unionId: 'union-和歌山県-紀ノ川漁業協同組合',
  },
  {
    id: 'river-有田川-34.0522-135.2628',
    prefecture: '和歌山県',
    name: '有田川',
    lat: 34.0522,
    lng: 135.2628,
    unionId: 'union-和歌山県-有田川漁業協同組合',
  },
  {
    id: 'river-貴志川-34.0851-135.223',
    prefecture: '和歌山県',
    name: '貴志川',
    lat: 34.0851,
    lng: 135.223,
    unionId: 'union-和歌山県-貴志川漁業協同組合',
  },
  {
    id: 'river-日高川-33.5305-135.2634',
    prefecture: '和歌山県',
    name: '日高川',
    lat: 33.5305,
    lng: 135.2634,
    unionId: 'union-和歌山県-日高川漁業協同組合',
  },
  {
    id: 'river-富田川-33.4603-135.3',
    prefecture: '和歌山県',
    name: '富田川',
    lat: 33.4603,
    lng: 135.3,
    unionId: 'union-和歌山県-富田川漁業協同組合',
  },
  {
    id: 'river-熊野川-33.5014-135.4641',
    prefecture: '和歌山県',
    name: '熊野川',
    lat: 33.5014,
    lng: 135.4641,
    unionId: 'union-和歌山県-熊野川漁業協同組合・熊野川漁業協同組合連合協議会',
  },
  {
    id: 'river-北山川-33.5152-135.5118',
    prefecture: '和歌山県',
    name: '北山川',
    lat: 33.5152,
    lng: 135.5118,
    unionId: 'union-和歌山県-熊野川漁業協同組合・熊野川漁業協同組合連合協議会',
  },
  {
    id: 'river-美山川-35.1807-1353709',
    prefecture: '京都府',
    name: '美山川',
    lat: 35.1807,
    lng: 1353709,
    unionId: 'union-京都府-美山漁業協同組合',
  },
];
