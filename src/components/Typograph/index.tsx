import React from "react";
import { TypographProps } from "../../interfaces/Typograph";
import { StyledTypograph } from "./styles";

export const Typograph = ({color, fontSize, fontWeight, children, lineHeight}: TypographProps) => {
  return <StyledTypograph 
    color={color}
    fontSize={fontSize}
    lineHeight={lineHeight}
    fontWeight={fontWeight}
    children={children}
  />
}