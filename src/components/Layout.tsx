import { FC, PropsWithChildren } from 'react';
import Head from 'next/head';
import { Footer } from './Footer';
import { Navbar } from './Navbar';

export const Layout: FC<PropsWithChildren> = ({ children }) => (
  <>
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700;800&display=swap"
        rel="stylesheet"
      />
      <title>Enigma Test App</title>
      <meta name="description" content="Enigma test application" />
      <link rel="shortcut icon" href="/favicon.ico" />
    </Head>
    <Navbar />
    {children}
    <Footer />
  </>
);
