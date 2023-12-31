import Head from "next/head";
import {useRouter} from "next/router";


// Default value for some meta data
const defaultMeta = {
    title: 'KhoaiCT',
    siteName: 'KhoaiCT',
    description:
        '',
    url: 'https://khoailangchauthanhdt.vn',
    type: 'website',
    display: 'fullscreen',
    robots: 'follow, index',
    image: 'https://khoailangchauthanhdt.vn/khoailang.png',
    author: 'Lorem Ipsum'
};
const favicons = [
    {
        rel: 'apple-touch-icon',
        sizes: '57x57',
        href: '/favicon/apple-touch-icon.png',
    },
    {
        rel: 'apple-touch-icon',
        sizes: '60x60',
        href: '/favicon/apple-touch-icon.png',
    },
    {
        rel: 'apple-touch-icon',
        sizes: '72x72',
        href: '/favicon/apple-touch-icon.png',
    },
    {
        rel: 'apple-touch-icon',
        sizes: '76x76',
        href: '/favicon/apple-touch-icon.png',
    },
    {
        rel: 'apple-touch-icon',
        sizes: '114x114',
        href: '/favicon/apple-touch-icon.png',
    },
    {
        rel: 'apple-touch-icon',
        sizes: '120x120',
        href: '/favicon/apple-touch-icon.png',
    },
    {
        rel: 'apple-touch-icon',
        sizes: '144x144',
        href: '/favicon/apple-touch-icon.png',
    },
    {
        rel: 'apple-touch-icon',
        sizes: '152x152',
        href: '/favicon/apple-touch-icon.png',
    },
    {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/favicon/apple-touch-icon.png',
    },
    {
        rel: 'mask-icon',
        href: '/favicon/safari-pinned-tab.svg',
        color: '#F59A9A',
    },
    {
        rel: 'icon',
        href: '/favicon/favicon.ico',
    },
    {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon/favicon-16x16.png',
    },
    {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon/favicon-32x32.png',
    },
    {
        rel: 'icon',
        type: 'image/png',
        sizes: '96x96',
        href: '/favicon/apple-touch-icon.png',
    },
    {
        rel: 'icon',
        type: 'image/png',
        sizes: '192x192',
        href: '/favicon/apple-touch-icon.png',
    },
    {
        rel: 'manifest',
        href: '/site.webmanifest',
    },
];

/**
 * - title
 * - siteName
 * - description
 * - url
 * - type
 * - robots
 * - image
 * - date
 * - author
 * - templateTitle
 * all field are optional (default value defined on defaultMeta)
 * @example
 * <SeoHead title="Page's Title" />
 */
const SeoHead = (props) => {
    const router = useRouter();
    const meta = {
        ...defaultMeta,
        ...props
    };

    // Use siteName if there is templateTitle
    // but show full title if there is none
    meta.title = props.templateTitle
        ? `${props.templateTitle} | ${meta.siteName}`
        : meta.title;

    return (
        <Head>
            <meta property='og:type' content={'web'}/>
            <meta property='og:site_name' content={'KLCT'}/>
            <meta property='og:description' content={'KLCT'}/>
            <meta property='og:title' content={'KLCT'}/>
            <meta name='image' property='og:image' content={'/khoailang.png'}/>
            <meta
                name="format-detection"
                content="telephone=no, date=no, email=no, address=no"
            />

            <meta name='theme-color' content='#F53838'/>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
                  integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
                  crossOrigin="anonymous" referrerpolicy="no-referrer"/>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/js/all.min.js"
                    integrity="sha512-uKQ39gEGiyUJl4AI6L+ekBdGKpGw4xJ55+xyJG7YFlJokPNYegn9KwQ3P8A7aFQAUtUsAQHep+d/lrGqrbPIDQ=="
                    crossOrigin="anonymous" referrerpolicy="no-referrer"></script>
            <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
                  integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
                  crossOrigin=""/>
            <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
                    integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
                    crossOrigin=""></script>
            <link rel="stylesheet" href="https://unpkg.com/leaflet.locatecontrol@0.72.0/dist/L.Control.Locate.min.css"/>
            <script src="https://unpkg.com/leaflet.locatecontrol@0.72.0/dist/L.Control.Locate.min.js"></script>


            <title>{meta.title}</title>
            <meta name='robots' content={meta.robots}/>
            <meta content={meta.description} name='description'/>
            <meta property='og:url' content={`${meta.url}${router.asPath}`}/>
            <link rel='canonical' href={`${meta.url}${router.asPath}`}/>
            {/* Favicons */}
            {favicons.map((linkProps) => (
                <link key={linkProps.href} {...linkProps} />
            ))}

            <meta name='msapplication-TileColor' content='#9d174d'/>
            <meta
                name='msapplication-TileImage'
                content='/favicon/apple-touch-icon.png'
            />
            {/* Accent color on supported browser */}
            <meta name='theme-color' content='#9d174d'/>
            <meta name='display' content='fullscreen'/>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, viewport-fit=cover"
            />
        </Head>
    );
};


export default SeoHead;