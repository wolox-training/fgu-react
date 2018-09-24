import React, { Component } from 'react';
import { Provider } from 'react-redux';

import Store from '../../../redux/store';
import LoginForm from '../../screens/Login/layout';

class Login extends Component {
  submit = values => window.alert(JSON.stringify(values, null, 4));
  render() {
    return (
      <Provider store={Store}>
        <LoginForm onsubmit={this.submit} />
      </Provider>
    );
  }
}

export default Login;
