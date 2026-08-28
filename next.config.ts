import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/SCS-website',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;