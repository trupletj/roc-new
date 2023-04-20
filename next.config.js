/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '192.168.10.214',
        port: '8000',
        pathname: '/storage/**',
      },
    ],
    domains: [
      "localhost",
      "api.app-roc.com",
      "res.cloudinary.com",
      "picsum.photos",
      "cdn.shopify.com",
    ],
  },
};

module.exports = nextConfig;
