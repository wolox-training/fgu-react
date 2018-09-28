import { actionTypes } from './actions';

const initialState = {
  userAuthenticated: false,
  isLoading: false,
  error: '',
  token: ''
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOGIN_REQUEST:
      return { ...state, isLoading: true };
    case actionTypes.LOGIN_SUCCESS:
      return { ...state, userAuthenticated: true, isLoading: false, token: action.payload };
    case actionTypes.LOGIN_FAILURE:
      return { ...state, error: action.payload, isLoading: false };
    default:
      return state;
  }
}
