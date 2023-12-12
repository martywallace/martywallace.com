import '../style.css';

import { ReactNode } from 'react';
import Script from 'next/script';
import Footer from '../components/Footer';
import { Metadata } from 'next';

type Props = {
  readonly children: ReactNode;
};

export const metadata: Metadata = {
  title: 'Marty Wallace | Software Developer',
  description:
    'Marty Wallace is a software developer that specialises in architecting and developing large-scale technical solutions while keeping them simple, scalable and efficient.',
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: 'https://martywallace.com.au',
    siteName: 'Marty Wallace',
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
        {children}

        <Footer />
      </body>
    </html>
  );
}
