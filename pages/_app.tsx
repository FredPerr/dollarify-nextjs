import '../styles/globals.css'
import { CacheProvider } from '@emotion/react'
import CssBaseline from '@mui/material/CssBaseline'
import { withTRPC } from '@trpc/next';
import type { AppRouter } from './api/trpc/[trpc]';
import type { AppProps } from 'next/app'
import { emotionCache } from 'pages/_document';
import type { NextPageWithLayout } from 'layouts';
import { NextComponentType } from 'next';

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

export default withTRPC<AppRouter>({
  config({ ctx }) {
    /**
     * If you want to use SSR, you need to use the server's full URL
     * @link https://trpc.io/docs/ssr
     */
    const url = process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}/api/trpc`
      : 'http://localhost:3000/api/trpc';
    return {
      url,
      /**
       * @link https://react-query.tanstack.com/reference/QueryClient
       */
      // queryClientConfig: { defaultOptions: { queries: { staleTime: 60 } } },
    };
  },
  /**
   * @link https://trpc.io/docs/ssr
   */
  ssr: true,
})(MyApp as NextComponentType);


export { emotionCache }
// TODO: Add translation support with next-i18next