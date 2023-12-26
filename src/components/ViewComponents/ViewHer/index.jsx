import React, { useState } from "react";
import { ViewHerStyle } from "./style";
import view1 from "../../../assets/images/view1.png";
import view2 from "../../../assets/images/view2.jpg";
import view3 from "../../../assets/images/view3.jpg";
import view4 from "../../../assets/images/view4.jpg";
import view5 from "../../../assets/images/view5.png";
import star from "../../../assets/icons/star.png";
import Button from "../../Button/Button";

const ViewHer = () => {
  const [activeButton, setActiveButton] = useState(1);

  const handlePagination = (pageNumber) => {
    setActiveButton(pageNumber);
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
              </ViewHerStyle.ColorBox>
            </ViewHerStyle.LeftTopbox>
          </ViewHerStyle.LeftBox>
        </ViewHerStyle.Wrapp>
      </ViewHerStyle.Container>
    </ViewHerStyle>
  );
};

export default ViewHer;
