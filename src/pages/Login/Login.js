import React from 'react';
import styles from './Login.module.css';
import HeaderContainer from '../../components/HeaderContainer';
import ButtonContainer from '../../components/ButtonContainer';
import { Layout, Form, Card, Input, Typography, Button } from 'antd';
const { Content } = Layout;
const { Title } = Typography;

const Login = () => {
  const formLayout = {
    labelCol: {
      span: 7
    },
    wrapperCol: {
      span: 12
    }
  };
  const tailLayout = {
    wrapperCol: {
      offset: 16,
      span: 16
    }
  };
  return (
    <>
      <HeaderContainer />
      <Content className={styles.loginContainer}>
        <Card>
          <Form className={styles.loginForm} {...formLayout} name="login">
            <Title className={styles.loginTitle}>Login</Title>
            <Form.Item
              label="Username"
              name="Username"
              rules={[
                {
                  required: true,
                  message: 'Please input your username.'
                }
              ]}
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
