import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true, // Ignore TypeScript errors during build
  },
  images: {
    domains: ["lh3.googleusercontent.com","avatars.githubusercontent.com"],
  },
};

export default nextConfig;
