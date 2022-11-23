import {
  BookOutlined,
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PayCircleOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { authActions } from "../../store/auth/slice";
import "./index.css";
const { Header, Sider } = Layout;

const MainLayout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [collapsed, setCollapsed] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const logoutHandle = () => {
    dispatch(authActions.logout());
  };
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
            <div className="header-container">
              {React.createElement(
                collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                {
                  className: "trigger",
                  onClick: () => setCollapsed(!collapsed),
                }
              )}
              <button className="btn-logout" onClick={logoutHandle}>
                <LogoutOutlined />
              </button>
            </div>
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
