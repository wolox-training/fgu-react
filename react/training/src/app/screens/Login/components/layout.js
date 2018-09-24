import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

import { customInput, required, validEmail, passwordLength } from './index';

class Form extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <Field
          name="mail"
          component={customInput}
          type="text"
          label="Email"
          validate={[required, validEmail]}
        />
        <Field
          name="password"
          component={customInput}
          type="password"
          label="Password"
          validate={[required, passwordLength]}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

const LoginForm = reduxForm({
  form: 'register'
})(Form);

export default LoginForm;
