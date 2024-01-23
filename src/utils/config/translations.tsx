// eslint-disable-next-line no-restricted-imports
import { t } from '@lingui/macro'
import { ReactNode } from 'react'

type ObjectTrans = {
  [key: string]: ReactNode
}

export const ERRORS: ObjectTrans = {
  Forbidden: t`You are not authorized to perform this action`,
  UNKNOWN_ERROR: t`The server is not responding, please try again later!`,
  NETWORK_ERROR: t`The server is not responding, please try again later!`,
  limit_rate: t`Please wait a few minutes before you try again`,
}
