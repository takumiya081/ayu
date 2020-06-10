import {StylesProvider, ThemeProvider as MaterialUIThemeProvider} from '@material-ui/styles';
import {render} from '@testing-library/react';
import {ThemeProvider as EmotionThemeProvider} from 'emotion-theming';
import React from 'react';

import {materialUITheme, theme} from '@/style/theme';

const AllProviders: React.FC = ({children}) => {
  return (
    <MaterialUIThemeProvider theme={materialUITheme}>
      <EmotionThemeProvider theme={theme}>
        <StylesProvider>{children}</StylesProvider>
      </EmotionThemeProvider>
    </MaterialUIThemeProvider>
  );
};

type RenderParameters = Parameters<typeof render>;

const customRender = (ui: RenderParameters[0], options?: RenderParameters[1]) =>
  render(ui, {wrapper: AllProviders, ...options});

// re-export everything
export * from '@testing-library/react';

// override render method
export {customRender as render};
