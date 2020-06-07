import useMediaQuery from '@material-ui/core/useMediaQuery';

import {BreakpointAlias, breakpoints} from './theme';

type mediaQueryHelperType = (alias: keyof BreakpointAlias) => string;

export const up: mediaQueryHelperType = (alias: keyof BreakpointAlias) => {
  return `@media(min-width: ${breakpoints[alias]}px)`;
};

export const down: mediaQueryHelperType = (alias: keyof BreakpointAlias) => {
  const breakpoint = breakpoints[alias];
  return `@media(max-width: ${breakpoint - 1}px)`;
};

export function useIsUpMd() {
  return useMediaQuery(`(min-width:${breakpoints.md}px)`);
}
