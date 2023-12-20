import styled from "styled-components";

export const Container = styled.div`
  width: ${({ width }) => (width ? width : "453px")};
  height: ${({ height }) => (height ? height : "60px")};
  border-radius: ${({ br }) => (br ? br : "12px")};
  outline: none;
  display: flex;
  padding: ${({ padding }) => (padding ? padding : "0")};
  background-color: ${({ bg }) => (bg ? bg : "inherit")};
  align-items: center;
  position: relative;
  background: #fff;
  padding: 0 10px;
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
  font-size: ${({ active }) => (active ? "13px" : "16px")};
  font-style: normal;
  font-weight: 600;
  position: absolute;
  top: ${({ active }) => (active ? "-20px" : "22px")};
  left: 20px;
  transition: 0.4s all;
  z-index: 1;
`;

Container.Input = styled.input`
  width: 100%;
  height: 70%;
  border: ${({ borderinput }) => borderinput || "1px solid #9F9F9F;"};
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

export const Icon = styled.div`
  height: 32px;
  margin: ${({ margin }) => (margin ? margin : "0 5px")};
  display: flex;
  align-items: center;
  justify-content: center;
`;
