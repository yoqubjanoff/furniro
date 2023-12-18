import styled from "styled-components";
import middleBgImg from '../../../assets/images/middlesectionImg.svg'

export const MiddleStyle = styled.section`
  padding: 44px 0;
`;

MiddleStyle.Container = styled.div`
  width: 100%;
  max-width: 1210px;
  margin: 0 auto;
`;
MiddleStyle.Wrapper = styled.div`
display: flex;
align-items: center;
gap: 42px;
`;
MiddleStyle.TextBox = styled.div``;
MiddleStyle.MiddleTitle = styled.h3``;
MiddleStyle.Desc = styled.p``;
MiddleStyle.ImageBox = styled.div`
width: 100%;
max-width: 404px;
height: 581px;
background-image: url(${middleBgImg});
background-repeat: no-repeat;
background-position: center;
`;
MiddleStyle.ImageSmallBox = styled.div``;
MiddleStyle.InnerBox = styled.div``;
MiddleStyle.InnerDesc = styled.p``;
MiddleStyle.InnerTitle = styled.p``;
