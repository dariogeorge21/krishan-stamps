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
      {
        protocol: 'https',
        hostname: 'stampvala.com',
      },
      {
        protocol: 'https',
        hostname: 'www.stampsonclick.com',
      },
      {
        protocol: 'https',
        hostname: 'www.shivanienterprises.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.simplystamps.com',
      },
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
      },
      {
        protocol: 'https',
        hostname: '4.imimg.com',
      },
      {
        protocol: 'https',
        hostname: '5.imimg.com',
      },
      {
        protocol: 'https',
        hostname: 'tiimg.tistatic.com',
      },
      {
        protocol: 'https',
        hostname: 'i.shgcdn.com',
      },
      {
        protocol: 'https',
        hostname: 'www.google.com',
      },
      {
        protocol: 'https',
        hostname: 'images.jdmagicbox.com',
      },
      {
        protocol: 'https',
        hostname: 'play-lh.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'media.licdn.com',
      },
      {
        protocol: 'https',
        hostname: 'akm-img-a-in.tosshub.com',
      },
      {
        protocol: 'https',
        hostname: 'etimg.etb2bimg.com',
      },
      {
        protocol: 'https',
        hostname: 'is1-ssl.mzstatic.com',
      },
      {
        protocol: 'https',
        hostname: 'wpblogassets.paytm.com',
      },

    ],
  },
};

export default nextConfig;
