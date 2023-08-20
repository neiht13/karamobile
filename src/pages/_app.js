import '@/styles/globals.css'
import { App } from 'konsta/react';
import { SessionProvider } from "next-auth/react"
import { AuthProvider } from '@/firebase/authContext';

export default function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return(
      <AuthProvider>
    <App theme="ios">
      <Component {...pageProps} />
    </App>
      </AuthProvider>)
}
