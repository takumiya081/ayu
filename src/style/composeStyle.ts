import {
  compose,
  display,
  DisplayProps,
  flexbox,
  FlexboxProps,
  lineHeight,
  LineHeightProps,
  margin,
  MarginProps,
  space,
  SpaceProps,
  textAlign,
  TextAlignProps,
} from 'styled-system';

/**
 * atomic な最小単のコンポーネント用
 */
export type BaseComposeStyleProps = MarginProps &
  DisplayProps &
  FlexboxProps &
  TextAlignProps &
  LineHeightProps;
export const baseComposeStyle = compose(margin, display, flexbox, textAlign, lineHeight);

/**
 * ブロックのコンポーネント用
 */
export type BlockComposeStyleProps = SpaceProps &
  DisplayProps &
  FlexboxProps &
  TextAlignProps &
  LineHeightProps;
export const blockComposeStyle = compose(space, display, flexbox, textAlign, lineHeight);
