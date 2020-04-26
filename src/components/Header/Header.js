import React from 'react';
import styles from './Header.module.css';
import Hexagons from '../SVGs/Hexagons';

const Header = () => {
  return (
    <div className={styles.header}>
        <span className={styles.logo}>Hexmouse</span>
        <Hexagons/>
    </div>
  );
};

export default Header;
