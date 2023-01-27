import React from 'react';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import MainLayout from '../layout/container/Container';

export default function App({ Component, pageProps }: AppProps) {
  // remove in the last step
  return (
    <MainLayout>
      {/* eslint-disable-next-line react/jsx-props-no-spreading  */}
      <Component {...pageProps} />
    </MainLayout>
  );
}
