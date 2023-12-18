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
  fontsize
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
      {text || "click"}
    </MainButton>
  );
};

export default Button;
