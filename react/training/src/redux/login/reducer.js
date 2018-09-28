import { actionTypes } from './actions';

const initialState = {
  userAuthenticated: false,
  isLoading: false,
  error: ''
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOGIN_REQUEST:
      return { ...state, isLoading: action.payload };
    case actionTypes.LOGIN_SUCCESS:
      return { ...state, userAuthenticated: action.payload };
    case actionTypes.LOGIN_FAILURE:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}
