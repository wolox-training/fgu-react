import { getByEmail } from '../../services/loginService';

import { userIsOK, startSession, sessionExist, endSession } from './utils';

export const actionTypes = {
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILURE: 'LOGIN_FAILURE',
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGOUT: 'LOGOUT',
  SET_AUTHENTICATION: 'SET_AUTHENTICATION'
};

export const loginActions = {
  handleSubmit: userLogged => async dispatch => {
    dispatch({ type: actionTypes.LOGIN_REQUEST });
    const response = await getByEmail(userLogged);
    if (userIsOK(response, userLogged)) {
      startSession(response.data[0].token);
      dispatch({ type: actionTypes.LOGIN_SUCCESS, payload: response.data[0].token });
    } else {
      dispatch({
        type: actionTypes.LOGIN_FAILURE,
        payload:
          response.data.length > 0 ? 'Error: The password is not correct' : 'Error: Invalid User E-mail'
      });
    }
  },
  logOut: () => dispatch => {
    endSession();
    dispatch({ type: actionTypes.LOGOUT });
  },
  setAuthentication: () => dispatch => {
    const sessionUser = sessionExist();
    if (sessionUser) {
      dispatch({ type: actionTypes.SET_AUTHENTICATION, payload: sessionUser });
    }
  }
};

export default loginActions;
