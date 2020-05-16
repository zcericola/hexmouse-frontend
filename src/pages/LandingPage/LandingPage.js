import React from 'react';
import Hexagons from '../../components/SVGs/Hexagons';
import Header from '../../components/Header';
import CallToAction from '../../components/CallToAction';
import styles from './LandingPage.module.css';

const LandingPage = () => {
  return (
    <div className={styles.LandingPage}>
      <Hexagons />
      <Header />
      <CallToAction />
    </div>
  );
};

export default LandingPage;
