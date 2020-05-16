import React, { useState, useEffect } from 'react';
import styles from './Input.module.css';
import cs from 'clsx';

const Input = ({ text }) => {
  const [hasValue, setHasValue] = useState(false);


    const onBlur = (element) => {
    const inputVal = element.target.value;
    if (inputVal.length > 0) {
        console.log('input value: ', inputVal);
       setHasValue(true);
        console.log('hasValue: ', hasValue);
    } else {
       setHasValue(false);
        console.log('hasValue: ', hasValue);
        }
    } 


  return (
    <div className={styles.inputGroup}>
      <div className={styles.inputBackground}></div>
      <input type="text" 
      required
      className={styles.inputControl}
       />
      <label 
      >Email Address</label>
    </div>
  );
};

export default Input;
