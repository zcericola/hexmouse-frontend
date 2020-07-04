import React from 'react';
import Hexagons from '../../components/SVGs/Hexagons';
import HeaderContainer from '../../components/HeaderContainer';
import CallToAction from '../../components/CallToAction';
import styles from './LandingPage.module.css';

const LandingPage = () => {
  return (
    <div className={styles.LandingPage}>
      <Hexagons />
      <HeaderContainer />
      <CallToAction />
    </div>
  );
};

export default LandingPage;
