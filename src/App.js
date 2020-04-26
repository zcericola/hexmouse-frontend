import React from 'react';
import Header from './components/Header';
import CallToAction from './components/CallToAction';
import styles from './app.module.css';

const App = () => {
  return (
    <div className={styles.app}>
      <Header/>
      <CallToAction/>
    </div>
  );
}

export default App;
