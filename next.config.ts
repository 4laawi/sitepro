import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.hostino.ma',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'image.devnetcorp.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.prod.website-files.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/creation-site-web/:city',
        destination: '/creation-site-web-:city',
        permanent: true,
      },
      {
        source: '/applications-mobiles',
        destination: '/application-mobile-maroc',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
