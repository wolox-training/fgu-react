import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Store from './redux/store';
import App from './app/index';
import './scss/index.scss';

const Application = () => (
  <Provider store={Store}>
    <App />
  </Provider>
);

ReactDOM.render(<Application />, document.getElementById('root'));
