import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { loginActions } from '../../../redux/login/actions';

import LoginForm from './components/LoginForm/index';

class Login extends Component {
  render() {
    return !this.props.userAuthenticated ? (
      <LoginForm onSubmit={this.props.handleSubmit} />
    ) : (
        <Redirect to="/Game" />
      );
  }
}

Login.propTypes = {
  userAuthenticated: PropTypes.bool,
  handleSubmit: PropTypes.func
};

const mapStateToProps = state => ({
  userAuthenticated: state.login.userAuthenticated
});

const mapDispatchToProps = dispatch => ({
  handleSubmit: values => dispatch(loginActions.handleSubmit(values))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
