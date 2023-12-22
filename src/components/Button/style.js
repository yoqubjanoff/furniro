import styled from "styled-components";

export const MainButton = styled.button`
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "100%"};
  color: ${({ color }) => color || "#000"};
  background-color: ${({ backgroundcolor }) => backgroundcolor || "#fff"};
  border-radius: ${({ borderradius }) => borderradius || ""};
  border: ${({ border }) => border || 'none'};
  padding: ${({ allpadding }) => allpadding || "25px 72px 25px 72px"};
  margin: ${({ allmargin }) => allmargin || ""};
  font-size: ${({ fontsize }) => fontsize || "16px"};
  font-weight: ${({ fontweight }) => fontweight || "400"};
  cursor: pointer;
  font-family: Poppins;
`;
