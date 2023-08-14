import '@/styles/globals.css'
import { App } from 'konsta/react';

export default function MyApp({ Component, pageProps }) {
  return     <App theme="ios">
    <Component {...pageProps} />
  </App>
}
