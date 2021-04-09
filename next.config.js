module.exports = {
  future: {
    webpack5: true,
  },
  i18n: {
    locales: ['de', 'en'],
    defaultLocale: 'de',
  },
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: '/:path*',
      },
      {
        source: '/:path*',
        destination: 'http://example.com/:path*',
      },
    ]
  },
}
