import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { loginActions } from '../../../redux/login/actions';

class AuthenticatedRoute extends Component {
  render() {
    const { userAuthenticated, path, component, setAuthentication } = this.props;
    setAuthentication();
    return userAuthenticated ? <Route path={path} component={component} /> : <Redirect to="/" />;
  }
}

AuthenticatedRoute.propTypes = {
  userAuthenticated: PropTypes.bool,
  path: PropTypes.string,
  setAuthentication: PropTypes.func.isRequired,
  component: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  userAuthenticated: state.login.userAuthenticated
});

const mapDispatchToProps = dispatch => ({
  setAuthentication: () => dispatch(loginActions.setAuthentication())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthenticatedRoute);
