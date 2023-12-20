import React from "react";
import { MainButton } from "./style";

const Button = ({
  width,
  color,
  text,
  backgroundcolor,
  allpadding,
  allmargin,
  border,
  borderradius,
  fontweight,
  fontsize,
  height,
  onClick, 
  children 
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <MainButton
      width={width}
      height={height}
      color={color}
      backgroundcolor={backgroundcolor}
      borderradius={borderradius}
      border={border}
      allpadding={allpadding}
      allmargin={allmargin}
      fontweight={fontweight}
      fontsize={fontsize}
      onClick={handleClick} 
    >
      {text || ""}
      {children}
    </MainButton>
  );
};

export default Button;
