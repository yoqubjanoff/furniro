import React from "react";
import { RangeStyle } from "./style";
import rangeFistImg from '../../../assets/images/rangefirstImage.svg'
import rangeSecondImg from '../../../assets/images/rangefirstSection.svg'
import rangeThreeImg from '../../../assets/images/rangeThreeImage.svg'

const RangeSection = () => {
  return (
    <RangeStyle>
      <RangeStyle.Container>
        <RangeStyle.Wrapper>
          <RangeStyle.TextBox>
            <RangeStyle.Tittle>Browse The Range</RangeStyle.Tittle>
            <RangeStyle.Desc>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </RangeStyle.Desc>
          </RangeStyle.TextBox>
          <RangeStyle.ImageWrap >
            <RangeStyle.ImageTextWrap>
                <RangeStyle.Image  src={rangeFistImg}/>
                <RangeStyle.ImageDesc>Dining</RangeStyle.ImageDesc>
            </RangeStyle.ImageTextWrap>
            <RangeStyle.ImageTextWrap>
                <RangeStyle.Image  src={rangeSecondImg}/>
                <RangeStyle.ImageDesc>Dining</RangeStyle.ImageDesc>
            </RangeStyle.ImageTextWrap>
            <RangeStyle.ImageTextWrap>
                <RangeStyle.Image  src={rangeThreeImg}/>
                <RangeStyle.ImageDesc>Dining</RangeStyle.ImageDesc>
            </RangeStyle.ImageTextWrap>
          </RangeStyle.ImageWrap>
        </RangeStyle.Wrapper>
      </RangeStyle.Container>
    </RangeStyle>
  );
};

export default RangeSection;
