/** @type {import('next').NextConfig} */
const nextConfig = {
  // i18n: {
  //   locales: ['en-US', 'fa-AF'],
  //   defaultLocale: 'en-US',
  // },
  trailingSlash: true,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
