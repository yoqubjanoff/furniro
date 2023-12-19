import styled from "styled-components";
import bgimage from "../../../assets/images/furniturBgImage.png";

export const FurnitureStyle = styled.section`
  padding: 67px 0 744px 0;
  background-image: url(${bgimage});
  background-repeat: no-repeat;
  background-position: calc(50% - -45px) calc(50% - -25px) ;

`;

FurnitureStyle.Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1236px;
  margin: 0 auto;
`;

FurnitureStyle.TextBox = styled.div``;
FurnitureStyle.Title = styled.h3`
  color: #3a3a3a;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
`;
FurnitureStyle.Desc = styled.p`
  color: #616161;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
`;
