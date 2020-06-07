import isPropValid from '@emotion/is-prop-valid';
import {
  display,
  DisplayProps,
  flexbox,
  FlexboxProps,
  height,
  HeightProps,
  lineHeight,
  LineHeightProps,
  PaddingProps,
  space,
  SpaceProps,
  textAlign,
  TextAlignProps,
  width,
  WidthProps,
} from 'styled-system';

import {styled} from '@/style/styled';

export type LayoutBoxProps = SpaceProps &
  DisplayProps &
  FlexboxProps &
  LineHeightProps &
  PaddingProps &
  TextAlignProps &
  HeightProps &
  WidthProps & {
    as?: React.ElementType;
  };

export const LayoutBox = styled('div', {
  shouldForwardProp: (prop) =>
    isPropValid(prop) && prop !== 'display' && prop !== 'height' && prop !== 'width',
})<LayoutBoxProps>`
  ${display};
  ${flexbox};
  ${space};
  ${lineHeight};
  ${textAlign};
  ${width};
  ${height}
`;
