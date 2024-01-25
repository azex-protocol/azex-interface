// eslint-disable-next-line @typescript-eslint/no-var-requires
const { formatter } = require('@lingui/format-po')

const locales = ['en']

if (process.env.NODE_ENV !== 'production') {
  locales.push('pseudo')
}

/** @type {import('@lingui/conf').LinguiConfig} */
module.exports = {
  locales,
  sourceLocale: 'en',
  pseudoLocale: 'pseudo',
  fallbackLocales: {
    default: 'en',
  },
  catalogs: [
    {
      path: '<rootDir>/src/translations/locales/{locale}/messages',
      include: ['src/pages', 'src/components', 'src/hooks', 'src/theme', 'src/translations', 'src/utils'],
    },
  ],
  format: formatter({ origins: false }),
}
