export type SongListType = {
    songId: number,
    songTitle: string,
    artistName: string,
    songUrl: string,
};

export const SongList: SongListType[] = [
  {
    songId: 1,
    songTitle: 'イカサマダンス',
    artistName: 'まふまふ',
    songUrl: 'https://www.nicovideo.jp/watch/sm37812606',
  },
  {
    songId: 2,
    songTitle: 'アンチジョーカー',
    artistName: 'マイキP',
    songUrl: 'https://www.nicovideo.jp/watch/sm37478808',
  },
  {
    songId: 3,
    songTitle: 'potatoになっていく',
    artistName: 'Neru',
    songUrl: 'https://www.nicovideo.jp/watch/sm36594334',
  },
];
// Dragされたものが何かをTableが知ってなきゃ行けない(全TableRowが知っておく)
// Drop先のSongのidを知る必要がある