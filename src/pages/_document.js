import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
        <Head>
            <title>{'Khoai Lang Châu Thành'}</title>
            <meta property='og:type' content={'web'} />
            <meta property='og:site_name' content={'mKara'} />
            <meta property='og:description' content={'karaoke'} />
            <meta property='og:title' content={'mKara - Karaoke'} />
            <meta name='image' property='og:image' content={'/mango.png'} />
            <meta
                name="format-detection"
                content="telephone=no, date=no, email=no, address=no"
            />
            <meta name='msapplication-TileColor' content='#F53838' />
            <meta
                name='msapplication-TileImage'
                content='/favicon/ms-icon-144x144.png'
            />
            {/* Accent color on supported browser */}
            <meta name='theme-color' content='#F53838' />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossOrigin="anonymous" referrerpolicy="no-referrer" />
            <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/js/all.min.js" integrity="sha512-uKQ39gEGiyUJl4AI6L+ekBdGKpGw4xJ55+xyJG7YFlJokPNYegn9KwQ3P8A7aFQAUtUsAQHep+d/lrGqrbPIDQ==" crossOrigin="anonymous" referrerpolicy="no-referrer"></script>
            <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
                  integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
                  crossOrigin=""/>
            <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
                    integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
                    crossOrigin=""></script>
            <link rel="stylesheet" href="https://unpkg.com/leaflet.locatecontrol@0.72.0/dist/L.Control.Locate.min.css" />
            <script src="https://unpkg.com/leaflet.locatecontrol@0.72.0/dist/L.Control.Locate.min.js"></script>


        </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
