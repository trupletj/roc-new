/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  // generateEtags: false,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "192.168.10.102",
        port: "8000",
        pathname: "/storage/**",
      },
    ],
    domains: [
      "localhost",
      "api.app-roc.com",
      "api.roc.mn",
      "www.api.roc.mn",
      "res.cloudinary.com",
      "picsum.photos",
      "cdn.shopify.com",
    ],
  },
};

module.exports = nextConfig;
