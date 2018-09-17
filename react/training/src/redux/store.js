import { createStore } from 'redux';

import { squareFilled } from './game/reducers/reducer';

export default function configureStore(initialState) {
  return createStore(squareFilled, initialState);
}
