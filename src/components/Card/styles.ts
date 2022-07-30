import styled from 'styled-components/native';

interface IconProps {
  star?: boolean;
}

export const Container = styled.View`
  width: 100%;
  height: 88px;
  background-color: #ecd4e6;
  border-radius: 4px;
  margin-top: 8px;
  padding: 8px;
  position: relative;
`;

export const IconTouchable = styled.TouchableOpacity<IconProps>`
  position: absolute;
  right: ${({star}) => star ? 40 : 12}px;
  bottom: 12px;
`;
