import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './app/components/App/index';
import Login from './app/components/Login/index';

import './scss/index.scss';

const Directory = () => (
  <Router>
    <Fragment>
      <Route exact path="/" component={Login} />
      <Route path="/Game" component={App} />
    </Fragment>
  </Router>
);

ReactDOM.render(<Directory />, document.getElementById('root'));
