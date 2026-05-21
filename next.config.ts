// import { NextConfig } from 'next';
// import createNextIntlPlugin from 'next-intl/plugin';

// // Укажите правильный путь к i18n файлу
// const withNextIntl = createNextIntlPlugin('./i18n.ts');

// const nextConfig: NextConfig = {
//     output: 'standalone',

//     typescript: {
//         ignoreBuildErrors: true,
//     },
//     eslint: {
//         ignoreDuringBuilds: true,
//     },

//     images: {
//         unoptimized: true,
//         remotePatterns: process.env.NODE_ENV === 'development'
//             ? [
//                 {
//                     protocol: 'http',
//                     hostname: 'host.docker.internal', // для локального доступа к Laravel в контейнере
//                     port: '8088',
//                     pathname: '/storage/**',
//                 },
//             ]
//             : [
//                 {
//                     protocol: 'https',
//                     hostname: 'turniket.am', // основной домен для продакшн
//                     pathname: '/storage/**',
//                 },
//             ],

//     },

//     // images: {
//     //     // domains: ['localhost'],
//     //     unoptimized: true,
//     //     remotePatterns: [
//     //         {
//     //             protocol: 'http',
//     //             hostname: 'localhost',
//     //             port: '8088',
//     //             pathname: '/storage/**',
//     //         },
//     //         {
//     //             protocol: 'http',
//     //             hostname: 'host.docker.internal',
//     //             port: '8088',
//     //             pathname: '/storage/**',
//     //         },
//     //         {
//     //             protocol: 'http',
//     //             hostname: 'turnstile_nginx',
//     //             pathname: '/storage/**',
//     //         },

//     //         {
//     //             protocol: 'http',
//     //             hostname: 'localhost',
//     //             port: '3000',
//     //             pathname: '/storage/**',
//     //         },

//     //         {
//     //             protocol: 'https',
//     //             hostname: 'turniket.am',
//     //             pathname: '/storage/**',
//     //         },

//     //         // PROD
//     //         {
//     //             protocol: 'https',
//     //             hostname: 'turnstile-admin.turniket.am',
//     //             pathname: '/storage/**',
//     //         },

//     //     ],

//     //     // deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
//     //     // imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
//     //     // minimumCacheTTL: 60,
//     // },

// };

// export default withNextIntl(nextConfig);

import path from "path";
import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

// Укажите правильный путь к i18n файлу
const withNextIntl = createNextIntlPlugin("./i18n.ts");

const nextConfig: NextConfig = {
  output: "standalone",

  // FIX WARNING
  outputFileTracingRoot: path.join(__dirname),

  typescript: {
    ignoreBuildErrors: true,
  },

  eslint: {
    ignoreDuringBuilds: true,
  },

  images: {
    unoptimized: true,

    remotePatterns:
      process.env.NODE_ENV === "development"
        ? [
            {
              protocol: "http",
              hostname: "host.docker.internal",
              port: "8088",
              pathname: "/storage/**",
            },
          ]
        : [
            {
              protocol: "https",
              hostname: "turniket.am",
              pathname: "/storage/**",
            },
          ],
  },
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NEXT_PUBLIC_API_KEY: process.env.NEXT_PUBLIC_API_KEY,
  },
};

export default withNextIntl(nextConfig);

// const nextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "turnstile-main.onrender.com",
//       },
//     ],
//   },
// };

// module.exports = nextConfig;
