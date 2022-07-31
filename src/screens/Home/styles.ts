import {
  ModalProps,
  Dimensions,
  TextInputProps
} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 0 16px;
`;

export const Input = styled.TextInput<TextInputProps>`

`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  height: 48px;
  align-items: center;
  justify-content: center;
  background-color: #ffcfff;
  border-radius: 4px;
  box-shadow: 2px 1px 1px #dfdfdf;
`;

export const Modal = styled.Modal<ModalProps>``;

export const ModalContainer = styled.View`
  background-color: #FFFFFF;
  width: ${Dimensions.get('window').width - 72}px;
  padding: 12px 8px;
  padding-bottom: 20px;
  border-radius: 12px;
  margin-top: 16px;
`;

export const RecentCard = styled.View`

`;

export const CardList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false
})``;

export const NotFoundResults = styled.View`
  width: 100%;
  height: 28px;
`;
