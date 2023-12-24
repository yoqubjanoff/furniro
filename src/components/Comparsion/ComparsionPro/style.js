import styled from "styled-components";
import arrow from '../../../assets/icons/selectarrow.png'

export const ComparsionproStyle = styled.section`
  padding: 34px 0 59px 0;
`;

ComparsionproStyle.Container = styled.div`
  width: 100%;
  max-width: 1216px;
  margin: 0 auto;
`;
ComparsionproStyle.Wrapper = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

ComparsionproStyle.FirstBox = styled.li`
  width: 100%;
  max-width: 223px;
  .comparsionlink {
    width: 115px;
    color: #727272;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    padding-bottom: 3px;
    border-bottom: 1px solid #727272;
  }
`;
ComparsionproStyle.FirstBoxTitle = styled.h3`
  color: #000;
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: 126.5%;
  margin-bottom: 23px;
`;

ComparsionproStyle.SecondBox = styled.li`
  width: 100%;
  max-width: 280px;
`;
ComparsionproStyle.ImgBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 177px;
  max-width: 280px;
  border-radius: 10px;
  background-color: #f9f1e7;
  margin-bottom: 18px;
  .productimg {
    width: 100%;
    height: 157px;
  }
`;
ComparsionproStyle.Name = styled.p`
  color: #000;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 126.5%;
  margin-bottom: 6px;
`;
ComparsionproStyle.Price = styled.span`
  color: #000;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 7px;
`;
ComparsionproStyle.ReviewBox = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
  .star {
    margin-right: 6px;
  }
`;
ComparsionproStyle.Baho = styled.span`
  margin-right: 4px;
`;
ComparsionproStyle.ContView = styled.p`
  padding-left: 10px;
  border-left: 1px solid #9f9f9f;
  color: #9f9f9f;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

ComparsionproStyle.FourthBox = styled.li`
  width: 100%;
  max-width: 242px;
`;
ComparsionproStyle.FourthBoxTitle = styled.h3`
  color: #000;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 126.5%;
  margin-bottom: 12px;
`;
ComparsionproStyle.Select = styled.select`
border-radius: 6px;
background: #B88E2F;
border: none;
color: #FFF;
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: 126.5%;
padding: 10px 85px 10px 18px;
appearance: none;
background-image: url(${arrow});
background-repeat: no-repeat;
background-position: calc(50% - -73px);
outline: none;
`;
