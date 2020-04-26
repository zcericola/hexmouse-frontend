import React from 'react';

import ComingSoon from '../ComingSoon';
import styles from './CallToAction.module.css';

const CallToAction = () => {
  return (
    <div className={styles.wrapper}>
        <h1 className={styles.ctaTitle}>Organize your development <br></br> workflow.</h1>
        <h2 className={styles.ctaSubtitle}>
            Stay up-to-date on the latest programming news,<br></br> 
            keep track of your favorite snippets, and share your solutions with others.
        </h2>
        <ComingSoon />
    </div>
  );

};

export default CallToAction;
