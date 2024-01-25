// eslint-disable-next-line @typescript-eslint/no-var-requires
const linguiConfig = require('./lingui.config')
/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@polkadot/.*'],
  i18n: {
    locales: linguiConfig.locales,
    defaultLocale: 'en',
    // localeDetection: false,
  },
  experimental: {
    swcPlugins: [
      [
        '@lingui/swc-plugin',
        {
          // the same options as in .swcrc
        },
      ],
    ],
  },
  output: 'standalone',
}

module.exports = nextConfig
