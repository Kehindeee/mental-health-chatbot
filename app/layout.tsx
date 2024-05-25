// app/layout.tsx
import { Inter } from 'next/font/google';
import '../app/globals.css';
import Header from '../components/Header';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <title>Mental Health Support</title>
        <link rel="icon" type="image/svg+xml" href="/logo.svg" />
        <meta name="description" content="Your Personal Mental Health Companion" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
