import styled from "styled-components";

export const  Product = styled.div`
  position: relative;
  width: 100%;
  max-width: 287px;
  background-color: #f4f5f7;
`;
Product.DiscoutBox = styled.div`
position: absolute;
display: flex;
justify-content: center;
align-items: center;
right: 24px;
top: 24px;
width: 48px;
height: 48px;
border-radius: 50px;
background-color: #E97171;
`;
Product.DiscoutBox2 = styled.div`
position: absolute;
display: flex;
justify-content: center;
align-items: center;
right: 24px;
top: 24px;
width: 48px;
height: 48px;
border-radius: 50px;
background-color: #2EC1AC;
`;

Product.Element= styled.p`
color:  #FFF;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 150%;
`;

Product.MainImg = styled.img`
  width: 100%;
  height: 301px;
`;
Product.DescBox = styled.div`
  padding: 16px 15px 33px 16px;
`;
Product.DescTitle = styled.h4`
  color: #3a3a3a;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  margin-bottom: 8px;
`;
Product.Desc = styled.p`
  color: #898989;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  margin-bottom: 8px;
`;
Product.PriceBox = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;
Product.MainPrice = styled.span`
  color: #3a3a3a;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
`;

Product.OldPrice = styled.span`
  display: inline-block;
  color: #b0b0b0;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  text-decoration: line-through;
`;

Product.PositionBox = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  width: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0;
  background: #3a3a3a;
  transition: 0.3s ease-out;
  ${Product}:hover & {
    opacity: 0.72;
  }
`;

Product.PositionIconsBox = styled.div`
  display: flex;
  gap: 20px;
`;
Product.PositionTitleIconsBox = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
`;
Product.PositionIcon = styled.img`
  width: 16px;
`;
Product.PositionTitle = styled.p`
  color: #fff;
  font-size: 16px;
  font-style: normal;
  line-height: 150%;
`;
