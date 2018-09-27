import api from '../config/api';

export const getByEmail = async login => api.get(`/users?email=${login.mail}`);
