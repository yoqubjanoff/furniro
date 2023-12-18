import styled from "styled-components";

export const OurStyle = styled.section``;
OurStyle.Container = styled.div`
  width: 100%;
  max-width: 1236px;
  margin: 0 auto;
`;
OurStyle.Wrapper = styled.div`
display: flex;
align-items: center;
flex-direction: column;
`;

OurStyle.Title = styled.h3`
  color: #3a3a3a;
  text-align: center;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  margin-bottom: 32px;
`;

OurStyle.ImageContainer = styled.div`
display: flex;
flex-wrap: wrap;
gap: 32px;
`;

OurStyle.ImageTitleWrap = styled.div`
  position: relative;
  width: 100%;
  max-width: 285px;
  background-color: #f4f5f7;
`;
OurStyle.DiscoutBox = styled.div`
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
OurStyle.DiscoutBox2 = styled.div`
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

OurStyle.Element= styled.p`
color:  #FFF;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 150%;
`;

OurStyle.MainImg = styled.img`
  width: 100%;
  height: 301px;
`;
OurStyle.DescBox = styled.div`
  padding: 16px 15px 33px 16px;
`;
OurStyle.DescTitle = styled.h4`
  color: #3a3a3a;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  margin-bottom: 8px;
`;
OurStyle.Desc = styled.p`
  color: #898989;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  margin-bottom: 8px;
`;
OurStyle.PriceBox = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;
OurStyle.MainPrice = styled.span`
  color: #3a3a3a;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
`;

OurStyle.OldPrice = styled.span`
  display: inline-block;
  color: #b0b0b0;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  text-decoration: line-through;
`;

OurStyle.PositionBox = styled.div`
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
  ${OurStyle.ImageTitleWrap}:hover & {
    opacity: 0.72;
  }
`;

OurStyle.PositionIconsBox = styled.div`
  display: flex;
  gap: 20px;
`;
OurStyle.PositionTitleIconsBox = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
`;
OurStyle.PositionIcon = styled.img`
  width: 16px;
`;
OurStyle.PositionTitle = styled.p`
  color: #fff;
  font-size: 16px;
  font-style: normal;
  line-height: 150%;
`;
