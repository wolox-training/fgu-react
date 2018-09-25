import React, { Fragment } from 'react';

export const CustomInput = props => {
  const { label, input, type, meta } = props;
  return (
    <Fragment>
      <label> {label} </label>
      <input {...input} type={type} />
      {meta.error && <div style={{ color: 'red' }}> {meta.error} </div>}
    </Fragment>
  );
};
