import React from 'react';
import { Layout } from 'antd';
import ButtonContainer from '../ButtonContainer';
import styles from './Header.module.css';
const { Header, Content } = Layout;
// import Hexagons from '../SVGs/Hexagons';

const HeaderContainer = () => {
  return (
    <Layout>
      <Header className={styles.header}>
        <Content className={styles.logo}>Hexmouse</Content>
      </Header>
    </Layout>
  );
};

export default HeaderContainer;
