import type { AppProps } from 'next/app';
import { useCallback, useMemo } from 'react';
import { NextPage } from 'next';

// Styles
import '../styles/globals.css';
import 'antd/dist/reset.css';
import DashboardLayout from "@components/layout/dashboard/DashboardLayout"

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  emptyLayout?: boolean
}

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
    <>
      {getLayout()}
    </>
  )
}

export default MyApp
