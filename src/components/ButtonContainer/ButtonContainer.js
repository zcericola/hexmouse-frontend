import React from 'react';
import { Button } from 'antd';
import styles from './ButtonContainer.module.css';

const ButtonContainer = ({ buttonText, type, htmlType }) => {
  return (
    <Button type={type} htmlType={htmlType}>
      {buttonText}
    </Button>
  );
};

export default ButtonContainer;
