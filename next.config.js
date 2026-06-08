/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/tools/salary-calculator',
  // Redirect root path for local development convenience
  async redirects() {
    return [
      {
        source: '/',
        destination: '/27-an-hour',
        permanent: false,
      },
    ];
  },
  // Ignore TypeScript and ESLint errors during build (quick fix)
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;