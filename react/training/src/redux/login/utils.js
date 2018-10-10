export const userIsOK = (response, userLogged) =>
  response.data.length > 0 && response.data[0].password === userLogged.password;

export const startSession = token => localStorage.setItem('sessionKey', token);

export const endSession = () => localStorage.removeItem('sessionKey');

export const sessionExist = () => localStorage.getItem('sessionKey');
