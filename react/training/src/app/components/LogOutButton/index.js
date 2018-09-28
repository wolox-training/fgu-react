import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { loginActions } from '../../../redux/login/actions';

import styles from './styles.scss';

function LogOutButton(props) {
  const { userAuthenticated, token, logOut } = props;
  return userAuthenticated ? (
    <div className={styles.button}>
      <span>You are logged as: {token} </span>
      <button onClick={logOut}>Log Out</button>
    </div>
  ) : (
    <Redirect to="/" />
  );
}

LogOutButton.propTypes = {
  userAuthenticated: PropTypes.bool,
  logOut: PropTypes.func,
  token: PropTypes.string
};

const mapStateToProps = state => ({
  userAuthenticated: state.login.userAuthenticated,
  token: state.login.token
});

const mapDispatchToProps = dispatch => ({
  logOut: () => dispatch(loginActions.logOut())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LogOutButton);
