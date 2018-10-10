import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import Game from './screens/Game/index';
import Login from './screens/Login/index';
import AuthenticatedRoute from './components/AuthenticatedRoute/index';

const App = () => (
  <Router>
    <Switch>
      <AuthenticatedRoute path={'/'} component={Login} />
      <AuthenticatedRoute path={'/Game'} component={Game} />
    </Switch>
  </Router>
);

export default App;
