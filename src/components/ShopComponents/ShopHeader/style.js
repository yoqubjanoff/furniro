import styled from "styled-components";
import shopBg from "../../../assets/images/aboutHerobg.jpg";

export const ShopHeaderStyle = styled.section`
  background-image: url(${shopBg});
  padding: 121px 0 97px 0;
`;

ShopHeaderStyle.Container = styled.div`
  width: 100%;
  max-width: 1236px;
  margin: 0 auto;
`;
ShopHeaderStyle.Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
ShopHeaderStyle.Title = styled.h2`
  color: #000;
  font-size: 48px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
ShopHeaderStyle.Navigation = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  .homelink {
    color: #000;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .shoplink {
    color: #000;
    font-size: 15px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
  }
`;
ShopHeaderStyle.ArrowRigt = styled.img``;
