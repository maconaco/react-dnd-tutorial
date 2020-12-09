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
          <TableRow songTitle='イカサマダンス' artistName='まふまふ' songUrl=' https://www.nicovideo.jp/watch/sm37812606' />
          <tr style={{ textAlign: 'center'}}>
            <td>イカサマダンス</td>
            <td>まふまふ</td>
            <td>
              <a href="https://www.nicovideo.jp/watch/sm37812606" style={{textDecoration: 'none'}}>
                  https://www.nicovideo.jp/watch/sm37812606
              </a>
            </td>
          </tr>
          <tr style={{backgroundColor: '#eee', textAlign: 'center'}}>
            <td>アンチジョーカー</td>
            <td>マイキP</td>
            <td>
              <a href="https://www.nicovideo.jp/watch/sm37478808" style={{textDecoration: 'none'}}>
                https://www.nicovideo.jp/watch/sm37478808
              </a>
            </td>
          </tr>
          <tr style={{ textAlign: 'center'}}>
            <td>potatoになっていく</td>
            <td>Neru</td>
            <td>
              <a href="https://www.nicovideo.jp/watch/sm36620941" style={{textDecoration: 'none'}}>
                https://www.nicovideo.jp/watch/sm36620941
              </a>
              </td>
          </tr>
       </table>
    </div>
  );
};
