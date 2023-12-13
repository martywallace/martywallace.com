/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['avatars.githubusercontent.com'],
  },
  redirects: async () => [
    {
      source: '/thoughts-on-graphql-after-2-years',
      destination:
        'https://medium.com/@marty.wallace/thoughts-on-graphql-after-2-years-4c4d58e3059b',
      permanent: true,
    },
  ],
};

module.exports = nextConfig;
