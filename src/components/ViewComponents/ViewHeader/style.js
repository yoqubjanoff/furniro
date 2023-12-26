import styled from "styled-components";

export const ViewStyle = styled.section`
  padding: 37px 0 39px 0;
  background: #f9f1e7;
  .link1 {
    color: #9f9f9f;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-right: 14px;
  }
  .link2 {
    color: #9f9f9f;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-right: 21px;
    margin-left: 24px;
  }
`;
ViewStyle.Container = styled.div`
  width: 100%;
  max-width: 1241px;
  margin: 0 auto;
`;

ViewStyle.Wrap = styled.div`
  display: flex;
  align-items: center;
`;
ViewStyle.Arrow1 = styled.img`
  transform: rotate(270deg);
`;
ViewStyle.Arrow2 = styled.img`
  transform: rotate(270deg);
  margin-right: 25px;
`;
ViewStyle.Row = styled.span`
  display: inline-block;
  background: #9f9f9f;
  width: 2px;
  height: 37px;
`;

ViewStyle.Name = styled.p`
  color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-left: 34px;
`;
