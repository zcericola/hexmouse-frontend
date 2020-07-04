import React from 'react';
import HeaderContainer from '../../components/HeaderContainer';
import styles from './Dashboard.module.css';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined
} from '@ant-design/icons';

import { Layout, Menu } from 'antd';
const { Sider, Content } = Layout;

const Dashboard = () => {
  return (
    <div className={styles.Dashboard}>
      <HeaderContainer route="dashboard" />
      <Sider
        className={styles.sideBar}
        trigger={null}
        collapsible
        // collapsed={this.state.collapsed}
      >
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            nav 1
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            nav 2
          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            nav 3
          </Menu.Item>
        </Menu>
      </Sider>
    </div>
  );
};

export default Dashboard;
