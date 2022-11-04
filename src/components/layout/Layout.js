import React, { useState } from "react";
import Content from "../content/Content";

import "./Layout.css";

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PayCircleOutlined,
  UserOutlined,
  BookOutlined,
} from "@ant-design/icons";

import { Layout, Menu } from "antd";
import { useNavigate } from "react-router-dom";
const { Header, Sider } = Layout;

const Layouts = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div>
      <Layout className="layout">
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo">NHT</div>
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

          <Content />
        </Layout>
      </Layout>
    </div>
  );
};

export default Layouts;
