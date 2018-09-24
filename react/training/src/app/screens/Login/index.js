import React, { Fragment } from 'react';

export const customInput = props => (
  <Fragment>
    <label> {props.label} </label>
    <input {...props.input} type={props.type} />
    {props.meta.error && <div style={{ color: 'red' }}> {props.meta.error} </div>}
  </Fragment>
);

export const required = value => (value ? undefined : 'Value is required');

export const validEmail = mail => (mail.includes('@') ? undefined : 'User E-mail not valid');

const passwordLongError = 'Password must be 8 characters long';
export const passwordLength = password => (password.length < 8 ? undefined : passwordLongError);
