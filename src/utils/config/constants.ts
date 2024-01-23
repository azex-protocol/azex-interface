export const SUPPORTED_LOCALES = ['en']
export const DEFAULT_LOCALE = 'en'

export const NETWORK = import.meta.env.VITE_NETWORK_ENV
export const APP_URL = import.meta.env.VITE_URL

export const FONT_FAMILY = 'Anuphan'
export const DATE_FORMAT = 'YYYY/MM/DD'
export const DAYJS_FULL_DATE_FORMAT = 'YYYY/MM/DD - HH:mm'
export const DEFAULT_LIMIT = 20
export const DEFAULT_LIMIT_VALUES = [20, 50, 100]

export const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,64}$/
export const EMAIL_REGEX = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/
