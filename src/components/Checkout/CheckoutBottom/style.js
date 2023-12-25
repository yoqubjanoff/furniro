import styled from "styled-components";

export const CheckBottomStyle = styled.section`
  width: 100%;
  padding: 98px 0 87px 0;
`;

CheckBottomStyle.Container = styled.div`
  width: 100%;
  max-width: 1244px;
  margin: 0 auto;
`;

CheckBottomStyle.Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

CheckBottomStyle.RightBox = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 608px;
  padding: 35px 79px 0 76px;
`;

CheckBottomStyle.RightItems = styled.li`
  width: 100%;
  margin-bottom: 36px;
`;

CheckBottomStyle.RightItems2 = styled.div`
  width: 100%;
  display: flex;
  gap: 31px;
`;
CheckBottomStyle.RightItems3 = styled.li`
  margin-bottom: 76px;
`;

CheckBottomStyle.RightBoxTitle = styled.h4`
  color: #000;
  font-size: 36px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 36px;
`;

CheckBottomStyle.LeftBox = styled.div`
  width: 100%;
  max-width: 608px;
  padding: 87px 37px 86px 38px;
`;
CheckBottomStyle.TopBox = styled.div`
  width: 100%;
  border-bottom: 1px solid #d9d9d9;
`;
CheckBottomStyle.TextBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 22px;
`;
CheckBottomStyle.SubTitle = styled.p`
  color: #000;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
CheckBottomStyle.NameCountBox = styled.div`
  span {
    margin-right: 11px;
  }
`;
CheckBottomStyle.Price = styled.span`
  color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
CheckBottomStyle.Price2 = styled.span`
  color: #b88e2f;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
CheckBottomStyle.SubTitle2 = styled.p`
  color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 33px;
`;
CheckBottomStyle.Name = styled.span`
  color: #9f9f9f;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-right: 11px;
`;
CheckBottomStyle.BottomBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 22px 0 0 0;
`;
CheckBottomStyle.CheckInputBox = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 11px;
`;
CheckBottomStyle.InputTitle = styled.p`
  color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

CheckBottomStyle.CheckInput1 = styled.input`
  appearance: none;
  width: 14px;
  height: 14px;
  border: 1px solid #9f9f9f;
  border-radius: 50px;
  outline: none;
  cursor: pointer;

  &::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background-color: #fff;
    border-radius: 50px;
    transition: background-color 0.3s;
  }

  &:checked::before {
    background-color: #000;
  }
`;

CheckBottomStyle.InputTitle2 = styled.p`
  color: #9f9f9f;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

CheckBottomStyle.Desc = styled.p`
  color: #9f9f9f;
  text-align: justify;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  margin-bottom: 25px;
`;

CheckBottomStyle.Desc2 = styled.p`
  color: #000;
  text-align: justify;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  margin-bottom: 39px;
`;
