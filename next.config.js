/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['avatars.githubusercontent.com', 'storage.martywallace.com'],
  },
  redirects: async () => [],
};

module.exports = nextConfig;
