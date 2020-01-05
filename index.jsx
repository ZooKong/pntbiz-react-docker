import React from 'react';
import ReactDOM from 'react-dom';
import RootContainer from "./src/RootContainer";
import { hot } from 'react-hot-loader/root';

const Hot = hot(RootContainer);

ReactDOM.render(<Hot/> , document.querySelector('#root'));