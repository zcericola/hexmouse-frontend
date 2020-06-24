import React from 'react';
import Hexagons from '../../components/SVGs/Hexagons';
import Header from '../../components/Header';
import styles from './Login.module.css';

const Login = () => {
  return (
    <div className={styles.Login}>
      <Hexagons />
      <Header />
      <div className={styles.loginContainer}>
        <div className={styles.box}></div>
      </div>
    </div>
  );
};

export default Login;
