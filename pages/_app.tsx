import React from 'react';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  // remove in the last step
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />;
}
