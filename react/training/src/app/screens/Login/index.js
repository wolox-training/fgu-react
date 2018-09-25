import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import LoginForm from './components/layout';

class Login extends Component {
  submit = values => {
    return <Redirect to={{ pathname: '/' }} />;
  };

  render() {
    return <LoginForm onSubmit={this.submit} />;
  }
}

export default Login;
