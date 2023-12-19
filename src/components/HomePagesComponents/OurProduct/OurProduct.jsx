import React from "react";
import { OurStyle } from "./style";
import our1 from "../../../assets/images/our1.svg";
import Button from "../../Button/Button";
import stul from "../../../assets/images/stul.svg";
import divan from "../../../assets/images/divan.svg";
import mehmonhona from "../../../assets/images/mehmonhona.svg";
import svetilnik from "../../../assets/images/swetilnik.svg";
import damolish from "../../../assets/images/damolish.svg";
import damolish2 from "../../../assets/images/damolish2.svg";
import divan2 from "../../../assets/images/divan2.svg";
import ProductItem from "../../ProductItem/ProductItem";

const OurProduct = () => {
  return (
    <OurStyle>
      <OurStyle.Container>
        <OurStyle.Wrapper>
          <OurStyle.Title>Our Products</OurStyle.Title>
          <OurStyle.ImageContainer>
            <ProductItem imageSrc={our1} title={'Syltherine'} description={'Stylish cafe chair'} mainPrice={'Rp 2.500.000'} oldPrice={'Rp 3.500.000'} discount={'-30%'} />
            <ProductItem imageSrc={stul} title={'Leviosa'} description={'Stylish cafe chair'} mainPrice={'Rp 2.500.000'} />
            <ProductItem imageSrc={divan} title={'Lolito'} description={'Luxury big sofa'} mainPrice={'Rp 7.000.000'} oldPrice={'Rp 14.000.000'}  discount={'-50%'}/>
            <ProductItem imageSrc={mehmonhona} title={'Respira'} description={'Outdoor bar table and stool'} mainPrice={'Rp 500.000'} discount={'New'} />
            <ProductItem imageSrc={svetilnik} title={'Grifo'} description={'Night lamp'} mainPrice={'Rp 1.500.000'} />
            <ProductItem imageSrc={damolish} title={'Muggo'} description={'Cute bed set'} mainPrice={'Rp 1.500.000'} discount={'New'} />
            <ProductItem imageSrc={damolish2} title={'Pingky'} description={'Small mug'} mainPrice={'Rp 150.000'} discount={'-50%'} oldPrice={'Rp 14.000.000'} />
            <ProductItem imageSrc={divan2} title={'Pingky'} description={'Cute bed set'} mainPrice={'Rp 7.000.000'} discount={'New'} />
          </OurStyle.ImageContainer>
          <Button
            width="245px"
            border="1px solid #B88E2F"
            allpadding="12px 74px 12px 80px"
            text="Show More"
            allmargin="32px 0 0 0"
            color="#B88E2F"
            fontweight="600"
          />
        </OurStyle.Wrapper>
      </OurStyle.Container>
    </OurStyle>
  );
};

export default OurProduct;
