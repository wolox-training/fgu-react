import { getByEmail } from '../../services/loginService';

export const actionTypes = {
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILURE: 'LOGIN_FAILURE',
  LOGIN_REQUEST: 'LOGIN_REQUEST'
};

export const loginActions = {
  handleSubmit: userLogged => async dispatch => {
    dispatch({ type: actionTypes.LOGIN_REQUEST, payload: true });
    const response = await getByEmail(userLogged);
    if (response.data.length > 0 && response.data[0].password === userLogged.password) {
      dispatch({ type: actionTypes.LOGIN_SUCCESS, payload: true });
    } else {
      dispatch({
        type: actionTypes.LOGIN_FAILURE,
        payload:
          response.data.length > 0 ? 'Error: The password is not correct' : 'Error: Invalid User E-mail'
      });
    }
  }
};

export default loginActions;
