import styled from "styled-components";

export const MainButton = styled.div`
  width: ${({ width }) => width || "100%"};
  color: ${({ color }) => color || "#000"};
  background-color: ${({ backgroundColor }) => backgroundColor || "#fff"};
  border-radius: ${({ borderRs }) => borderRs || ""};
  border: ${({ border }) => border || ""};
  padding: ${({ allPadding }) => allPadding || "25px 72px 25px 72px"};
  margin: ${({ allMargin }) => allMargin || ""};
  font-size: ${({fontSz}) => fontSz || "16px"};
  font-weight: ${({fontWe}) => fontWe || "400"};
  cursor: pointer;
`;
