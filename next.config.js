/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "localhost",
      "res.cloudinary.com",
      "picsum.photos",
      "cdn.shopify.com",
    ],
  },
};

module.exports = nextConfig;
