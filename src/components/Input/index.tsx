import React from "react";
import { TextInputProps } from "react-native";
import { Typograph } from "../Typograph";
import {
  Container,
  StyledInput
} from "./styles";

interface InputProps extends TextInputProps {
  label: string;
  error: boolean;
}

export const Input = ({
  label,
  error,
  ...rest
}: InputProps) => {
  return (
    <Container>
      <Typograph
        lineHeight="high"
        color='title'
      >{label}</Typograph>
      <StyledInput error={error} {...rest}/>
    </Container>
  )
}