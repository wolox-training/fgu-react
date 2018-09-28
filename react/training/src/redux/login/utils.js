export const userIsOK = (response, userLogged) =>
  response.data.length > 0 && response.data[0].password === userLogged.password;
