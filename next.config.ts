import type { NextConfig } from 'next';

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  // images: {
  //   // formats: ['image/avif', 'image/webp', 'image/png', 'image/jpeg'],
  // },
  output: 'export',
  basePath: isProd ? `/y-lead-2026` : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;