import React, { Fragment } from 'react';

export const customInput = props => (
  <Fragment>
    <label> {props.label} </label>
    <input {...props.input} type={props.type} />
    {props.meta.error && <div style={{ color: 'red' }}> {props.meta.error} </div>}
  </Fragment>
);
