import { createStore } from 'redux';

import { gameReducer } from './game/reducers';

export default createStore(gameReducer);
