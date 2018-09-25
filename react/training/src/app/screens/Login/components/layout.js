import React, { Component } from 'react';
import { Field, reduxForm, Form } from 'redux-form';
import PropTypes from 'prop-types';

import { required, validEmail, passwordLength } from './utils';
import { CustomInput } from './CustomInput/index';

class LoginForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <Form onSubmit={handleSubmit}>
        <Field
          name="mail"
          component={CustomInput}
          type="text"
          label="Email"
          validate={[required, validEmail]}
        />
        <Field
          name="password"
          component={CustomInput}
          type="password"
          label="Password"
          validate={[required, passwordLength]}
        />
        <button type="submit">Submit</button>
      </Form>
    );
  }
}

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default reduxForm({
  form: 'login'
})(LoginForm);
