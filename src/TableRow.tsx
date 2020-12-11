import React, { FC } from 'react';
import { SongListType, SongList } from './SongList';

console.log(SongList[0]);


export const TableRow: FC<SongListType> = ({songTitle, artistName, songUrl}) => {
  return (
      <tr
        style={{
          height: '36px',
          textAlign: 'center',
          border: 'solid 1px #333',
          width: '800px'
        }}
      >
        <td>{songTitle}</td>
        <td>{artistName}</td>
        <td>{songUrl}</td>
      </tr>
  );
};