import { actionTypes } from './actions';

const initialState = {
  userAuthenticated: false,
  isLoading: false,
  error: ''
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOG_REQUEST:
      return { ...state, isLoading: action.payload };
    case actionTypes.LOG_SUCCESS:
      return { ...state, userAuthenticated: action.payload };
    case actionTypes.LOG_FAILURE:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}
