/* eslint-disable import/no-default-export */
import {ApolloProvider} from '@apollo/react-hooks';
import {CacheProvider} from '@emotion/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import {StylesProvider, ThemeProvider as MaterialUIThemeProvider} from '@material-ui/styles';
import {cache} from 'emotion';
import {ThemeProvider as EmotionThemeProvider} from 'emotion-theming';
import {DefaultSeo} from 'next-seo';
import {AppProps} from 'next/app';
import Head from 'next/head';
import React from 'react';

import {useApollo} from '@/lib/apollo/';
import {Global} from '@/style/Global';
import {materialUITheme, theme} from '@/style/theme';

const App: React.FC<AppProps> = ({Component, pageProps}) => {
  const apolloClient = useApollo(pageProps.initialApolloState);
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
        <meta name="theme-color" content={theme.colors.primary.dark[0]} />
      </Head>
      <DefaultSeo
        dangerouslySetAllPagesToNoIndex={process.env.NODE_ENV !== 'production'}
        dangerouslySetAllPagesToNoFollow={process.env.NODE_ENV !== 'production'}
        titleTemplate="%s | きときと鮎マップ"
        description="近くのおとり鮎店を地図と川から探せるオープンソースのサービス"
        openGraph={{
          type: 'website',
          locale: 'ja_JP',
          site_name: 'きときと鮎マップ',
          url: 'https://kitokitofish.dev/',
        }}
      />
      <MaterialUIThemeProvider theme={materialUITheme}>
        <EmotionThemeProvider theme={theme}>
          <CacheProvider value={cache}>
            <StylesProvider injectFirst>
              <CssBaseline />
              <Global />
              <ApolloProvider client={apolloClient}>
                <Component {...pageProps} />
              </ApolloProvider>
            </StylesProvider>
          </CacheProvider>
        </EmotionThemeProvider>
      </MaterialUIThemeProvider>
    </>
  );
};

export default App;
