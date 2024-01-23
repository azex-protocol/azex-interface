import { LanguageProvider } from 'i18n'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter } from 'react-router-dom'
import ThemeProvider from 'theme'

import ThemedGlobalStyle from 'theme/styles'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      notifyOnChangeProps: 'tracked',
      refetchOnWindowFocus: false,
    },
  },
})

const Providers = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  return (
    <ThemeProvider>
      <ThemedGlobalStyle />
      <LanguageProvider>
        <QueryClientProvider client={queryClient}>
          {/* <Updaters /> */}
          <BrowserRouter>{children}</BrowserRouter>
        </QueryClientProvider>
      </LanguageProvider>
    </ThemeProvider>
  )
}

export default Providers
