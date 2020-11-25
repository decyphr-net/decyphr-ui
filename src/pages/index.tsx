import React from 'react';
import { useRouter } from 'next/router';
import { useIntl } from 'react-intl';

const Home: React.FC = () => {
  const { formatMessage } = useIntl();
  const f = (id) => formatMessage({ id });
  const router = useRouter();
  const { locale, locales, defaultLocale } = router;

  return (
    <div>
      <h1>{f(`hello`)}</h1>
      <p>{f(`welcomeMessage`)}</p>
      <br />
      <p>Current locale: {locale}</p>
      <p>Default locale: {defaultLocale}</p>
      <p>Configured locales: {JSON.stringify(locales)}</p>
    </div>
  );
};

export default Home;
