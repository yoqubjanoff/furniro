import React from "react";
import { ProductStyle } from "./style";
import ProductItem from "../../ProductItem/ProductItem";
import mehmonhona from "../../../assets/images/mehmonhona.svg";
import svetilnik from "../../../assets/images/swetilnik.svg";
import damolish from "../../../assets/images/damolish.svg";
import damolish2 from "../../../assets/images/damolish2.svg";
import Button from "../../Button/Button";

const ViewProducts = () => {
  return (
    <ProductStyle>
      <ProductStyle.Container>
        <ProductStyle.Wrapper>
          <ProductStyle.Title>Related Products</ProductStyle.Title>
          <ProductStyle.ProductWrap>
            <ProductItem
              imageSrc={mehmonhona}
              title={"Respira"}
              description={"Outdoor bar table and stool"}
              mainPrice={"Rp 500.000"}
              discount={"New"}
            />
            <ProductItem
              imageSrc={svetilnik}
              title={"Grifo"}
              description={"Night lamp"}
              mainPrice={"Rp 1.500.000"}
            />
            <ProductItem
              imageSrc={damolish}
              title={"Muggo"}
              description={"Cute bed set"}
              mainPrice={"Rp 1.500.000"}
              discount={"New"}
            />
            <ProductItem
              imageSrc={damolish2}
              title={"Pingky"}
              description={"Small mug"}
              mainPrice={"Rp 150.000"}
              discount={"-50%"}
              oldPrice={"Rp 14.000.000"}
            />
          </ProductStyle.ProductWrap>
          <Button
            text={"Show more"}
            width={"247px"}
            color={"#B88E2F"}
            border={"1px solid #B88E2F"}
            allpadding={'12px 72px 12px 82px'}
          />
        </ProductStyle.Wrapper>
      </ProductStyle.Container>
    </ProductStyle>
  );
};

export default ViewProducts;
