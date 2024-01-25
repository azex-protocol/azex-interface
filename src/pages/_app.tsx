// eslint-disable-next-line no-restricted-imports
import { t } from '@lingui/macro'
import { I18nProvider } from '@lingui/react'
import { UseInkathonProvider, alephzeroTestnet } from '@scio-labs/use-inkathon'
import type { AppProps } from 'next/app'
import 'rc-dropdown/assets/index.css'
import 'rc-slider/assets/index.css'
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'
import { ToastContainer } from 'react-toastify'
// eslint-disable-next-line no-restricted-imports
import 'react-toastify/dist/ReactToastify.css'
// eslint-disable-next-line no-restricted-imports
import 'react-tooltip/dist/react-tooltip.css'
import { ThemeProvider } from 'styled-components/macro'
import { setLocale } from 'yup'

import Footer from 'components/@layouts/Footer'
import Navbar from 'components/@layouts/Navbar'
import PageScript from 'components/@pages/Script'
import { Box, Flex } from 'theme/base'
import ThemedGlobalStyle from 'theme/styles'
import theme from 'theme/theme'
import { useLinguiInit } from 'translations/utils'
import { FOOTER_HEIGHT, NAVBAR_HEIGHT } from 'utils/config/constants'
import { formatNumber } from 'utils/helpers/format'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      notifyOnChangeProps: 'tracked',
      refetchOnWindowFocus: false,
    },
  },
})

export default function MyApp({ Component, pageProps }: AppProps) {
  const i18n = useLinguiInit(pageProps.i18n)
  yupSetLocale()

  return (
    <UseInkathonProvider appName="azex" defaultChain={alephzeroTestnet}>
      <I18nProvider i18n={i18n}>
        <ThemeProvider theme={theme(true)}>
          <ThemedGlobalStyle />
          <QueryClientProvider client={queryClient}>
            <Flex flexDirection="column" width="100vw" height="100vh" margin="0px auto" maxHeight="100%">
              <Navbar height={NAVBAR_HEIGHT} />

              <Box id="app_main__wrapper" width="100%" flex="1" sx={{ position: 'relative', overflowY: 'auto' }}>
                <Hydrate state={pageProps.dehydratedState}>
                  <Component {...pageProps} />
                </Hydrate>
                <ToastContainer theme="dark" limit={3} autoClose={5000} />
              </Box>
              <Footer height={FOOTER_HEIGHT} />
            </Flex>
          </QueryClientProvider>
          <PageScript />
        </ThemeProvider>
      </I18nProvider>
    </UseInkathonProvider>
  )
}

function yupSetLocale() {
  setLocale({
    mixed: {
      required({ label }) {
        return t`${label} is required`
      },
    },
    number: {
      min({ label, min }) {
        return t`${label} must be greater than or equal to ${formatNumber(min)}`
      },
      max({ label, max }) {
        return t`${label} must be less than or equal to ${formatNumber(max)}`
      },
      integer({ label }) {
        return t`${label} must be an integer`
      },
    },
    string: {
      email({ label }) {
        return t`${label} must be a valid email`
      },
    },
  })
}
