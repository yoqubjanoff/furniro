import styled from "styled-components";
import x from "../../assets/icons/X.png";

import { Drawer } from "antd";

export const HeaderStyle = styled.header`
  padding: 33.5px 0 34.5px 0;
`;
HeaderStyle.Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

HeaderStyle.Logo = styled.img`
  width: 168px;
`;

HeaderStyle.Nav = styled.nav`
  display: flex;
  gap: 75px;

  .navigation {
    color: #000;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    transition: 0.2s ease-out;
  }
  .navigation:focus-within {
    transform: scale(1.1);
    font-weight: 700;
  }
`;
HeaderStyle.IconsBox = styled.div`
  display: flex;
  gap: 45px;

  .iconLink {
  }
`;

HeaderStyle.Icons = styled.img`
  width: 28px;
  height: 28px;
  cursor: pointer;
`;
export const CustomDrawer = styled(Drawer)`
  && {
    height: 200px;
    box-shadow: none !important;
  }

  .ant-drawer-content-wrapper {
    box-shadow: none !important;
  }

  .ant-drawer-title {
    color: #000;
    font-family: "Poppins";
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;

export const CardWrapper = styled.div``;
CardWrapper.TopBox = styled.div`
  height: 100%;
`;
CardWrapper.TopMiddleBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 40px;
`;
CardWrapper.TopImgBox = styled.div`
  width: 105px;
  height: 105px;
  border-radius: 10px;
  background: #d9d9d9;
`;
CardWrapper.TopImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;
CardWrapper.TopTextbox = styled.div``;
CardWrapper.TopTitle = styled.p`
  color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 11px;
`;
CardWrapper.TopCount = styled.div``;
CardWrapper.TopNum = styled.span`
  display: inline-block;
  position: relative;
  color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  &::after {
    content: url(${x});
    position: absolute;
    left: 22px;
    top: -1px;
  }
`;
CardWrapper.TopPrice = styled.span`
  display: inline-block;
  color: #b88e2f;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-left: 38px;
`;
CardWrapper.TopDelet = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

CardWrapper.BottomBox = styled.div``;
CardWrapper.BottomItogBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-bottom: 23px;
  border-bottom: 1px solid #d9d9d9;
`;
CardWrapper.ItogDesc = styled.p`
  color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
CardWrapper.ItogPrice = styled.p`
color: #B88E2F;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;`;
CardWrapper.BottomBoxButons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-top: 26px;
`;
