import React from "react";
import { Hero } from "./style";
import Button from "../Button/Button";

const HeroSection = () => {
  return (
    <Hero>
      <div className="hero-container">
        <Hero.Wrapper>
          <Hero.TextBox>
            <Hero.LittleTittle>New Arrival</Hero.LittleTittle>
            <Hero.Tittle>Discover Our New Collection</Hero.Tittle>
            <Hero.Desc>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis.
            </Hero.Desc>
            <Button
            backgroundColor='#B88E2F' 
            fontWe='700' 
            text='BUY NOW' 
            color="#fff"
            allPadding='25px 72px'
            width='222px'
            />
          </Hero.TextBox>
        </Hero.Wrapper>
      </div>
    </Hero>
  );
};

export default HeroSection;
