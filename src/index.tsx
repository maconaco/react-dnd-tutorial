import React from 'react';
import ReactDOM from 'react-dom';
import { Table } from './Table';
import { SongList } from './SongList';

const root = document.getElementById('root');

ReactDOM.render(
  <Table songList={SongList} />, root
)