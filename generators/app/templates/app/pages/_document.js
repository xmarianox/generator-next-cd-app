import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props => sheet.collectStyles(<App { ...props } />));
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <html lang="es">
        <Head>
          <meta charSet="utf-8" />
          {/**
            <link rel="dns-prefetch" href={app.url} />
            <link rel="preconnect" href={app.url} />
          */}
          <title>Next CD app</title>
          <meta name="viewport" content="initial-scale=1, viewport-fit=cover" />

          {this.props.styleTags}

          {/**
            <link rel="manifest" href="" />
            <meta name="msapplication-TileColor" content="#161616" />
            <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
            <meta name="format-detection" content="telephone=no" />
            <meta httpEquiv="x-rim-auto-match" content="none" />
            <meta name="mobile-web-app-capable" content="yes" />
            <meta name="theme-color" content="#050509" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content="black" />
            <meta name="apple-mobile-web-app-title" content={app.title} />
            <meta name="msapplication-TileImage" content={app.title} />
            <meta name="description" content={app.description} />
            <meta name="keywords" content="" />
            <meta name="author" content="marianomolina.xyz" />
            <meta property="fb:app_id" content="" />
            <meta property="og:title" content={app.title} />
            <meta property="og:site_name" content={app.title} />
            <meta property="og:url" content={app.url} />
            <meta property="og:type" content="website" />
            <meta property="og:description" content={app.description} />
            <meta property="og:locale " content="es_LA" />
            <meta property="og:image" content="" />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content={app.url} />
            <meta name="twitter:creator" content={app.url} />
            <meta name="msapplication-config" content="/static/images/icons/browserconfig.xml" />
            <meta name="theme-color" content="#050509" />

            <link rel="shortcut icon" href="" />
            <link rel="apple-touch-icon" href="" />
            <link rel="apple-touch-icon" sizes="76x76" href="" />
            <link rel="apple-touch-icon" sizes="120x120" href="" />
            <link rel="apple-touch-icon" sizes="152x152" href="" />
          */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}