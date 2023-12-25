import styled from "styled-components";

export const Container = styled.div`
  width: ${({ width }) => (width ? width : "100%")};
  height: ${({ height }) => (height ? height : "")};
  border-radius: ${({ br }) => (br ? br : "12px")};
  outline: none;
  display: flex;
  border: ${({ borderinput }) => borderinput || "1px solid #9F9F9F;"};
  padding: ${({ padding }) => (padding ? padding : "0")};
  background-color: ${({ bg }) => (bg ? bg : "inherit")};
  align-items: center;
  position: relative;
  background: #fff;
  border: ${({ error, active }) =>
    error
      ? "1px solid #FF5959"
      : active
      ? "1px solid rgba(13, 59, 63, 0.10)"
      : ""};
`;

Container.Wrap = styled.div`
  width: ${({ width }) => (width ? width : "100%")};
  margin: ${({ margin }) => margin && margin};
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
  transition: 0.4s all;
  position: relative;
`;
Container.Header = styled.div`
  color: ${({ hc }) => (hc ? hc : "#0d3b3f")};
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
`;

Container.Input = styled.input`
  width: 100%;
  outline: none;
  display: flex;
  appearance: none;
  align-items: center;
  transition: all 0.3s;
  color: ${({ color }) => (color ? color : "#0D3B3F")};
  background-color: inherit;
  border-radius: ${({ br }) => (br ? br : "12px")};
  padding: ${({ paddinginput }) => paddinginput || "0 0 0 0"};
  font-size: 16px;
  font-style: normal;
  border: none;
  font-weight: 500;
  &::placeholder {
    color: ${({ placeholderColor }) =>
      placeholderColor ? placeholderColor : "#000"};
    font-size: 20px;
    font-weight: 400;
    line-height: normal;
  }
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;

Container.Error = styled.div`
  position: absolute;
  color: #f00;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  top: 62px;
  left: 0px;
  text-align: left;
`;

export const Icon = styled.img`
  height: 24px;
  width: 24px;
  margin: ${({ margin }) => (margin ? margin : "0 10px")};

`;
