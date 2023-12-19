import styled from "styled-components";
import heroBg from "../../../assets/images/heroBgimage.jpg";

export const Hero = styled.section`
  width: 100%;
  padding: 157px 0 116px 0;
  background-image: url(${heroBg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: calc(50% - 0px ) calc(50% - 78px);
  

  .hero-container {
    margin: 0 auto;
    width: 100%;
    max-width: 1404px;
  }
`;

Hero.Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;
Hero.TextBox = styled.div`
  width: 100%;
  max-width: 654px;
  border-radius: 10px;
  background: #fff3e3;
  padding: 62px 56px 37px 39px;
`;
Hero.LittleTittle = styled.p`
  color: #333;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 3px;
  margin-bottom: 5px;
`;
Hero.Tittle = styled.h1`
  width: 100%;
  max-width: 458px;
  color: #b88e2f;
  font-size: 52px;
  font-style: normal;
  font-weight: 700;
  line-height: 65px;
  margin-bottom: 17px;
`;
Hero.Desc = styled.p`
  width: 100%;
  max-width: 546px;
  color: #333;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  margin-bottom: 46px;
`;
