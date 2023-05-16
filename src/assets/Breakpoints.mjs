export const BREAKPOINTS = {
   sm: 900,
   xs: 525
}

export const setBreakpoint = (screen_width) => {
   if (screen_width > BREAKPOINTS.sm) {
      return 'lg';
   } else if (screen_width < BREAKPOINTS.sm && screen_width > BREAKPOINTS.xs) {
      return 'sm';
   } else if (screen_width < BREAKPOINTS.xs) {
      return 'xs';
   }
}