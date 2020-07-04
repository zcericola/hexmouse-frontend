import React, { useState } from 'react';
import styles from './Login.module.css';
import HeaderContainer from '../../components/HeaderContainer';
import ButtonContainer from '../../components/ButtonContainer';
import { Layout, Form, Card, Input, Typography, Button } from 'antd';
const { Content } = Layout;
const { Title } = Typography;

const Login = () => {
  const [state, setState] = useState({ username: '', password: '' });

  const formLayout = {
    labelCol: {
      span: 7
    },
    wrapperCol: {
      span: 16
    }
  };
  const tailLayout = {
    wrapperCol: {
      offset: 16,
      span: 16
    }
  };

  const handleLoginValues = (event, field) => {
    const { value } = event.target;
    setState((prevState) => ({
      ...prevState,
      [field]: value
    }));
  };
  //   console.log('state: ', state);
  return (
    <>
      <HeaderContainer />
      <Content className={styles.loginContainer}>
        <Card>
          <Form className={styles.loginForm} {...formLayout} name="login">
            <Title className={styles.loginTitle} level={1}>
              Login
            </Title>
            <Form.Item
              label="Username"
              name="Username"
              rules={[
                {
                  required: true,
                  message: 'Please input your username.'
                }
              ]}
              onChange={(event) => handleLoginValues(event, 'username')}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password.'
                }
              ]}
              onChange={(event) => handleLoginValues(event, 'password')}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item {...tailLayout}>
              <Button
                type="primary"
                size="large"
                className={styles.loginButton}
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Content>
    </>
  );
};

export default Login;
