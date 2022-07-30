import { TextInputProps } from "react-native";
import styled from "styled-components/native";

interface StyledInputProps extends TextInputProps {
  error?: boolean;
}

export const Container = styled.View`
  margin-bottom: 20px;
  height: 108px;
  padding: 8px;
`;

export const StyledInput = styled.TextInput<StyledInputProps>`
  background-color: ${({error}) => error ? '#f0cfcf' : '#ffefff'};
  padding: 8px;
  height: 48px;
  border-radius: 4px;
`;