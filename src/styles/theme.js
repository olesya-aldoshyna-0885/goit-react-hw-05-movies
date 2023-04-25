export const theme = Object.freeze({
  colors: {
    accent: '#f64f59',
    white: '#ffffff',
    light: 'rgba(255,255,255,.5)',
    dark: '#360b0b',
    primary: '#b32222',
    mainBackground: ['linear-gradient(to top, #270f0f, #432020, #642c2c)'],
    imageBackground: ['red', 'linear-gradient (90deg, #ff9966,#ff5e62'],
  },
  fontSizes: {
    xs: '12px',
    small: '14px',
    medium: '18px',
    large: '22px',
    xl: '30px',
    xxl: '34px',
    xxxl: '42px',
  },
  breakpoints: {
    xs: '320px',
    s: '768px',
    m: '1024px',
    l: '1280px',
    xl: '1440px',
  },
  animations: {
    cubicBezier: 'cubic-bezier(0, 0.110, 0.35, 2);',
  },
  spacing: {
    step: 4,
  },
});