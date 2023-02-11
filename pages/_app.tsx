import React from 'react';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';
import MainLayout from '../layout/container/Container';
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps, ...appProps }: AppProps) {
  // remove in the last step
  const isLayoutNeeded = !appProps.router.pathname.startsWith('/login');
  const LayoutComponent = isLayoutNeeded ? MainLayout : React.Fragment;
  return (
    <LayoutComponent>
      {/* eslint-disable-next-line react/jsx-props-no-spreading  */}
      <Component {...pageProps} />
      <ToastContainer />
    </LayoutComponent>
  );
}
