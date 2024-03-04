import '../style.css';

import { ReactNode } from 'react';
import Script from 'next/script';
import Footer from '../components/Footer';
import { Metadata } from 'next';
import Header from '../components/Header';
import { SkeletonTheme } from 'react-loading-skeleton';

type Props = {
  readonly children: ReactNode;
};

export const metadata: Metadata = {
  title: 'Marty - Web Developer',
  description:
    'Marty Wallace is a software developer that specialises in architecting and developing large-scale technical solutions while keeping them simple, scalable and efficient.',
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: 'https://martywallace.com',
    siteName: 'Marty - Web Developer',
    images: [
      {
        url: 'https://avatars.githubusercontent.com/u/606154',
        width: 512,
        height: 512,
        alt: 'Marty Wallace',
      },
    ],
  },
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en-AU">
      <head>
        <title>Marty - Web Developer</title>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=UA-16827384-5"
        />
        <Script id="gtm" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-16827384-5');
          `}
        </Script>
      </head>

      <body>
        <Header />

        <SkeletonTheme baseColor="#374151" highlightColor="#686F7D">
          <main>{children}</main>
        </SkeletonTheme>

        <Footer />
      </body>
    </html>
  );
}
