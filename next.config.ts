import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images : {
    remotePatterns : [
      {
        protocol: 'https',
        hostname: 'd1o05b1h3q55ol.cloudfront.net',
      }
    ]
  }
};

export default nextConfig;
