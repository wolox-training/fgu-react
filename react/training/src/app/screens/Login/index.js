import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import LoginForm from './components/LoginForm/index';

class Login extends Component {
  state = {
    isLoggedIn: false
  };

  handleSubmit = values => {
    this.setState({ isLoggedIn: true });
  };

  render() {
    return !this.state.isLoggedIn ? <LoginForm onSubmit={this.handleSubmit} /> : <Redirect to="/Game" />;
  }
}

export default Login;
