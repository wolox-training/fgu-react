import React, { Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { loginActions } from '../../../redux/login/actions';

import LoginForm from './components/LoginForm/index';

function Login(props) {
  const { userAuthenticated, handleSubmit, error } = props;
  return !userAuthenticated ? (
    <Fragment>
      <span style={{ color: 'red' }}>{error}</span>
      <LoginForm onSubmit={handleSubmit} />
    </Fragment>
  ) : (
    <Redirect to="/Game" />
  );
}

Login.propTypes = {
  userAuthenticated: PropTypes.bool,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.string
};

const mapStateToProps = state => ({
  userAuthenticated: state.login.userAuthenticated,
  error: state.login.error
});

const mapDispatchToProps = dispatch => ({
  handleSubmit: values => dispatch(loginActions.handleSubmit(values))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
