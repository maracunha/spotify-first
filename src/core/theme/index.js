import * as styledComponents from 'styled-components';

const {
  default: styled,
  css,
  createGlobalStyle,
  ThemeProvider,
} = styledComponents;

export const theme = {
  grayDark: '#383A48',
  gray: '#6c757d',
  grayLight: 'rgb(190,196,218)',
  grayLightest: '#f7f7f7',
  primary: '#43A9E0',
  secondary: 'rgb(80,104,177)',
  success: '#0cca8e',
  info: '#009c8a',
  warning: '#FEBA47',
  danger: '#F1635F',
  light: '#F9FBFB',
  dark: '#242329',
  orange: '#fc6a57',
  darkFooter: '#282828',
};

export default styled;
export { css, createGlobalStyle, ThemeProvider };
