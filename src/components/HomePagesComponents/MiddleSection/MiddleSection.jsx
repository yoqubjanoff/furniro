import React from "react";
import Button from "../../Button/Button";
import { MiddleStyle } from "./style";

const MiddleSection = () => {
  return (
    <MiddleStyle>
      <MiddleStyle.Container>
        <MiddleStyle.Wrapper>
          <MiddleStyle.TextBox>
            <MiddleStyle.MiddleTitle>
              50+ Beautiful rooms inspiration
            </MiddleStyle.MiddleTitle>
            <MiddleStyle.Desc>
              Our designer already made a lot of beautiful prototipe of rooms
              that inspire you
            </MiddleStyle.Desc>
            <Button
              backgroundcolor="#B88E2F"
              color="#fff"
              text="Explore More"
              width='176px'
              allpadding='12px 36px'
            />
          </MiddleStyle.TextBox>
          <MiddleStyle.ImageBox>
            
          </MiddleStyle.ImageBox>
        </MiddleStyle.Wrapper>
      </MiddleStyle.Container>
    </MiddleStyle>
  );
};

export default MiddleSection;
