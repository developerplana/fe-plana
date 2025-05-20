// next.config.ts
import { NextConfig } from 'next';
import withNextIntl from 'next-intl/plugin';

const nextConfig: NextConfig = {
  output: 'standalone',
  async headers(){
    return [
      {
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
          { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
        ]
      },
      {
        source: "/search/(.*)",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
          { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
        ]
      },
      {
        source: '/(.*)',
        headers: [
          {key: 'Strict-Transport-Security',value: 'max-age=31536000; includeSubDomains; preload'},
          {key: 'Permissions-Policy', value: 'camera=*, microphone=(), browsing-topics=()'},
          {key: 'Referrer-Policy',value: 'origin-when-cross-origin'},
          {key: 'X-Frame-Options',value: 'SAMEORIGIN'},
          {key: 'X-Content-Type-Options',value: 'nosniff'},
        ],
      },
    ]
  },
  // next.config.js
    images: {
      remotePatterns: [
        {
          protocol: 'http',  // or 'https', depending on your setup
          hostname: '127.0.0.1',
        },
        {
          protocol: 'http',  // or 'https', depending on your setup
          hostname: '152.42.215.103',
        },
        {
          protocol: 'http',
          hostname: 'admin.plana.vision',
          pathname: '/storage/uploads/**',
        },
      ],
    },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${process.env.NEXT_PUBLIC_CMS_BASE_URL}` + '/api/:path*'
      },
      {
        source: '/storage/uploads/:path*',
        destination: `${process.env.NEXT_PUBLIC_CMS_BASE_URL}` +'/storage/uploads/:path*',
      },
    ]
  },
  // Add other Next.js options here if needed
};

// Pass your i18n config path to next-intl
export default withNextIntl('./i18n.ts')(nextConfig);
