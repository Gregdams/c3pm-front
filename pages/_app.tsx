import App from 'next/app';
import Head from 'next/head';
import React from 'react';

// Files imported here are available globally so it looks at this is
// a great location for our CSS framework
import '../css/basscss.min.css';
import '../css/basscss-color.css';
import '../css/basscss-background-color.css';

// Also load fonts via CSS
import '../css/fonts.css';

// Global CSS, for things that concern all pages
// without any condition
import '../css/global.css';

class MyApp extends App {
  render = (): JSX.Element => {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head><title>c3pm</title></Head>
        <Component {...pageProps} />
      </>
    );
  }
}

export default MyApp;
