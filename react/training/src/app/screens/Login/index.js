import React, { Component } from 'react';

import LoginForm from './components/layout';

class Login extends Component {
  submit = values => window.alert(JSON.stringify(values, null, 4));
  render() {
    return <LoginForm onSubmit={this.submit} />;
  }
}

export default Login;
