import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  transpilePackages: ['@phazr/react-custom-cursor'],

  // For local development with symlinks
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }

    // Handle symlinks for local development
    config.resolve.symlinks = false;
  },
};

export default nextConfig;
