// pages/_app.tsx
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import '../app/globals.css';
import Head from 'next/head';

config.autoAddCss = false; 

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps & { pageProps: { session: any } }) {
  return (
    <SessionProvider session={session}>
      <Head>
        <title>Mental Health Support</title>
        <link rel="icon" type="image/svg+xml" href="/logo.svg" />
        <meta name="description" content="Your Personal Mental Health Companion" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
