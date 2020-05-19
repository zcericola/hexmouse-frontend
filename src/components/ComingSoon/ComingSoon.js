import React from 'react';
import styles from './ComingSoon.module.css';
import Button from '../UI/Button';
import Input from '../UI/Input';

const ComingSoon = () => {
  return (
    <section className={styles.wrapper}>
      <h3 className={styles.stayTuned}>Coming Soon!</h3>
      {/* <h3 className={styles.comingSoonText}>
        Notify me when Hexmouse launches:
      </h3>
      <section className={styles.form}>
        <Input text="Email Address" />
        <Button type="default" text="Sign Up" />
      </section> */}
    </section>
  );
};

export default ComingSoon;
