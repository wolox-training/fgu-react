import { getByEmail } from '../../services/loginService';

import { userIsOK } from './utils';

export const actionTypes = {
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILURE: 'LOGIN_FAILURE',
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGOUT: 'LOGOUT'
};

export const loginActions = {
  handleSubmit: userLogged => async dispatch => {
    dispatch({ type: actionTypes.LOGIN_REQUEST });
    const response = await getByEmail(userLogged);
    if (userIsOK(response, userLogged)) {
      dispatch({ type: actionTypes.LOGIN_SUCCESS, payload: response.data[0].token });
    } else {
      dispatch({
        type: actionTypes.LOGIN_FAILURE,
        payload:
          response.data.length > 0 ? 'Error: The password is not correct' : 'Error: Invalid User E-mail'
      });
    }
  },
  logOut: () => ({ type: actionTypes.LOGOUT })
};

export default loginActions;
