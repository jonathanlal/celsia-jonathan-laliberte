import { css } from 'styled-components';
import { createMedia } from '@artsy/fresnel';

const media = {
  sm: '(min-width: 576px)',
  md: '(min-width: 768px)',
  lg: '(min-width: 992px)',
  xl: '(min-width: 1200px)',
  isMobile: '(max-width: 768px)'
};

export const mediaQuery = Object.keys(media).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media ${media[label]} {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

const ExampleAppMedia = createMedia({
  breakpoints: {
    mobile: 0,
    desktop: 769
  }
});

export const mediaStyles = ExampleAppMedia.createMediaStyle();

export const { Media, MediaContextProvider } = ExampleAppMedia;
