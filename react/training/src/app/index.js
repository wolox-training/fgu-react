import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Game from './screens/Game/index';
import Login from './screens/Login/index';

const App = () => (
  <Router>
    <Fragment>
      <Route exact path="/" component={Login} />
      <Route path="/Game" component={Game} />
    </Fragment>
  </Router>
);

export default App;
