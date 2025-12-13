import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
          hostname: 'img.rocket.new',
        },
        {
          protocol: 'https',
          hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
