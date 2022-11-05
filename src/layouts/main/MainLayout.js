import {
  BookOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PayCircleOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import "./index.css";
const { Header, Sider } = Layout;

const MainLayout = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const { user } = useSelector((state) => state.auth);

  return (
    <div>
      <Layout className="layout">
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo">{user?.name}</div>
          <Menu
            onClick={({ key }) => {
              navigate(key);
            }}
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["/"]}
            items={[
              {
                key: "/",
                icon: <BookOutlined />,
                label: "Workflow",
              },
              {
                key: "/user",
                icon: <UserOutlined />,
                label: "Users",
              },
              {
                key: "/payroll",
                icon: <PayCircleOutlined />,
                label: "Payroll",
              },
            ]}
          />
        </Sider>
        <Layout className="site-layout">
          <Header
            className="site-layout-background"
            style={{
              padding: 0,
            }}
          >
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: () => setCollapsed(!collapsed),
              }
            )}
          </Header>
          <div className="container">
            <Outlet />
          </div>
        </Layout>
      </Layout>
    </div>
  );
};

export default MainLayout;
