import React from "react";
import { CheckHerStyle } from "./style";
import { Link } from "react-router-dom";
import arrowright from '../../../assets/icons/shopArrow.svg'
import logotip from '../../../assets/icons/logotip.png'

const CheckoutHer = () => {


  return (
    <CheckHerStyle>
      <CheckHerStyle.Container>
        <CheckHerStyle.Wrapper>
          <CheckHerStyle.Logotip src={logotip}/>
          <CheckHerStyle.Title >Checkout</CheckHerStyle.Title>
          <CheckHerStyle.Navigation>
            <Link to="/" className="homelink" >
              Home
            </Link>
            <CheckHerStyle.ArrowRigt src={arrowright} />
            <Link to="/comparsion" className="shoplink" >
            Checkout
            </Link>
          </CheckHerStyle.Navigation>
        </CheckHerStyle.Wrapper>
      </CheckHerStyle.Container>
    </CheckHerStyle>
  );
};

export default CheckoutHer;
