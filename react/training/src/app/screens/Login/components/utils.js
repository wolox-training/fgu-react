import { PASSWORD_LENGTH_ERROR } from 'constants';

export const required = value => (value ? undefined : 'Value is required');

export const validEmail = mail => (mail.includes('@') ? undefined : 'User E-mail not valid');

export const passwordLength = password => (password.length < 8 ? undefined : PASSWORD_LENGTH_ERROR);
