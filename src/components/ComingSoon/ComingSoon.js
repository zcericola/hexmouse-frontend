import React from 'react';
import styles from './ComingSoon.module.css';
import Button from '../Button';
const ComingSoon = () => {
  return (
      <section className={styles.wrapper}>
          <h3 className={styles.comingSoonText}>Notify me when Hexmouse launches:</h3>
          <section className={styles.form}>
          <input className={styles.emailInput} 
          type="text"
          id="emailInput" 
          name="emailInput"
          required
          />
          <label for="emailInput" className={styles.label}>Email Address</label>
          <Button type='default' text='Sign Up'/>
          </section>
      </section>
 );
};

export default ComingSoon;
