import '../style.css';

import { Metadata } from 'next';
import Script from 'next/script';
import { ReactNode } from 'react';
import { SkeletonTheme } from 'react-loading-skeleton';
import Footer from '../components/Footer';
import Header from '../components/Header';

type Props = {
  readonly children: ReactNode;
};

export const metadata: Metadata = {
  title: 'Marty - Web Developer',
  metadataBase: new URL('https://martywallace.com'),
  description:
    'Marty Wallace is a software developer that specialises in architecting and developing large-scale technical solutions while keeping them simple, scalable and efficient.',
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: 'https://martywallace.com',
    siteName: 'Marty - Web Developer',
    images: [
      {
        url: 'https://storage.martywallace.com/ai-profile.jpg',
        width: 640,
        height: 640,
        alt: 'Marty Wallace',
      },
    ],
  },
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en-AU">
      <head>
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
