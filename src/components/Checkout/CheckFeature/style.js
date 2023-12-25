import styled from "styled-components";

export const Feature = styled.section`
  padding: 100px 0;
  margin-bottom: ${({ marginbottom }) => (marginbottom ? `${marginbottom}px` : '0')};
  background-color: #faf3ea;
`;

Feature.Container = styled.div`
  width: 100%;
  max-width: 1336px;
  margin: 0 auto;
`;
Feature.Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

Feature.MiddleBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
Feature.TextBox = styled.div``;
Feature.Icon = styled.img`
  width: 60px;
`;
Feature.Tittle = styled.p`
  color: #242424;
  font-size: 25px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
`;
Feature.Desc = styled.p`
  color: #898989;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
`;
