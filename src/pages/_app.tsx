import React from 'react';
import { AppProps } from 'next/app';
import { IntlProvider } from 'react-intl';
import { useRouter } from 'next/router';
import * as locales from '../../content/locale';
import 'react-bulma-components/dist/react-bulma-components.min.css';

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { locale, defaultLocale, pathname } = router;
  const localeCopy = locales[locale];
  const messages = localeCopy[pathname];

  return (
    <IntlProvider
      locale={locale}
      defaultLocale={defaultLocale}
      messages={messages}
    >
      <Component {...pageProps} />
    </IntlProvider>
  );
}

export default App;
