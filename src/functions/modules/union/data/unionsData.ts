export interface UnionDataType {
  id: string;
  name: string;
  prefecture: string;
  link?: string;
  terms?: string;
  phone?: string;
}

export const unionsData: ReadonlyArray<UnionDataType> = [
  {
    id: 'union-和歌山県-日置川漁業協同組合',
    prefecture: '和歌山県',
    name: '日置川漁業協同組合',
    link: 'http://hikigawagyokyou.eek.jp/',
    terms: '5月26日 - 12月31日',
    phone: '0739-53-0023',
  },
  {
    id: 'union-和歌山県-古座川漁業協同組合',
    prefecture: '和歌山県',
    name: '古座川漁業協同組合',
    link: 'https://www.ayuayu.server-shared.com/',
    terms: '6月14日 - 12月31日',
    phone: '0735-72-3800',
  },
  {
    id: 'union-和歌山県-紀ノ川漁業協同組合',
    prefecture: '和歌山県',
    name: '紀ノ川漁業協同組合',
    link: 'http://www.naxnet.or.jp/~kinogyo/',
    terms: '6月1日 - 12月31日',
    phone: '0736-66-9111',
  },
  {
    id: 'union-和歌山県-有田川漁業協同組合',
    prefecture: '和歌山県',
    name: '有田川漁業協同組合',
    link: 'http://aridagawa.com/index.html',
    terms: '5月20日 - 12月31日',
    phone: '0737-52-4863',
  },
  {
    id: 'union-和歌山県-貴志川漁業協同組合',
    prefecture: '和歌山県',
    name: '貴志川漁業協同組合',
    link: '',
    terms: '6月7日 - 12月31日',
    phone: '073-495-2114',
  },
  {
    id: 'union-和歌山県-日高川漁業協同組合',
    prefecture: '和歌山県',
    name: '日高川漁業協同組合',
    link: 'http://www.zb.ztv.ne.jp/hidagyo/',
    terms: '5月20日 - 12月31日',
    phone: '0738-52-0224',
  },
  {
    id: 'union-和歌山県-富田川漁業協同組合',
    prefecture: '和歌山県',
    name: '富田川漁業協同組合',
    link: '',
    terms: '5月31日 - 12月31日',
    phone: '0739-47-0710',
  },
  {
    id: 'union-和歌山県-熊野川漁業協同組合・熊野川漁業協同組合連合協議会',
    prefecture: '和歌山県',
    name: '熊野川漁業協同組合・熊野川漁業協同組合連合協議会',
    link: '',
    terms: '6月1日 - 12月31日',
    phone: '0735-21-4193',
  },
  {
    id: 'union-京都府-美山漁業協同組合',
    prefecture: '京都府',
    name: '美山漁業協同組合',
    link: 'http://www.miyama-gyokyou.jp/',
    terms: '6月6日 - 12月31日',
    phone: '0771-75-0210',
  },
];
