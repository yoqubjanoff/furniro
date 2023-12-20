import React from "react";
import Button from "../Button/Button";
import share from "../../assets/icons/share.svg";
import share1 from "../../assets/icons/share2.svg";
import heart from "../../assets/icons/whiteHeart.svg";
import { Product } from "./style";

const ProductItem = ({
  discount,
  imageSrc,
  title,
  description,
  mainPrice,
  oldPrice,
}) => {
  return (
    <Product>
       {discount !== "New" ? (
        (discount && <Product.DiscoutBox>
            <Product.Element>{discount}</Product.Element>
          </Product.DiscoutBox>)
      ) : (
        <Product.DiscoutBox2>
          <Product.Element>{discount}</Product.Element>
        </Product.DiscoutBox2>
      )}
      <Product.MainImg src={imageSrc} />
      <Product.DescBox>
        <Product.DescTitle>{title}</Product.DescTitle>
        <Product.Desc>{description}</Product.Desc>
        <Product.PriceBox>
          <Product.MainPrice>{mainPrice}</Product.MainPrice>
          {oldPrice && <Product.OldPrice>{oldPrice}</Product.OldPrice>}
        </Product.PriceBox>
      </Product.DescBox>
      <Product.PositionBox>
        <Button
          backgroundcolor="#fff"
          width="202px"
          allpadding="12px 52px 12px 52px"
          text="Add to cart"
          color="#B88E2F"
          fontweight="600"
          height='48px'
        />
        <Product.PositionIconsBox>
          <Product.PositionTitleIconsBox>
            <Product.PositionIcon src={share} />
            <Product.PositionTitle>Share</Product.PositionTitle>
          </Product.PositionTitleIconsBox>
          <Product.PositionTitleIconsBox>
            <Product.PositionIcon src={share1} />
            <Product.PositionTitle>Compare</Product.PositionTitle>
          </Product.PositionTitleIconsBox>
          <Product.PositionTitleIconsBox>
            <Product.PositionIcon src={heart} />
            <Product.PositionTitle>Like</Product.PositionTitle>
          </Product.PositionTitleIconsBox>
        </Product.PositionIconsBox>
      </Product.PositionBox>
    </Product>
  );
};

export default ProductItem;
 