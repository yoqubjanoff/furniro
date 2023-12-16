import styled from "styled-components";

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
  .navigation:focus-within{
    transform: scale(1.1);
    font-weight: 700;
  }
`;
HeaderStyle.IconsBox = styled.div`
  display: flex;
  gap: 45px;
`;

HeaderStyle.Icons = styled.img`
  width: 28px;
  height: 28px;
`;
