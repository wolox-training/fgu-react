import React, { Component } from 'react';
import { Field, reduxForm, Form } from 'redux-form';

import { required, validEmail, passwordLength } from './utils';

import { customInput } from './index';

class LoginForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <Form onSubmit={handleSubmit}>
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
      </Form>
    );
  }
}

export default reduxForm({
  form: 'simple'
})(LoginForm);
