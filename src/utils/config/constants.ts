export const SUPPORTED_LOCALES = ['en']
export const DEFAULT_LOCALE = 'en'

export const NETWORK = process.env.REACT_APP_NETWORK_ENV
export const APP_URL = process.env.REACT_APP_URL

export const FONT_FAMILY = 'Anuphan'
export const DATE_FORMAT = 'YYYY/MM/DD'
export const DAYJS_FULL_DATE_FORMAT = 'YYYY/MM/DD - HH:mm'
export const DEFAULT_LIMIT = 20
export const DEFAULT_LIMIT_VALUES = [20, 50, 100]

export const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,64}$/
export const EMAIL_REGEX = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/

export const NAVBAR_HEIGHT = 60
export const FOOTER_HEIGHT = 40

export const LINKS = {
  website: 'https://azex.xyz',
  webapp: 'https://app.azex.xyz',
  arbitrumExplorer: 'https://arbiscan.io',
  twitter: '/',
  discord: '/',
  telegram: '/',
  docs: 'https://docs.azex.xyz/',
  policy: 'https://docs.azex.xyz/another/privacy-policy',
  termOfUse: 'https://docs.azex.xyz/another/terms-of-service',
}
