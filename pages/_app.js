import '../styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Ugur Armagan</title>
        <link rel="icon" href="/favicon.ico" />
        <meta content="width=device-width, user-scalable=no" name="viewport" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
