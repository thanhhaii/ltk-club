import type { AppProps } from 'next/app';

// Styles
import '../styles/globals.css';
import 'antd/dist/antd.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
