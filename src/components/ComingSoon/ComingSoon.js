import React from 'react';
import styles from './ComingSoon.module.css';
import Button from '../Button';
const ComingSoon = () => {
  return (
      <section className={styles.wrapper}>
          <h3 className={styles.comingSoonText}>Notify me when Hexmouse launches:</h3>
          <section className={styles.form}>
          <input className={styles.emailInput} 
          placeholder='Enter your email address'/>
          <Button type='default' text='Sign Up'/>
          </section>
      </section>
 );
};

export default ComingSoon;
