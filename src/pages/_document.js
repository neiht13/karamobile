import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
        <Head>
            <meta property='og:type' content={'web'} />
            <meta property='og:site_name' content={'mKara'} />
            <meta property='og:description' content={'karaoke'} />
            <meta property='og:title' content={'mKara - Karaoke'} />
            <meta name='image' property='og:image' content={'/mango.png'} />
        </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
