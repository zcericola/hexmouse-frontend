import React from 'react';
import styles from './Button.module.css';
import cs from 'classnames';

const Button = ({type, text}) => {
  return (
  <button className={cs(styles[type] || styles.default)}>{text}</button>
  );
};

export default Button;
