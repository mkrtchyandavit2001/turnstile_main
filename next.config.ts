import path from "path";
import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n.ts");

const nextConfig: NextConfig = {
  output: "standalone",
  outputFileTracingRoot: path.join(__dirname),

  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },

  // ✅ Ավելացրու սա
  async rewrites() {
    return [
      {
        source: "/backend/:path*",
        destination: "https://turnstile-admin.turniket.am/:path*",
      },
    ];
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
            {
              protocol: "https",
              hostname: "turnstile-admin.turniket.am",
              pathname: "/storage/**",
            },
          ],
  },
};

export default withNextIntl(nextConfig);