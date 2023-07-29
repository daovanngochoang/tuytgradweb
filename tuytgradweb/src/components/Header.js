// components/Header.js
import React from "react";
import { Menu, Popover, Layout } from "antd";
import { Link } from "react-router-dom";
import "../StyleComponent/Header.css";
import logo from "../assets/logo/Logo_ATVIN_01-2.png";
const { Header: AntHeader } = Layout;

const Header = () => {
  const menuItems = [
    {
      key: "1",
      path: "/",
      label: "Trang chủ",
      wrapperContent: (
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      ),
    },
    {
      key: "2",
      path: "/branch",
      label: "Alpahtech Việt Nam",
      wrapperContent: (
        <ul>
          <li>Alpha Tech Item 1</li>
          <li>Alpha Tech Item 2</li>
          <li>Alpha Tech Item 3</li>
        </ul>
      ),
    },
    {
      key: "3",
      path: "/product",
      label: "Sản Phẩm",
      wrapperContent: (
        <ul>
          <li>Alpha Tech Item 1</li>
          <li>Alpha Tech Item 2</li>
          <li>Alpha Tech Item 3</li>
        </ul>
      ),
    },
    {
      key: "4",
      path: "/services",
      label: "Dịch Vụ",
      wrapperContent: (
        <ul>
          <li>Alpha Tech Item 1</li>
          <li>Alpha Tech Item 2</li>
          <li>Alpha Tech Item 3</li>
        </ul>
      ),
    },
    {
      key: "5",
      path: "/customer",
      label: "Khách Hàng",
      wrapperContent: (
        <ul>
          <li>Alpha Tech Item 1</li>
          <li>Alpha Tech Item 2</li>
          <li>Alpha Tech Item 3</li>
        </ul>
      ),
    },
    {
      key: "6",
      path: "/news",
      label: "Tin Tức",
      wrapperContent: (
        <ul>
          <li>Alpha Tech Item 1</li>
          <li>Alpha Tech Item 2</li>
          <li>Alpha Tech Item 3</li>
        </ul>
      ),
    },
    {
      key: "7",
      path: "/contribute",
      label: "Đóng góp xã hội",
      wrapperContent: (
        <ul>
          <li>Alpha Tech Item 1</li>
          <li>Alpha Tech Item 2</li>
          <li>Alpha Tech Item 3</li>
        </ul>
      ),
    },
    {
      key: "8",
      path: "/contact",
      label: "Liên Hệ",
      wrapperContent: (
        <ul>
          <li>Alpha Tech Item 1</li>
          <li>Alpha Tech Item 2</li>
          <li>Alpha Tech Item 3</li>
        </ul>
      ),
    },
  ];

  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item>Tư vấn sản phẩm</Menu.Item>
        <Menu.Item>098 115 9898</Menu.Item>
        <Menu.Item>contact@atvin.com.vn</Menu.Item>
      </Menu>
      <div className="header-logo">
        <img src={logo} alt="logo" />
      </div>
      <div>
        <AntHeader className="navbar">
          <Menu mode="horizontal" className="navbar-menu">
            {menuItems.map((item) => (
              <Menu.Item key={item.key}>
                <Popover
                  content={item.wrapperContent}
                  trigger="hover"
                  placement="bottom"
                >
                  <Link to={item.path}>{item.label}</Link>
                </Popover>
              </Menu.Item>
            ))}
          </Menu>
        </AntHeader>
      </div>
    </div>
  );
};

export default Header;
