import styled from "styled-components";

export const FooterStyle = styled.footer`
  width: 100%;
  padding: 48px 0 38px 0;
  border-top: 1px solid #9f9f9f;
`;
FooterStyle.Container = styled.div`
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
`;

FooterStyle.Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

//! TOP BOX
FooterStyle.TopBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #d9d9d9;
  padding-bottom: 48px;
`;

FooterStyle.FirstBox = styled.div`
  width: 100%;
  max-width: 285px;
`;
FooterStyle.FooterTitle = styled.h3`
  color: #000;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 50px;
`;
FooterStyle.Adress = styled.address`
  width: 100%;
  color: #9f9f9f;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

FooterStyle.SecondBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 66px;
`;
FooterStyle.SecondBoxTitle = styled.h4`
  color: #9f9f9f;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 55px;
`;
FooterStyle.FooterLink = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 46px;
  .footer-link {
    color: #000;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

FooterStyle.ThrethsBox = styled.div`
  .footer-link {
    color: #000;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;
FooterStyle.Help = styled.h4`
  color: #9f9f9f;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 55px;
`;
FooterStyle.ThrethLink = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 46px;
`;

FooterStyle.FourthBox = styled.div`
  width: 100%;
  max-width: 286px;
`;
FooterStyle.FourthBoxTitle = styled.h4`
  color: #9f9f9f;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 55px;
`;
FooterStyle.FourthInputBox = styled.div`
  display: flex;
  gap: 11px;
`;

FooterStyle.FourthInput = styled.input`
  width: 200px;
  border: none;
  border-bottom: 1px solid #000;
  outline: none;
  &::placeholder {
    color: #9f9f9f;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
FooterStyle.FourthButton = styled.button`
  width: 80px;
  border: none;
  background-color: transparent;
  border-bottom: 1px solid #000;
  color: #000;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

//! BOTTOM BOX
FooterStyle.BottomBox = styled.div`
  padding: 38px 0 0 0;
`;
FooterStyle.DescBottom = styled.h4`
  color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
