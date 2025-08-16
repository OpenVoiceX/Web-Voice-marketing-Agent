import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '',
        pathname: '/**',
      },
    ],
    // Remove unoptimized to enable Next.js image optimization for GitHub avatars
    // unoptimized: true,
  },
}

export default nextConfig
