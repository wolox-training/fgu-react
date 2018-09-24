import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

import { customInput, required, validEmail, passwordLength } from './index';

class Login extends Component {
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
        <br />
        <Field
          name="password"
          component={customInput}
          type="password"
          label="Password"
          validate={[required, passwordLength]}
        />
        <br />
        <button type="submit">Log In</button>
      </form>
    );
  }
}

const LoginForm = reduxForm({
  form: 'login'
})(Login);

export default LoginForm;
