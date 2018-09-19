import React from 'react';
import { Provider } from 'react-redux';

import Game from '../../screens/Game/index';
import Store from '../../../redux/store';

const App = () => (
  <Provider store={Store}>
    <Game store={Store} />
  </Provider>
);

export default App;
