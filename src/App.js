import React from 'react';
import LandingPage from './pages/LandingPage';
import styles from './app.module.css';

const App = () => {
  return (
    <div className={styles.app}>
      <LandingPage />
    </div>
  );
};

export default App;
