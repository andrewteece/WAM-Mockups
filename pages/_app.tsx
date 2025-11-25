import type { AppProps } from 'next/app';
import Header from '../components/Header';
import '../styles/globals.css';
import '../styles/home-v1.css';
import '../styles/landing-v2.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}
