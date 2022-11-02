import { FC, PropsWithChildren } from 'react';
import Head from 'next/head';
import { Footer } from './Footer';
import { Navbar } from './Navbar';

export const Layout: FC<PropsWithChildren> = ({ children }) => (
  <>
    <Head>
      <title>Enigma Test App</title>
      <meta name="description" content="Enigma test application" />
      <link rel="shortcut icon" href="/favicon.ico" />
    </Head>
    <Navbar />
    {children}
    <Footer />
  </>
);
