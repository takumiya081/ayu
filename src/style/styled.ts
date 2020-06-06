/**
 * emotionのthemeの型定義を有効にする
 * https://emotion.sh/docs/typescript#define-a-theme
 */
import emotionStyled, {CreateStyled} from '@emotion/styled';

import {ThemeType} from './theme';

export const styled: CreateStyled<ThemeType> = emotionStyled;
