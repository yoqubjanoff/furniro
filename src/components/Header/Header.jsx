import React from "react";
import { HeaderStyle } from "./style";
import { Link } from "react-router-dom";
import logo from "../../assets/icons/Logo.png";
import user from "../../assets/icons/useIcon.svg";
import heart from "../../assets/icons/heart.png";
import cart from "../../assets/icons/cart.png";
import lupa from "../../assets/icons/lupa.png";

const Header = () => {
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
              <Link to="/" className="iconLink">
                <HeaderStyle.Icons src={cart} alt="user icon" />
              </Link>
            </HeaderStyle.IconsBox>
          </HeaderStyle.IconsBox>
        </HeaderStyle.Wrapper>
      </div>
    </HeaderStyle>
  );
};

export default Header;
