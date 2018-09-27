import { getByEmail } from '../../services/loginService';

export const actionTypes = {
  LOG_SUCCESS: 'LOG_SUCCESS',
  LOG_FAILURE: 'LOG_FAILURE',
  LOG_REQUEST: 'LOG_REQUEST'
};

export const loginActions = {
  handleSubmit: userLogged => async dispatch => {
    dispatch({ type: actionTypes.LOG_REQUEST, payload: true });
    const response = await getByEmail(userLogged);
    if (response.status === 200) {
      if (response.data.length > 0) {
        const authenticated = response.data[0].password === userLogged.password;
        if (authenticated) {
          dispatch({
            type: actionTypes.LOG_SUCCESS,
            payload: authenticated
          });
        } else {
          dispatch({
            type: actionTypes.LOG_FAILURE,
            payload: 'Error: The password is not correct'
          });
        }
      } else {
        dispatch({
          type: actionTypes.LOG_FAILURE,
          payload: 'Error: Invalid User E-mail'
        });
      }
    }
  }
};

export default loginActions;
