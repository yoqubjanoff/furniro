import React, { useState } from "react";
import { ViewHerStyle } from "./style";
import view1 from "../../../assets/images/view1.png";
import view2 from "../../../assets/images/view2.jpg";
import view3 from "../../../assets/images/view3.jpg";
import view4 from "../../../assets/images/view4.jpg";
import view5 from "../../../assets/images/view5.png";
import star from "../../../assets/icons/star.png";
import Button from "../../Button/Button";
import facebook from "../../../assets/icons/facebook.svg";
import linkedin from "../../../assets/icons/linkedin.svg";
import twitter from "../../../assets/icons/twitter.svg";
import { Link } from "react-router-dom";

const ViewHer = () => {
  const [activeButton, setActiveButton] = useState(1);
  const [selectedColor, setSelectedColor] = useState(null);

  const handlePagination = (pageNumber) => {
    setActiveButton(pageNumber);
  };
  const handleColorChange = (color) => {
    setSelectedColor(color);
  };
  const [count, setCount] = useState(1);

  const handleDecrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleIncrease = () => {
    setCount(count + 1);
  };

  return (
    <ViewHerStyle>
      <ViewHerStyle.Container>
        <ViewHerStyle.Wrapp>
          <ViewHerStyle.RightBox>
            <ViewHerStyle.LittleBox>
              <ViewHerStyle.LittleImgs src={view1} />
              <ViewHerStyle.LittleImgs src={view2} />
              <ViewHerStyle.LittleImgs src={view3} />
              <ViewHerStyle.LittleImgs src={view4} />
            </ViewHerStyle.LittleBox>
            <ViewHerStyle.MainImgBox>
              <ViewHerStyle.MainImg src={view5} />
            </ViewHerStyle.MainImgBox>
          </ViewHerStyle.RightBox>
          <ViewHerStyle.LeftBox>
            <ViewHerStyle.LeftTopbox>
              <ViewHerStyle.Title>Asgaard sofa</ViewHerStyle.Title>
              <ViewHerStyle.Price>Rs. 250,000.00 </ViewHerStyle.Price>
              <ViewHerStyle.StarBox>
                <ViewHerStyle.Star src={star} />
                <ViewHerStyle.Review>5 Customer Review</ViewHerStyle.Review>
              </ViewHerStyle.StarBox>
              <ViewHerStyle.LeftDesc>
                Setting the bar as one of the loudest speakers in its class, the
                Kilburn is a compact, stout-hearted hero with a well-balanced
                audio which boasts a clear midrange and extended highs for a
                sound.
              </ViewHerStyle.LeftDesc>
              <ViewHerStyle.Info>Size</ViewHerStyle.Info>
              <ViewHerStyle.BtnSizeBox>
                <Button
                  text={"L"}
                  backgroundcolor={activeButton === 1 ? "#B88E2F" : "#F9F1E7"}
                  color={activeButton === 1 ? "#FFFFFF" : "#000000"}
                  width={"30px"}
                  allpadding={"5px 12px"}
                  borderradius={"5px"}
                  onClick={() => handlePagination(1)}
                />
                <Button
                  text={"L"}
                  backgroundcolor={activeButton === 2 ? "#B88E2F" : "#F9F1E7"}
                  color={activeButton === 2 ? "#FFFFFF" : "#000000"}
                  width={"30px"}
                  allpadding={"5px 7px"}
                  borderradius={"5px"}
                  onClick={() => handlePagination(2)}
                />
                <Button
                  text={"XL"}
                  backgroundcolor={activeButton === 3 ? "#B88E2F" : "#F9F1E7"}
                  color={activeButton === 3 ? "#FFFFFF" : "#000000"}
                  width={"30px"}
                  allpadding={"5px 7px"}
                  borderradius={"5px"}
                  onClick={() => handlePagination(3)}
                />
              </ViewHerStyle.BtnSizeBox>
              <ViewHerStyle.Info>Color</ViewHerStyle.Info>
              <ViewHerStyle.ColorBox>
                <ViewHerStyle.Label1
                  htmlFor="color1"
                  id="color1"
                  checked={selectedColor === "color1"}
                  onClick={() => handleColorChange("color1")}
                >
                  <ViewHerStyle.ColorInput1 type="radio" id="color1" />
                </ViewHerStyle.Label1>

                <ViewHerStyle.Label2
                  htmlFor="color2"
                  id="color2"
                  checked={selectedColor === "color2"}
                  onClick={() => handleColorChange("color2")}
                >
                  <ViewHerStyle.ColorInput2 type="radio" id="color2" />
                </ViewHerStyle.Label2>

                <ViewHerStyle.Label3
                  htmlFor="color3"
                  id="color3"
                  checked={selectedColor === "color3"}
                  onClick={() => handleColorChange("color3")}
                >
                  <ViewHerStyle.ColorInput3 type="radio" id="color3" />
                </ViewHerStyle.Label3>
              </ViewHerStyle.ColorBox>
              <ViewHerStyle.ButtonsBox>
                <ViewHerStyle.AddBox>
                  <Button text={"-"} width={"9px"} onClick={handleDecrease} />
                  <span>{count}</span>
                  <Button text={"+"} width={"11px"} onClick={handleIncrease} />
                </ViewHerStyle.AddBox>
                <Button
                  text={"Add To Cart"}
                  allpadding={"17px 48px"}
                  width={"215px"}
                  border={"1px solid #000"}
                  borderradius={"15px"}
                />
                <Button
                  text={"+ Compare"}
                  allpadding={"17px 48px"}
                  width={"215px"}
                  border={"1px solid #000"}
                  borderradius={"15px"}
                />
              </ViewHerStyle.ButtonsBox>
            </ViewHerStyle.LeftTopbox>
            <ViewHerStyle.LeftInfoBox>
              <ViewHerStyle.InfoRow>
                <ViewHerStyle.InfoDesc>SKU</ViewHerStyle.InfoDesc>
                <ViewHerStyle.InfoDesc>Category</ViewHerStyle.InfoDesc>
                <ViewHerStyle.InfoDesc>Tags</ViewHerStyle.InfoDesc>
                <ViewHerStyle.InfoDesc>Share</ViewHerStyle.InfoDesc>
              </ViewHerStyle.InfoRow>
              <ViewHerStyle.InfoRow>
                <ViewHerStyle.InfoDesc>: SS001</ViewHerStyle.InfoDesc>
                <ViewHerStyle.InfoDesc>: Sofas</ViewHerStyle.InfoDesc>
                <ViewHerStyle.InfoDesc>
                  : Sofa, Chair, Home, Shop
                </ViewHerStyle.InfoDesc>
                <ViewHerStyle.InfoDesc>
                  :
                  <div className="iconbox">
                  <Link to="https://t.me/SlaveOfAllah91">
                    <img className="linkView" src={facebook} alt="social icon" />
                  </Link>
                  <Link to="https://www.linkedin.com/feed/">
                    <img className="linkView" src={linkedin} alt="social icon" />
                  </Link>
                  <Link to="https://www.linkedin.com/feed/">
                    <img className="linkView" src={twitter} alt="social icon" />
                  </Link>
                  </div>
                </ViewHerStyle.InfoDesc>
              </ViewHerStyle.InfoRow>
            </ViewHerStyle.LeftInfoBox>
          </ViewHerStyle.LeftBox>
        </ViewHerStyle.Wrapp>
      </ViewHerStyle.Container>
    </ViewHerStyle>
  );
};

export default ViewHer;
