import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { env } from '@/lib/config/env';
import Providers from '@/components/providers/Providers';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

const inter = Inter({ subsets: ['latin'] });

const APP_BASE_URL = new URL(env.NEXT_PUBLIC_APP_BASE_URL);

export const metadata: Metadata = {
  metadataBase: APP_BASE_URL,
  title: {
    template: '%s | Top Frames',
    default: 'Top Frames'
  },
  description: 'description',
  applicationName: 'Top Frames',
  keywords: ['Top Frames', 'Top trends', 'Twitter', 'Crypto'],
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US'
    }
  },
  openGraph: {
    title: 'Top Frames',
    description: 'description',
    url: APP_BASE_URL,
    siteName: 'Top Frames',
    type: 'website',
    locale: 'en_US',
    images: ['']
  },
  twitter: {
    title: 'Top Frames',
    description: 'description',
    site: 'Top Frames'
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Providers>
          <main className='h-dvh grid grid-rows-[auto_1fr_auto]'>
            <Header />
            <div>{children}</div>
            <Footer />
          </main>
        </Providers>
      </body>
    </html>
  );
}
