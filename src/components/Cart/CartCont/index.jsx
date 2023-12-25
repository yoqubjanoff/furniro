import React from "react";
import productimg from "../../../assets/images/cartImg.jpg";
import delet from "../../../assets/icons/delet2.svg";
import { CarCountStyle } from "./style";
import Button from "../../Button/Button";

const CarConunt = () => {
  return (
    <CarCountStyle>
      <CarCountStyle.Container>
        <CarCountStyle.Wrapper>
          <CarCountStyle.LeftBox>
            <CarCountStyle.TopBox>
              <CarCountStyle.TopBoxTitle>Product</CarCountStyle.TopBoxTitle>
              <CarCountStyle.TopBoxTitle>Price</CarCountStyle.TopBoxTitle>
              <CarCountStyle.TopBoxTitle>Quantity</CarCountStyle.TopBoxTitle>
              <CarCountStyle.TopBoxTitle>Subtotal</CarCountStyle.TopBoxTitle>
            </CarCountStyle.TopBox>
            <CarCountStyle.ProductBox>
              <CarCountStyle.ProductImg src={productimg} alt="product img" />
              <CarCountStyle.ProductName>
                Asgaard sofa
              </CarCountStyle.ProductName>
              <CarCountStyle.ProductPrice>
                Rs. 250,000.00
              </CarCountStyle.ProductPrice>
              <CarCountStyle.ProductCount>1</CarCountStyle.ProductCount>
              <CarCountStyle.ProductPrice2>
                Rs. 250,000.00
              </CarCountStyle.ProductPrice2>
              <CarCountStyle.Delet src={delet} alt="delet img" />
            </CarCountStyle.ProductBox>
          </CarCountStyle.LeftBox>
          <CarCountStyle.RightBox>
            <CarCountStyle.LeftBoxTitle>Cart Totals</CarCountStyle.LeftBoxTitle>
            <CarCountStyle.SubBox>
              <CarCountStyle.SubTitle>Subtotal</CarCountStyle.SubTitle>
              <CarCountStyle.ProductPrice>
                Rs. 250,000.00
              </CarCountStyle.ProductPrice>
            </CarCountStyle.SubBox>
            <CarCountStyle.SubBox>
              <CarCountStyle.SubTitle>Total</CarCountStyle.SubTitle>
              <CarCountStyle.ProductPrice3>
                Rs. 250,000.00
              </CarCountStyle.ProductPrice3>
            </CarCountStyle.SubBox>
            <Button
              border="1px solid #000"
              borderradius="15px"
              backgroundcolor="transparent"
              text='Check Out'
              width='222px'
              allpadding='14px 59px'
            />
          </CarCountStyle.RightBox>
        </CarCountStyle.Wrapper>
      </CarCountStyle.Container>
    </CarCountStyle>
  );
};

export default CarConunt;
