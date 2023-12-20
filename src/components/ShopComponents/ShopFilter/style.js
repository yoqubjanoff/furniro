import styled from "styled-components";

export const ShopFilterStyle = styled.section`
  padding: 22px 0;
  background-color: #f9f1e7;
`;
ShopFilterStyle.Container = styled.div`
  width: 100%;
  max-width: 1236px;
  margin: 0 auto;
`;
ShopFilterStyle.Wrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

//! FIRST BOX
ShopFilterStyle.FirstBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;
ShopFilterStyle.IconBox = styled.div`
  display: flex;
  align-items: center;
  padding: 0 30px 0 0;
  border-right: 1px solid #9f9f9f;
`;
ShopFilterStyle.Icon1 = styled.img`
  margin-right: 12px;
`;
ShopFilterStyle.Desc1 = styled.p`
  color: #000;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-right: 23px;
`;
ShopFilterStyle.Icon2 = styled.img`
  margin-right: 24px;
`;
ShopFilterStyle.Icon3 = styled.img``;
ShopFilterStyle.Desc2 = styled.p`
  color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-left: 34px;
`;

//! SECOND BOX
ShopFilterStyle.SecondBox = styled.div`
  display: flex;
  align-items: center;
`;
ShopFilterStyle.Show = styled.p`
  color: #000;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-right: 17px;
`;
ShopFilterStyle.ShowNum = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 55px;
  height: 55px;
  background-color: #fff;
  margin-right: 29px;
  color: #9f9f9f;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
ShopFilterStyle.Label = styled.p`
  width: 84px;
  color: #000;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-right: 17px;
`;
