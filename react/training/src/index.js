import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './redux/store';
import Game from './app/screens/Game/index';
import './scss/index.scss';

const initialState = { history: [{ squares: Array(9).fill(null) }], stepNumber: 0, xIsNext: true };

const store = configureStore(initialState);

ReactDOM.render(
  <Provider store={store}>
    <Game />
  </Provider>,
  document.getElementById('root')
);
