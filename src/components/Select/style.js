import styled from "styled-components";
import Up from "../../assets/icons/bottomarrow.png";
import Down from "../../assets/icons/bottomarrow.png";

export const Container = styled.div`
  width: ${({ width }) => width && width};
  height: ${({ height }) => (height ? height : "40px")};
  position: relative;
  border: ${({ border }) => border || "1px solid #d9d9d9"};
  border-radius: ${({ borderradius }) => borderradius || ""};
  display: flex;
  align-items: center;
  transition: all 0.3s;
  user-select: none;
  padding: ${({ padding }) => padding || ""};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  color: ${({ disabled }) => disabled && "#d9d9d9"};
  outline: none;
  color: #9F9F9F;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  position: relative;
`;

export const Icon = styled.div``;

Icon.Up = styled.div`
  background-image: url(${Up});
`;
Icon.Down = styled.div`
  background-image: url(${Down});
  transition: all 0.3s;
  transform: ${({ open }) => open && "rotate(180deg)"};
`;

Container.Icon = styled.img`
  width: 20px;
  height: 20px;
  position: absolute;
  right: 27px;
    top: 27px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
  cursor: pointer;
`;

export const Selection = styled.div`
  transition: all 0.3s;
  max-height: ${({ open }) => (open ? "150px" : "0px")};
  transition: all 0.2s;
  background-color: #fff;
  position: absolute;
  user-select: none;
  flex-direction: column;
  width: 100%;
  z-index: 99;
  top: 40px;
  left: -5px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  outline: none;
  overflow-y: auto;
  cursor: pointer;
  width: max-content;
  &::-webkit-scrollbar {
    background-color: #ccc;
  }

  &::-webkit-scrollbar {
    width: 4px;
    background-color: inherit;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ccc;
  }
`;

Selection.Item = styled.div`
  height: 40px;
  transition: height 0.3s;
  z-index: 99;
  user-select: none;
  display: flex;
  align-items: center;
  padding: 0 10px;
  font-size: 16px;
  cursor: pointer;
  background-color: ${({ active }) => active && "#f0f0f0"};
  font-weight: ${({ active }) => active && "650"};

  &:hover {
    background-color: #f0f0f0;
    font-weight: 650;
  }
`;

Selection.Item1 = styled.div`
  height: 40px;
  transition: height 0.3s;
  z-index: 99;
  user-select: none;
  display: flex;
  align-items: center;
  padding: 0 10px;
  cursor: pointer;
  background-color: ${({ active }) => active && "#f0f0f0"};
  font-weight: ${({ active }) => active && "650"};
`;
Container.Header = styled.p`
  position: absolute;
  color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  top: -35px;
  left: 0;
  line-height: normal;
`;
