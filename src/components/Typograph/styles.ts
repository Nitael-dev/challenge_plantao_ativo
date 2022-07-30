import { ThemeType } from 'styled-components';
import styled from 'styled-components/native';
import { TypographProps } from '../../interfaces/Typograph';

type StyledTypographProps = TypographProps & ThemeType;

export const StyledTypograph = styled.Text<StyledTypographProps>`
  font-family: ${({fontWeight, theme}) => (fontWeight === 'Regular' ?
    theme.fonts[400] :
    theme.fonts[500]
  )};
  font-size: ${({fontSize}) => (fontSize ?
    fontSize :
    16
  )}px;
  color: ${({color, theme}) => (color ?
    theme.colors[color] : theme.colors.title
  )};
  line-height: ${({lineHeight}) => (
    lineHeight === 'small' ? 20 :
    lineHeight === 'high' ? 28 :
    lineHeight === 'extra_high' ? 50 :
    24
  )}px;
`;