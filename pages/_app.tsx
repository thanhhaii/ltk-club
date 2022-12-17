import type { AppProps } from 'next/app';
import { useCallback } from 'react';
import { NextPage } from 'next';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Provider } from 'react-redux';

// Styles
import '../styles/globals.css';
import 'antd/dist/reset.css';
import DashboardLayout from '@components/layout/dashboard/DashboardLayout';
import { persist, store } from '@infrastructure/storage/configurationStore';
import { PersistGate } from 'redux-persist/integration/react';
import { Config } from '@services/config/config';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  emptyLayout?: boolean
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = useCallback(() => {
    if (Component.emptyLayout) {
	  return <Component {...pageProps} />;
    }

    return (
      <DashboardLayout>
		  <Component {...pageProps} />
      </DashboardLayout>
    );
  }, [Component, pageProps]);

  return (
    <Provider store={store}>
	  <PersistGate persistor={persist} loading={null}>
		  <GoogleOAuthProvider
			  clientId={Config.CLIENT_ID}>
		  {getLayout()}
		  </GoogleOAuthProvider>
	  </PersistGate>
    </Provider>
  );
}

export default MyApp;
