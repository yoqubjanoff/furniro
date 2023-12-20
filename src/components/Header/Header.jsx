import React, { useState } from "react";
import { CustomDrawer, HeaderStyle } from "./style";
import { Link } from "react-router-dom";
import logo from "../../assets/icons/Logo.png";
import user from "../../assets/icons/useIcon.svg";
import heart from "../../assets/icons/heart.png";
import cart from "../../assets/icons/cart.png";
import lupa from "../../assets/icons/lupa.png";
import bug from "../../assets/icons/bug.svg";

import {Space } from "antd";

const Header = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };



  return (
    <HeaderStyle>
      <div className="container">
        <HeaderStyle.Wrapper>
          <Link to="/">
            <HeaderStyle.Logo src={logo} alt="logo site " />
          </Link>
          <HeaderStyle.Nav>
            <Link className="navigation" to="/">
              Home
            </Link>
            <Link className="navigation" to="/shop">
              Shop
            </Link>
            <Link className="navigation" to="/about">
              About
            </Link>
            <Link className="navigation" to="/contact">
              Contact
            </Link>
          </HeaderStyle.Nav>
          <HeaderStyle.IconsBox>
            <Link to="/" className="iconLink">
              <HeaderStyle.Icons src={user} alt="user icon" />
            </Link>
            <Link to="/" className="iconLink">
              <HeaderStyle.Icons src={lupa} alt="user icon" />
            </Link>
            <Link to="/" className="iconLink">
              <HeaderStyle.Icons src={heart} alt="user icon" />
            </Link>
            <HeaderStyle.Icons
              src={cart}
              alt="user icon"
              onClick={showDrawer}
            />
          </HeaderStyle.IconsBox>
        </HeaderStyle.Wrapper>
      </div>
      <>
        <Space></Space>
        <CustomDrawer
        title="Shopping Cart"
        placement="right"
        width={417}
        onClose={onClose}
        open={open}
        closeIcon={false}
        height={}
        extra={
          <Space>
            <HeaderStyle.Icons onClick={onClose} src={bug} alt="user icon" />
          </Space>
        }
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </CustomDrawer>
      </>
    </HeaderStyle>
  );
};

export default Header;
