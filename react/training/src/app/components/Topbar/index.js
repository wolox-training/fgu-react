import React from 'react';
import { Link } from 'react-router-dom';

import LogOutButton from '../LogOutButton/index';

import styles from './styles.scss';

function Topbar() {
  return (
    <div className={styles.topBar}>
      <Link to="/Game" className={styles.link}>
        Game
      </Link>
      <Link to="/Profile" className={styles.link}>
        Profile
      </Link>
      <LogOutButton className={styles.link} />
    </div>
  );
}

export default Topbar;
