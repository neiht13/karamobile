import '@/styles/globals.css'
import { App } from 'konsta/react';
import { SessionProvider } from "next-auth/react"
import { AuthProvider } from '@/firebase/authContext';
import React, {useEffect, useState} from "react";
import {Link as LinkScroll} from "react-scroll";
import Nav from "@/component/Nav";
import {getAuth} from "firebase/auth";
import firebaseApp from "@/firebase/config";
import {useRouter} from "next/router";
import Head from "next/head";

export default function MyApp({ Component, pageProps: { session, ...pageProps } }) {
useEffect(()=>{
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

  const isAndroid = /Android/.test(navigator.userAgent);
  const auth = getAuth(firebaseApp);

  if (isIOS) {
    console.log('Đây là iOS');
    setIos(true)
  } else if (isAndroid) {
    console.log('Đây là Android');
  } else {
    console.log('Không phải iOS hoặc Android');
  }
},[])
  const [ios, setIos] = useState(false)

  return(
      <AuthProvider>
    <App safeAreas theme={ios ? "ios": "material"}>
      {/*<Head>*/}
      {/*  <title>Khoai Lang Châu Thành</title>*/}
      {/*  <meta*/}
      {/*      name="viewport"*/}
      {/*      content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, viewport-fit=cover"*/}
      {/*  />*/}
      {/*</Head>*/}
      <Component {...pageProps} />
      <Nav/>
    </App>
      </AuthProvider>)
}
