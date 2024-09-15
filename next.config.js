/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/:path(takas|mezat|ikinciel)?/giris-yap',
        destination: '/login'
      },
      {
        source: '/:path(takas|mezat|ikinciel)?/kayit-ol',
        destination: '/register'
      },

      {
        destination: '/market/my-account/announcement-preferences',
        source: '/hesabim/duyuru-tercihlerim'
      },
      {
        destination: '/mezat/my-account/announcement-preferences',
        source: '/mezat/hesabim/duyuru-tercihlerim'
      },
      {
        destination: '/mezat/my-account/my-lives',
        source: '/mezat/hesabim/yayinlarim'
      },
      {
        destination: '/mezat/my-account/chat',
        source: '/mezat/hesabim/mesajlar'
      },
      {
        destination: '/mezat/my-account/blocked-users',
        source: '/mezat/hesabim/engellenmis-kisiler'
      },
      {
        destination: '/market/my-account/user-info',
        source: '/hesabim/kullanici-bilgilerim'
      },
      {
        destination: '/mezat/my-account/user-info',
        source: '/mezat/hesabim/kullanici-bilgilerim'
      },
      {
        destination: '/market/my-account/address',
        source: '/hesabim/adres-bilgilerim'
      },
      {
        source: '/mezat/hesabim/adres-bilgilerim',
        destination: '/mezat/my-account/address'
      },
      {
        destination: '/market/my-account/orders',
        source: '/hesabim/siparislerim'
      },
      {
        destination: '/market/my-account/sellerQuestions',
        source: '/hesabim/satici-sorularim'
      },
      {
        destination: '/market/my-account/reviews',
        source: '/hesabim/degerlendirmelerim'
      },
      {
        destination: '/market/my-account/cards',
        source: '/hesabim/kayitli-kartlarim'
      },
      {
        source: '/mezat/hesabim/kayitli-kartlarim',
        destination: '/mezat/my-account/cards'
      },
      {
        destination: '/market/my-account/favorites',
        source: '/hesabim/favorilerim'
      },
      {
        destination: '/market/my-account/orders/:slug*',
        source: '/hesabim/siparislerim/:slug*'
      },
      {
        destination: '/market/product/:slug*',
        source: '/urun/:slug*'
      },
      {
        destination: '/market/basket',
        source: '/sepetim'
      },
      {
        destination: '/market/checkout',
        source: '/odeme'
      },
      {
        destination: '/market/category/:slug*',
        source: '/kategori/:slug*'
      },
      {
        destination: '/market/store/:slug*',
        source: '/magaza/:slug*'
      },
      {
        destination: '/common/pageDetail/:slug*',
        source: '/s/:slug*'
      },
      {
        destination: '/market/my-account/',
        source: '/hesabim'
      },
      {
        destination: '/mezat/other-user-profile/:slug*',
        source: '/mezat/kullanici/:slug*'
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        hostname: 'raw.githubusercontent.com',
        protocol: 'https'
      },
      {
        hostname: 'editor.gormeklazim.com',
        protocol: 'https'
      },
      {
        hostname: 'picsum.photos',
        protocol: 'https'
      },
      {
        hostname: 'i.imgur.com',
        protocol: 'https'
      },
      {
        hostname: 'placeimg.com',
        protocol: 'https'
      },
      {
        hostname: 'minio-server-rd2m.onrender.com',
        protocol: 'https'
      },
      {
        hostname: 'cdn.jsdelivr.net',
        protocol: 'https'
      },
      {
        hostname: 'cdn.dsmcdn.com',
        protocol: 'https'
      },
      {
        hostname: 'cdn.gormeklazim.com',
        protocol: 'https'
      }
    ],
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    formats: ['image/avif', 'image/webp'],
    contentDispositionType: 'attachment',
    dangerouslyAllowSVG: true
  },
  i18n: {
    localeDetection: false,
    locales: ['tr', 'en'],
    defaultLocale: 'en'
  },
  experimental: {
    optimizePackageImports: ['lodash', 'axios']
  },
  swcMinify: true
};

module.exports = nextConfig;
