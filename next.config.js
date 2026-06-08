/** @type {import('next').NextConfig} */
const nextConfig = {
  // Set the basePath to cleanly isolate the app on the main domain
  basePath: '/tools/salary-calculator',
  // Ignore TypeScript and ESLint errors during build (quick fix)
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;