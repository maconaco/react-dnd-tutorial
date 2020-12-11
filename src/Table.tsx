import React, { FC } from 'react';
import { TableRow } from './TableRow';
import { SongListType } from './SongList';

type Props = {
  songList: SongListType[]
}


export const Table: FC<Props> = ({songList}) => {
  return (
    <table style={{ width: '800px', borderCollapse: "collapse", margin: '20px auto'}}>
      <thead>
        <tr style={{ backgroundColor: '#222', color: '#fff'}}>
          <th>曲名</th>
          <th>アーティスト名</th>
          <th>楽曲URL</th>
        </tr>
      </thead>
      <tbody>
        {songList.map(({songId, songTitle, artistName, songUrl}) => (
          <TableRow
            songId={songId}
            songTitle={songTitle}
            artistName={artistName}
            songUrl={songUrl}
          />
        ))}
      </tbody>
    </table>
  );
};
