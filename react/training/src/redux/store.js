import { createStore, applyMiddleware, combineReducers } from 'redux';
import { reducer as loginReducer } from 'redux-form';
import thunk from 'redux-thunk';

import reducer from './game/reducers';

const reducers = {
  game: reducer,
  form: loginReducer
};

const appReducer = combineReducers(reducers);

export default createStore(appReducer, applyMiddleware(thunk));
