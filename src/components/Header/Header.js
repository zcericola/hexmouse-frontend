import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
        <span className={styles.logo}>Hexmouse</span>
    </div>
  );
};

export default Header;