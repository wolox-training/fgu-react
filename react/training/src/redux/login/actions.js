import { getByEmail } from '../../services/loginService';

export const actionTypes = {
  SUBMIT: 'SUBMIT',
  LOG_IN_FAIL: 'LOG_IN_FAIL'
};

export const loginActions = {
  handleSubmit: userLogged => async dispatch => {
    const response = await getByEmail(userLogged);
    if (response.status === 200) {
      if (response.data.length > 0) {
        const authenticated = response.data[0].password === userLogged.password;
        if (authenticated) {
          dispatch({
            type: actionTypes.SUBMIT,
            payload: authenticated
          });
        } else {
          dispatch({
            type: actionTypes.LOG_IN_FAIL,
            payload: 'Error: The password is not correct'
          });
        }
      } else {
        dispatch({
          type: actionTypes.LOG_IN_FAIL,
          payload: 'Error: Invalid User E-mail'
        });
      }
    }
  }
};

export default loginActions;
