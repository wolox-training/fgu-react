import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { loginActions } from '../../../redux/login/actions';

import styles from './styles.scss';

function LogOutButton(props) {
  const { logOut } = props;
  return (
    <Fragment>
      <button className={styles.button} onClick={logOut}>
        Log Out
      </button>
    </Fragment>
  );
}

LogOutButton.propTypes = {
  logOut: PropTypes.func
};

const mapDispatchToProps = dispatch => ({
  logOut: () => dispatch(loginActions.logOut())
});

export default connect(mapDispatchToProps)(LogOutButton);
