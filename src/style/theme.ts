import {jaJP} from '@material-ui/core/locale';
import {createMuiTheme} from '@material-ui/core/styles';

// css property type
type StringOrNumberValue = string | number;

export interface BreakpointAlias {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
}

// breakpointはmaterial uiと統一する
// https://material-ui.com/customization/breakpoints/#breakpoints
export const breakpoints: Readonly<BreakpointAlias> = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920,
};

const spaces = [0, 4, 8, 16, 32, 64, 128, 256];

export interface Colors {
  foundation: {
    light: [string, string, string, string, string];
    default: string;
    dark: [string];
  };
  primary: {
    light: [string];
    default: string;
    dark: [string];
    innerText: string;
  };
  secondary: {
    light: [string];
    default: string;
    dark: [string];
    innerText: string;
  };
  success: {
    light: [string];
    default: string;
    dark: [string];
    innerText: string;
  };
  error: {
    light: [string];
    default: string;
    dark: [string];
    innerText: string;
  };
}

const colors: Colors = {
  foundation: {
    light: ['#858585', '#C4C4C4', '#D1D1D1', '#DEDEDE', '#F5F5F5'],
    default: '#383838',
    dark: ['#333'],
  },
  primary: {
    light: ['#58a5f0'],
    default: '#0277bd',
    dark: ['#004c8c'],
    innerText: '#fff',
  },
  secondary: {
    light: ['#b47cff'],
    default: '#7c4dff',
    dark: ['#3f1dcb'],
    innerText: '#fff',
  },
  success: {
    light: ['#d0fff2'],
    default: '#35ce84',
    dark: ['#259073'],
    innerText: '#fff',
  },
  error: {
    light: ['#F78880'],
    default: '#F54336',
    dark: ['#C2352B'],
    innerText: '#fff',
  },
};

type FontSizes = [string, string, string, string, string, string];
const fontSizes: FontSizes = ['0.75rem', '0.875rem', '1rem', '1.125rem', '1.25rem', '1.5rem'];
// fontsizeの基準 14px
const fontSizesDefault = 1;

type FontWeights = [number, number, number, ...number[]];
const fontWeights: FontWeights = [100, 300, 400, 700];
const fontWeightsDefault = 2;

const zIndices = {
  mobileStepper: 1000,
  speedDial: 1050,
  appBar: 1100,
  fab: 1150,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500,
};

const headerMinHeight = {
  default: '56px',
  lg: '48px',
};

/**
 * theme types
 * styled-systemで参照されるkeyは↓
 * https://styled-system.com/theme-specification#key-reference
 */
export interface ThemeType {
  breakpoints: string[];
  spaces: number[];
  fontSizes: FontSizes;
  fontSizesDefault: number;
  fontWeights: FontWeights;
  fontWeightsDefault: number;
  colors: Colors;
  zIndices: {
    mobileStepper: number;
    speedDial: number;
    appBar: number;
    fab: number;
    drawer: number;
    modal: number;
    snackbar: number;
    tooltip: number;
  };
  headerMinHeight: {
    default: string;
    lg: string;
  };
}

export const theme: ThemeType = {
  breakpoints: Object.values(breakpoints)
    .filter((v) => v !== 0)
    .sort((a, b) => a - b)
    .map((v) => `${v}px`),
  spaces,
  fontSizes,
  fontSizesDefault,
  fontWeights,
  fontWeightsDefault,
  colors,
  zIndices,
  headerMinHeight,
};

export const materialUITheme = createMuiTheme(
  {
    palette: {
      primary: {
        main: theme.colors.primary.default,
      },
      secondary: {
        main: theme.colors.secondary.default,
      },
    },
    props: {
      // ripplerをoff
      MuiButtonBase: {
        disableRipple: true,
      },
    },
  },
  jaJP,
);
