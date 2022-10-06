import '../styles/globals.css'
import { CacheProvider } from '@emotion/react'
import CssBaseline from '@mui/material/CssBaseline'

import type { AppProps } from 'next/app'
import { emotionCache } from 'pages/_document';
import type { NextPageWithLayout } from 'layouts';

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {

  const getLayout = Component.getLayout ?? ((page) => page)

  return getLayout(
    <CacheProvider value={emotionCache}>
      <CssBaseline />
      <Component {...pageProps} />
    </CacheProvider>
  )
}

export default MyApp
export { emotionCache }
// TODO: Add translation support with next-i18next