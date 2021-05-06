import React from 'react';
import { AppProps } from 'next/app';
import GlobalStyle from '../styles/global';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import { ChallengesProvider } from '../contexts/ChallengesContext';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <ChallengesProvider>
        <Component {...pageProps} />
        <GlobalStyle />
      </ChallengesProvider>
    </ThemeProvider>
  );
};

export default MyApp;
