import React from 'react';
import styles from './Button.module.css';
import cs from 'classnames';

const Button = ({type}) => {
  return (
        <button className={cs(styles[type] || styles.default)}>Sign Up Now</button>
  );
};

export default Button;
