import styled from "styled-components";

export const ReadStyle = styled.section`
  padding: 80px 0;
  span {
    color: #b88e2f;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;

ReadStyle.Container = styled.div`
  width: 100%;
  max-width: 1236px;
  margin: 0 auto;
`;
ReadStyle.Wrapper = styled.div``;
ReadStyle.Title = styled.h2`
  color: #b88e2f;
  text-align: center;
  font-size: 48px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
ReadStyle.SubTitle = styled.h3`
  margin-bottom: 30px;
`;
ReadStyle.Desc = styled.div`
  color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 50px;
  position: relative;
  &:hover::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: 2px;
    background-color: #080;
  }
`;
