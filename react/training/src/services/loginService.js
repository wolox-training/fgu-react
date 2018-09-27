import api from '../config/api';

export const getByEmail = login => api.get(`/users?email=${login.mail}`);
