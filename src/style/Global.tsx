import {css, Global as GrobalCompoennt} from '@emotion/core';
import React from 'react';

import {theme} from '@/style/theme';

export const Global: React.FC = () => {
  return (
    <GrobalCompoennt
      styles={css`
        /* stylelint-disable property-no-vendor-prefix, no-descending-specificity */
        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }

        /* Remove default margin */
        /* デフォルトのmarginを削除 */
        body,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p,
        ul,
        ol,
        li,
        figure,
        figcaption,
        blockquote,
        dl,
        dd {
          margin: 0;
        }

        html,
        body {
          color: ${theme.colors.foundation.default};
          font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', '游ゴシック Medium',
            YuGothic, YuGothicM, 'Hiragino Kaku Gothic ProN', メイリオ, Meiryo, sans-serif;
          background: #fff;
        }

        /* bodyのデフォルトを定義 */
        body {
          scroll-behavior: smooth;
          text-rendering: optimizeSpeed;
          line-height: 1.43;
          font-size: 14px;
        }

        ul,
        ol {
          list-style: none;
        }

        /* 以下rebootから拝借 */

        /* Make images easier to work with */
        img {
          max-width: 100%;
          vertical-align: bottom;
          border-style: none;
        }

        svg {
          overflow: hidden;
          vertical-align: bottom;
        }

        [tabindex='-1']:focus {
          outline: 0 !important;
        }

        /* linkの基本設定 */
        a {
          color: inherit;
          text-decoration: none;
          background-color: transparent;
        }

        a:not([href]):not([tabindex]) {
          color: inherit;
          text-decoration: none;
        }

        a:not([href]):not([tabindex]):hover,
        a:not([href]):not([tabindex]):focus {
          color: inherit;
          text-decoration: none;
        }

        a:not([href]):not([tabindex]):focus {
          outline: 0;
        }

        table {
          border-collapse: collapse;
        }

        th {
          text-align: inherit;
        }

        input,
        button,
        select,
        optgroup,
        textarea {
          margin: 0;
          font-family: inherit;
          font-size: inherit;
          line-height: inherit;
        }

        button,
        select {
          text-transform: none;
        }

        select {
          word-wrap: normal;
        }
        button,
        [type='button'],
        [type='reset'],
        [type='submit'] {
          -webkit-appearance: button;
        }

        button:not(:disabled),
        [type='button']:not(:disabled),
        [type='reset']:not(:disabled),
        [type='submit']:not(:disabled) {
          cursor: pointer;
        }

        button::-moz-focus-inner,
        [type='button']::-moz-focus-inner,
        [type='reset']::-moz-focus-inner,
        [type='submit']::-moz-focus-inner {
          border-style: none;
        }
      `}
    />
  );
};
