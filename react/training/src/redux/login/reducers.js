import { actionTypes } from './actions';

const initialState = {
  userAuthenticated: false
};

export default function logInReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SUBMIT:
      return { ...state, userAuthenticated: action.payload };
    case actionTypes.LOG_IN_FAIL:
      window.alert(action.payload);
      return state;
    default:
      return state;
  }
}
