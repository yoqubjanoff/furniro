import styled from "styled-components";

export const TextStyle = styled.section`
  width: 100%;
  padding: 48px 0 66px 0;
  border-bottom: 1px solid #D9D9D9;
`;
TextStyle.Container = styled.div`
  width: 100%;
  max-width: 1241px;
  margin: 0 auto;
`;

TextStyle.Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
TextStyle.TitleBox = styled.div`
  display: flex;
  align-items: center;
  gap: 52px;
  margin-bottom: 37px;
`;
TextStyle.Title = styled.h4`
  color: #000;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
TextStyle.ReTitle = styled.p`
  color: #9f9f9f;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
TextStyle.Redesc = styled.p`
  width: 100%;
  max-width: 1026px;
  color: #9f9f9f;
  text-align: justify;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 36px;
`;

TextStyle.ImgBox = styled.div`
  display: flex;
  width: 100%;
  gap: 30px;
`;
TextStyle.Img = styled.img`
  width: 100%;
  max-width: 605px;
  height: 348px;
`;
