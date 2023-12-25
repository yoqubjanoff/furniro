import styled from "styled-components";
import shopBg from "../../../assets/images/aboutHerobg.jpg";

export const CheckHerStyle = styled.section`
  background-image: url(${shopBg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding: 121px 0 97px 0;
`;

CheckHerStyle.Container = styled.div`
  width: 100%;
  max-width: 1236px;
  margin: 0 auto;
`;
CheckHerStyle.Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
CheckHerStyle.Title = styled.h2`
  color: #000;
  font-size: 48px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
CheckHerStyle.Navigation = styled.div`
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
CheckHerStyle.ArrowRigt = styled.img`
width: 20px;
height: 20px;
`;
CheckHerStyle.Logotip = styled.img`
width: 77px;
height: 77px;
`;
