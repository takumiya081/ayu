/* eslint-disable import/no-default-export */
import {ServerStyleSheets} from '@material-ui/core';
import {extractCritical} from 'emotion-server';
import Document, {Head, Main, NextScript} from 'next/document';
import React from 'react';

class NextDocument extends Document {
  render() {
    return (
      <html lang="ja">
        <Head>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

NextDocument.getInitialProps = async (ctx) => {
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);
  const emotionStyles = extractCritical(initialProps.html);
  return {
    ...initialProps,
    styles: (
      <>
        {initialProps.styles}
        {sheets.getStyleElement()}
        <style
          data-emotion-css={emotionStyles.ids.join(' ')}
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{__html: emotionStyles.css}}
        />
      </>
    ),
  };
};

export default NextDocument;
