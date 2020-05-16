import React from 'react';
import styles from './Button.module.css';
import cs from 'clsx';

const Button = ({ type, text }) => {
  return <button className={cs(styles[type] || styles.default)}>{text}</button>;
};

export default Button;
