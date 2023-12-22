import styled from "styled-components";
import admin from "../../../assets/images/blogAdmin.png";
import calendar from "../../../assets/images/blogCalindar.png";
import wood from "../../../assets/images/blogWood.png";

export const GenericStyle = styled.div`
  width: 100%;
  max-width: 817px;
  margin-bottom: ${({ margin }) => margin || ""};
  .generic-link {
    color: #000;
    text-align: justify;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding-bottom: 12px;
    border-bottom: 1px solid #000;
  }
`;

GenericStyle.Wrapper = styled.div`
  width: 100%;
`;

GenericStyle.ImageBox = styled.div`
  width: 100%;
`;

GenericStyle.MainImage = styled.img`
  width: 100%;
`;

GenericStyle.WoodBox = styled.div`
  color: #9f9f9f;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 17px;
  margin-bottom: 19px;
`;

GenericStyle.WoodText1 = styled.span`
  position: relative;
  display: inline-block;
  margin-left: 20px;
  &::before {
    position: absolute;
    left: -27px;
    content: url(${admin});
    display: inline-block;
    width: 20px;
    height: 20px;
  }
`;

GenericStyle.WoodText2 = styled.span`
  position: relative;
  display: inline-block;
  margin-left: 66px;
  &::before {
    position: absolute;
    content: url(${calendar});
    display: inline-block;
    left: -30px;
    width: 20px;
    height: 20px;
  }
`;

GenericStyle.WoodText3 = styled.span`
  display: inline-block;
  position: relative;
  margin-left: 66px;
  &::before {
    position: absolute;
    content: url(${wood});
    display: inline-block;
    left: -33px;
    width: 20px;
    height: 20px;
  }
`;

GenericStyle.WoodTittle = styled.h4`
color: #000;
font-size: 30px;
font-style: normal;
font-weight: 500;
line-height: normal;
margin-bottom: 12px;
`;
GenericStyle.WoodDesc = styled.p`
color: #9F9F9F;
text-align: justify;
font-size: 15px;
font-style: normal;
font-weight: 400;
line-height: 150%;
margin-bottom: 30px;
 `;
