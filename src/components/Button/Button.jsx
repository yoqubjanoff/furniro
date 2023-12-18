import React, { Children } from "react";
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
  Children
}) => {
  return (
    <MainButton
      width={width}
      color={color}
      backgroundcolor={backgroundcolor}
      borderradius={borderradius}
      border={border}
      allpadding={allpadding}
      allmargin={allmargin}
      fontweight={fontweight}
      fontsize={fontsize}
    >
      {text || ""}
      {Children}
    </MainButton>
  );
};

export default Button;
