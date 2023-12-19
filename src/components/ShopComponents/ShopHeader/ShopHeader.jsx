import React from "react";
import { ShopHeaderStyle } from "./style";
import { Link, useLocation } from "react-router-dom";
import arrowright from '../../../assets/icons/shopArrow.svg'

const ShopHeader = () => {
  const location = useLocation();


  return (
    <ShopHeaderStyle>
      <ShopHeaderStyle.Container>
        <ShopHeaderStyle.Wrapper>
          <ShopHeaderStyle.Title >Shop</ShopHeaderStyle.Title>
          <ShopHeaderStyle.Navigation>
            <Link to="/" className="homelink" >
              Home
            </Link>
            <ShopHeaderStyle.ArrowRigt src={arrowright} />
            <Link to="/" className="shoplink" >
              Shop
            </Link>
          </ShopHeaderStyle.Navigation>
        </ShopHeaderStyle.Wrapper>
      </ShopHeaderStyle.Container>
    </ShopHeaderStyle>
  );
};

export default ShopHeader;
