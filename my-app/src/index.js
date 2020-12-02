import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Board from './Board';
import reportWebVitals from './reportWebVitals';
import { observe } from './Game';

const root = document.getElementById('root');
console.log(aaaaaaa);
observe((knightPosition) =>
  ReactDOM.render(
    <Board knightPosition={knightPosition}/>, root
  )
);

console.log(aaaaaaa);
reportWebVitals();
