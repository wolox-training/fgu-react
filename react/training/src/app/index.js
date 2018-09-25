import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Game from './screens/Game/index';
import Login from './screens/Login/index';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/Game" component={Game} />
    </Switch>
  </Router>
);

export default App;
