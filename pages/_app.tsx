import type { AppProps } from 'next/app';
import { useCallback, useMemo } from 'react';
import { NextPage } from 'next';
import { GoogleOAuthProvider } from '@react-oauth/google';

// Styles
import '../styles/globals.css';
import 'antd/dist/reset.css';
import DashboardLayout from "@components/layout/dashboard/DashboardLayout"

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  emptyLayout?: boolean
}

// client ID: 341057934981-l783makn7sr91la06u825vn370s7ge2h.apps.googleusercontent.com

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = useCallback(() => {
    if (Component.emptyLayout) {
      return <Component {...pageProps} />
    }

    return (
      <DashboardLayout>
        <Component {...pageProps} />
      </DashboardLayout>
    )
  }, [Component])

  return (
    <GoogleOAuthProvider clientId='341057934981-l783makn7sr91la06u825vn370s7ge2h.apps.googleusercontent.com' >
      {getLayout()}
    </GoogleOAuthProvider>
  )
}

export default MyApp
