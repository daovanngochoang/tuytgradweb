// components/Header.js
import React from "react";
import { Menu, Popover, Layout } from "antd";
import { Link } from "react-router-dom";
import "./style.css";
import logo from "../../assets/logo/Logo_ATVIN_01-2.png";
import flatVi from "../../assets/icon/flatvi.png";
import flatLaos from "../../assets/icon/flatlaos.png";
import flatUs from "../../assets/icon/flatus.png";
import menuItems from "../../constant/navbarItem";
const { Header: AntHeader } = Layout;

const Header = () => {

  
  return (
    <div className="header">
      <Menu mode="horizontal" className="header-top">
        <div className="header-top-left">
          <Menu.Item>Tư vấn sản phẩm</Menu.Item>
          <Menu.Item>098 115 9898</Menu.Item>
          <Menu.Item>contact@atvin.com.vn</Menu.Item>
        </div>
        <div className="header-top-right">
          <Menu.Item>
            <img src={flatVi} alt="vie" />
          </Menu.Item>
          <Menu.Item>
            <img src={flatUs} alt="us" />
          </Menu.Item>
          <Menu.Item>
            <img src={flatLaos} alt="lao" />
          </Menu.Item>
        </div>
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
                  overlayClassName="custom-popover"
                       
                >
                  <Link className="navbar-menu-item" to={item.path}>{item.label}</Link>
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
