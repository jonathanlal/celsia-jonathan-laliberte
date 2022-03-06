import { useEffect, useState } from 'react';
import useDarkMode from 'use-dark-mode';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, darkTheme, lightTheme } from 'styles';
import { LayoutWrapper, Page } from 'layout';
import '@fortawesome/fontawesome-svg-core/styles.css';
import 'lib/faLibrary';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const darkmode = useDarkMode(true);
  const theme = darkmode.value ? darkTheme : lightTheme;
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <LayoutWrapper />
      <Page isCentered="true">{isMounted && <Component {...pageProps} />}</Page>
    </ThemeProvider>
  );
}

export default MyApp;
