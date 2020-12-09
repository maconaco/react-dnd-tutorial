import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Board from './Board';
import reportWebVitals from './reportWebVitals';
import { observe } from './Game';
import Table from './Table';

const root = document.getElementById('root');

ReactDOM.render(
  <Table/>, root
)