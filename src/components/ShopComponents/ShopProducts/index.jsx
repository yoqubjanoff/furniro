import React, { useState } from "react";
import { ShopProStyle } from "./style";
import ProductItem from "../../ProductItem/ProductItem";
import stul from "../../../assets/images/stul.svg";
import divan from "../../../assets/images/divan.svg";
import mehmonhona from "../../../assets/images/mehmonhona.svg";
import svetilnik from "../../../assets/images/swetilnik.svg";
import damolish from "../../../assets/images/damolish.svg";
import damolish2 from "../../../assets/images/damolish2.svg";
import divan2 from "../../../assets/images/divan2.svg";
import our1 from "../../../assets/images/our1.svg";
import Button from "../../Button/Button";

const ShopProducts = () => {
  const [activeButton, setActiveButton] = useState(1);

  const handlePagination = (pageNumber) => {
    setActiveButton(pageNumber);
  };
  
  return (
    <ShopProStyle>
      <ShopProStyle.Container>
        <ShopProStyle.Wrap>
          <ShopProStyle.Top>
            <ProductItem
              imageSrc={our1}
              title={"Syltherine"}
              description={"Stylish cafe chair"}
              mainPrice={"Rp 2.500.000"}
              oldPrice={"Rp 3.500.000"}
              discount={"-30%"}
            />
            <ProductItem
              imageSrc={stul}
              title={"Leviosa"}
              description={"Stylish cafe chair"}
              mainPrice={"Rp 2.500.000"}
            />
            <ProductItem
              imageSrc={divan}
              title={"Lolito"}
              description={"Luxury big sofa"}
              mainPrice={"Rp 7.000.000"}
              oldPrice={"Rp 14.000.000"}
              discount={"-50%"}
            />
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
            <ProductItem
              imageSrc={divan2}
              title={"Pingky"}
              description={"Cute bed set"}
              mainPrice={"Rp 7.000.000"}
              discount={"New"}
            />
            <ProductItem
              imageSrc={our1}
              title={"Syltherine"}
              description={"Stylish cafe chair"}
              mainPrice={"Rp 2.500.000"}
              oldPrice={"Rp 3.500.000"}
              discount={"-30%"}
            />
            <ProductItem
              imageSrc={stul}
              title={"Leviosa"}
              description={"Stylish cafe chair"}
              mainPrice={"Rp 2.500.000"}
            />
            <ProductItem
              imageSrc={divan}
              title={"Lolito"}
              description={"Luxury big sofa"}
              mainPrice={"Rp 7.000.000"}
              oldPrice={"Rp 14.000.000"}
              discount={"-50%"}
            />
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
            <ProductItem
              imageSrc={divan2}
              title={"Pingky"}
              description={"Cute bed set"}
              mainPrice={"Rp 7.000.000"}
              discount={"New"}
            />
          </ShopProStyle.Top>
          <ShopProStyle.Bottom>
            <Button
              text="1"
              backgroundcolor={activeButton === 1 ? "#B88E2F" : "#F9F1E7"}
              color={activeButton === 1 ? "#FFFFFF" : "#000000"}
              width="60px"
              height="60px"
              allpadding="12px 26px"
              borderradius="10px"
              onClick={() => handlePagination(1)}
            />
            <Button
              text="2"
              backgroundcolor={activeButton === 2 ? "#B88E2F" : "#F9F1E7"}
              color={activeButton === 2 ? "#FFFFFF" : "#000000"}
              width="60px"
              height="60px"
              allpadding="12px 26px"
              borderradius="10px"
              onClick={() => handlePagination(2)}
            />
            <Button
              text="3"
              backgroundcolor={activeButton === 3 ? "#B88E2F" : "#F9F1E7"}
              color={activeButton === 3 ? "#FFFFFF" : "#000000"}
              width="60px"
              height="60px"
              allpadding="12px 26px"
              borderradius="10px"
              onClick={() => handlePagination(3)}
            />
            <Button
              text="Next"
              backgroundcolor={activeButton === "Next" ? "#B88E2F" : "#F9F1E7"}
              color={activeButton === "Next" ? "#FFFFFF" : "#000000"}
              borderradius="10px"
              onClick={() => handlePagination("Next")}
            />
          </ShopProStyle.Bottom>
        </ShopProStyle.Wrap>
      </ShopProStyle.Container>
    </ShopProStyle>
  );
};

export default ShopProducts;
