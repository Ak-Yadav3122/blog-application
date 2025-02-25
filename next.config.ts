import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    remotePatterns:[
      {
        protocol:'https',
        hostname:"res.cloudinary.com"
      }
    ]
  },
  // disable the eslint during the build
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
