import React from 'react';
import { Layout, Button } from 'antd';
import ButtonContainer from '../ButtonContainer';
import styles from './Header.module.css';
const { Header, Content } = Layout;
// import Hexagons from '../SVGs/Hexagons';

const HeaderContainer = ({ route }) => {
  const renderRoute = () => {
    let text = '';
    switch (route) {
      case 'dashboard':
        text = 'logout';
        break;
      default:
        break;
    }
    return text;
  };
  return (
    <Layout>
      <Header className={styles.header}>
        <Content className={styles.logo}>Hexmouse</Content>
        <Content className={styles.loginButton}>
          <Button type="primary" size="medium">
            {renderRoute()}
          </Button>
        </Content>
      </Header>
    </Layout>
  );
};

export default HeaderContainer;
