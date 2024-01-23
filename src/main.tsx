/* eslint-disable no-restricted-imports */
import * as Sentry from '@sentry/react'
import Providers from 'Providers'
import 'rc-dropdown/assets/index.css'
import 'rc-slider/assets/index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import 'react-toastify/dist/ReactToastify.css'
import 'react-tooltip/dist/react-tooltip.css'

import App from './pages/App'
import reportWebVitals from './reportWebVitals'

declare global {
  interface Window {
    ethereum: any
    gtag: any
  }
}

if (import.meta.env.VITE_SENTRY_ENABLE === 'true') {
  let dns
  let rate
  switch (import.meta.env.VITE_NETWORK_ENV) {
    case 'devnet':
      dns = ''
      rate = 1.0
      break
    case 'mainnet':
      dns = ''
      rate = 0.4
      break
  }
  Sentry.init({
    dsn: dns,

    integrations: [new Sentry.BrowserTracing()],

    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: rate,
  })
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
