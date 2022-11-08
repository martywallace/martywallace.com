import '../styles/globals.css';

import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

import type { AppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';
import Footer from '../components/Footer';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Marty Wallace | Full Stack Developer</title>
        <meta
          name="description"
          content="Marty Wallace is a full-stack web developer that specialises in architecting and developing large-scale technical solutions while keeping them simple, scalable and efficient."
        />
        <meta
          property="og:image"
          content="https://avatars.githubusercontent.com/u/606154"
        />
      </Head>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=UA-16827384-5"
      />
      <Script strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'UA-16827384-5');
        `}
      </Script>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default App;
