import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
  body: '#fff',
  headerBg: '#f7f7f7',
  container: '#e9e9e9',
  textColor: '#000',
  input: '#FFF',
  inputBorder: '#c7c7c7',
  cardText: '#000',
  accordionBtn: 'rgba(193,193,193,0.43)',
  accordionBtnActive: '#bfbfbf',
  accordionBtnActiveHover: '#b5b5b5'
};

export const darkTheme = {
  body: '#141414',
  headerBg: '#212121',
  container: '#212121',
  textColor: '#fff',
  input: '#171717',
  inputBorder: 'rgba(0,0,0,0.47)',
  cardText: '#FFF',
  accordionBtn: '#141414',
  accordionBtnActive: 'rgba(0,0,0,0.61)',
  accordionBtnActiveHover: 'rgba(0,0,0,0.8)'
};

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.textColor};
  }
  header {
    background-color: ${({ theme }) => theme.headerBg};
  }
  .theme-container{
    background-color: ${({ theme }) => theme.container};
  }
  .theme-card, .theme-list {
    background-color: ${({ theme }) => theme.body};
  }

  .theme-secondary-color {
    color: ${({ theme }) => theme.secondaryColor}
  }

  .theme-text-color {
    color: ${({ theme }) => theme.textColor}
  }

  .theme-input {
    background-color: ${({ theme }) => theme.input} !important;
    color: ${({ theme }) => theme.textColor} !important;
    border-color: ${({ theme }) => theme.inputBorder};
    border-style: solid;
    border-width: 1px;
  }
  .theme-link{
    color: ${({ theme }) => theme.textColor} !important;
  }
  .theme-accordion-button{
    background-color: ${({ theme }) => theme.accordionBtn};
    color: ${({ theme }) => theme.textColor};
  }
  .theme-accordion-button:hover{
    background-color: ${({ theme }) =>
      theme.accordionBtnActiveHover} !important;
  }
  .theme-accordion-button-active{
    background-color: ${({ theme }) => theme.accordionBtnActive} !important;
  }
  .theme-accordion-panel{
    background-color: ${({ theme }) => theme.body};

  }
`;
