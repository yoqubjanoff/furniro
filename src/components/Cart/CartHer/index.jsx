import React from "react";
import { CartHerStyle } from "./style";
import { Link } from "react-router-dom";
import arrowright from '../../../assets/icons/shopArrow.svg'
import logotip from '../../../assets/icons/logotip.png'

const CartHer = () => {


  return (
    <CartHerStyle>
      <CartHerStyle.Container>
        <CartHerStyle.Wrapper>
          <CartHerStyle.Logotip src={logotip}/>
          <CartHerStyle.Title >Cart</CartHerStyle.Title>
          <CartHerStyle.Navigation>
            <Link to="/" className="homelink" >
              Home
            </Link>
            <CartHerStyle.ArrowRigt src={arrowright} />
            <Link to="/comparsion" className="shoplink" >
            Cart
            </Link>
          </CartHerStyle.Navigation>
        </CartHerStyle.Wrapper>
      </CartHerStyle.Container>
    </CartHerStyle>
  );
};

export default CartHer;
