import React from "react";
import tohpey from '../../../assets/icons/trofey.png'
import nishon from '../../../assets/icons/nishon.png'
import handle from '../../../assets/icons/shipping.png'
import admin from '../../../assets/icons/colcenter.png'
import { Feature } from "../ShopFeature/style";

const Place = ({marginbottom}) => {
  return (
    <Feature marginbottom={marginbottom}>
      <Feature.Container>
        <Feature.Wrapper>
          <Feature.MiddleBox>
            <Feature.Icon src={tohpey}/>
            <Feature.TextBox>
              <Feature.Tittle>High Quality</Feature.Tittle>
              <Feature.Desc >crafted from top materials</Feature.Desc>
            </Feature.TextBox>
          </Feature.MiddleBox>
          <Feature.MiddleBox>
            <Feature.Icon src={nishon}/>
            <Feature.TextBox>
              <Feature.Tittle>Warranty Protection</Feature.Tittle>
              <Feature.Desc >Over 2 years</Feature.Desc>
            </Feature.TextBox>
          </Feature.MiddleBox>
          <Feature.MiddleBox>
          <Feature.Icon src={handle}/>
            <Feature.TextBox>
              <Feature.Tittle>Free Shipping</Feature.Tittle>
              <Feature.Desc >Order over 150 $</Feature.Desc>
            </Feature.TextBox>
          </Feature.MiddleBox>
          <Feature.MiddleBox>
          <Feature.Icon src={admin}/>
            <Feature.TextBox>
              <Feature.Tittle>24 / 7 Support</Feature.Tittle>
              <Feature.Desc >Dedicated support</Feature.Desc>
            </Feature.TextBox>
          </Feature.MiddleBox>
        </Feature.Wrapper>
      </Feature.Container>
    </Feature>
  );
};

export default Place;
