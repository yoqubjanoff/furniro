import React from "react";
import { MainButton } from "./style";

const Button = ({
  width,
  color,
  text,
  backgroundColor,
  allPadding,
  allMargin,
  border,
  borderRs,
  fontWe,
  fontSz
}) => {
  return (
    <MainButton
      width={width}
      color={color}
      backgroundColor={backgroundColor}
      borderRs={borderRs}
      border={border}
      allPadding={allPadding}
      allMargin={allMargin}
      fontWe={fontWe}
      fontSz={fontSz}
    >
      {text || "click"}
    </MainButton>
  );
};

export default Button;
