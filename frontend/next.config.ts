import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === 'production';
const backendUrl = process.env.BACKEND_URL || (isProduction ? undefined : 'http://localhost:5001');

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  async rewrites() {
    // In production, let the deployment reverse proxy route /api/v1 to the backend
    // unless an explicit backend origin is configured for a separate hosting setup.
    if (!backendUrl) return [];

    return [
      {
        source: '/api/v1/:path*',
        destination: `${backendUrl}/api/v1/:path*`,
      },
    ];
  },
};

export default nextConfig;

