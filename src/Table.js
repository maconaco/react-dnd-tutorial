import TableRow from './TableRow';

export default function Table() {
  return (
    <div>
       <table style={{ width: '800px', borderCollapse: "collapse", margin: '20px auto'}}>
          <tr style={{ backgroundColor: '#222', color: '#fff'}}>
            <th>曲名</th>
            <th>アーティスト名</th>
            <th>楽曲URL</th>
          </tr>
          <TableRow
            songTitle='イカサマダンス'
            artistName='まふまふ'
            songUrl='https://www.nicovideo.jp/watch/sm37812606'
          />
          <TableRow
            songTitle='アンチジョーカー'
            artistName='マイキP'
            songUrl='https://www.nicovideo.jp/watch/sm37478808'
          />
          <TableRow
            songTitle='potatoになっていく'
            artistName='Neru'
            songUrl='https://www.nicovideo.jp/watch/sm36620941'
          />
       </table>
    </div>
  );
};
