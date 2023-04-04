/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["localhost", "res.cloudinary.com", "picsum.photos"],
  },
};

module.exports = nextConfig;
