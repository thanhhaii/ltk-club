import type { AppProps } from 'next/app';
import DashboardLayout from "@components/layout/dashboard/DashboardLayout"

// Styles
import '../styles/globals.css';
import 'antd/dist/antd.css';
import { NextPage } from 'next';
import { useCallback, useMemo } from 'react';

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
  }, [])

  return (
    <>
      {getLayout()}
    </>
  )
}

export default MyApp
