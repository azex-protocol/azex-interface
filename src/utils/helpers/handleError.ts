// eslint-disable-next-line no-restricted-imports
import { t } from '@lingui/macro'
import { AxiosError } from 'axios'

export const getAxiosErrorMessage = (error: AxiosError): string => {
  if (!error?.response?.data) return t`An error occurs. Please try again`
  return (error.response.data as any).message
}

export const getErrorMessage = (err: any) => {
  if (err.response) {
    return getAxiosErrorMessage(err)
  }
  return err.message
}
