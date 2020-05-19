import React from 'react';
import styles from './Hexagons.module.css';

const Hexagons = ({ type }) => {
  return (
    <div className={styles.wrapper}>
      <figure className={styles.hexagonImage}></figure>
    </div>
  );
};

export default Hexagons;
