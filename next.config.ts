import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
    async rewrites() {
    return [
      {
      source: '/api/:path*',
      destination: 'https://api.i-vocab.com/:path*',
      },
    ]
  },
};

export default nextConfig;