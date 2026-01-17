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
    ],
  },
};

export default nextConfig;
