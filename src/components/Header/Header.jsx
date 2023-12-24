import React, { useState } from "react";
import { CardWrapper, CustomDrawer, HeaderStyle } from "./style";
import { Link } from "react-router-dom";
import logo from "../../assets/icons/Logo.png";
import user from "../../assets/icons/useIcon.svg";
import heart from "../../assets/icons/heart.png";
import cart from "../../assets/icons/cart.png";
import lupa from "../../assets/icons/lupa.png";
import bug from "../../assets/icons/bug.svg";
import mebel from "../../assets/images/Asgaard.jpg";
import mebel2 from "../../assets/images/Asgaard2.jpg";
import delet from "../../assets/icons/delet.png";
import Button from "../Button/Button";

import { Space } from "antd";

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
            <Link className="navigation" to="/">
              About
            </Link>
            <Link className="navigation" to="/contact">
              Contact
            </Link>
            <Link className="navigation" to="/blog">
              Blog
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
        <CustomDrawer
          title="Shopping Cart"
          placement="right"
          onClose={onClose}
          width={472}
          open={open}
          closeIcon={false}
          extra={
            <Space>
              <HeaderStyle.Icons onClick={onClose} src={bug} alt="user icon" />
            </Space>
          }
          style={{ height: "fit-content" }}
          className="custom-drawer"
        >
          <CardWrapper>
            <CardWrapper.TopBox>
              <CardWrapper.TopMiddleBox>
                <CardWrapper.TopImgBox>
                  <CardWrapper.TopImg src={mebel} />
                </CardWrapper.TopImgBox>
                <CardWrapper.TopTextbox>
                  <CardWrapper.TopTitle>Asgaard sofa</CardWrapper.TopTitle>
                  <CardWrapper.TopCount>
                    <CardWrapper.TopNum>1</CardWrapper.TopNum>
                    <CardWrapper.TopPrice>Rs. 270,000.00</CardWrapper.TopPrice>
                  </CardWrapper.TopCount>
                </CardWrapper.TopTextbox>
                <CardWrapper.TopDelet src={delet} />
              </CardWrapper.TopMiddleBox>
              <CardWrapper.TopMiddleBox>
                <CardWrapper.TopImgBox>
                  <CardWrapper.TopImg src={mebel2} />
                </CardWrapper.TopImgBox>
                <CardWrapper.TopTextbox>
                  <CardWrapper.TopTitle>Asgaard sofa</CardWrapper.TopTitle>
                  <CardWrapper.TopCount>
                    <CardWrapper.TopNum>1</CardWrapper.TopNum>
                    <CardWrapper.TopPrice>Rs. 270,000.00</CardWrapper.TopPrice>
                  </CardWrapper.TopCount>
                </CardWrapper.TopTextbox>
                <CardWrapper.TopDelet src={delet} />
              </CardWrapper.TopMiddleBox>
            </CardWrapper.TopBox>
            <CardWrapper.BottomBox>
              <CardWrapper.BottomItogBox>
                <CardWrapper.ItogDesc>Subtotal</CardWrapper.ItogDesc>
                <CardWrapper.ItogPrice>Rs. 520,000.00</CardWrapper.ItogPrice>
              </CardWrapper.BottomItogBox>
              <CardWrapper.BottomBoxButons>
                <Button
                  border="1px solid #000"
                  borderradius="50px"
                  text={"Cart"}
                  allpadding="6px 30px"
                  width="87px"
                  fontsize="12px"
                />
                <Button
                  border="1px solid #000"
                  borderradius="50px"
                  text={"Checkout"}
                  allpadding="6px 30px"
                  width="118px"
                  fontsize="12px"
                />
                <Link to='/comparsion'>
                  <Button
                   onClick={onClose}
                    border="1px solid #000"
                    borderradius="50px"
                    text={"Comparison"}
                    allpadding="6px 30px"
                    width="135px"
                    fontsize="12px"
                  />
                </Link>
              </CardWrapper.BottomBoxButons>
            </CardWrapper.BottomBox>
          </CardWrapper>
        </CustomDrawer>
      </>
    </HeaderStyle>
  );
};

export default Header;
