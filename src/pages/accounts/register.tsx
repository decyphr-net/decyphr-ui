import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useIntl } from 'react-intl';
import Button from '../../components/elements/Button';
import Input from '../../components/elements/Input';

const Register: React.FC = () => {
  const { formatMessage } = useIntl();
  const f = (id) => formatMessage({ id });
  const router = useRouter();
  const { locale, locales, defaultLocale } = router;

  return (
    <div className="columns is-vcentered has-white-bg">
      <div className="login column is-4">
        <section className="section">
          <div className="has-centered-text">
            <h1>Decyphr</h1>
            <p>Sign up to Decyphr</p>
          </div>

          <form>
            <div className="field">
              <label className="label" htmlFor="username">Username</label>
              <div className="control">
                <Input id="username" type="text" />
              </div>
            </div>

            <div className="field">
              <label className="label" htmlFor="password">Password</label>
              <div className="control">
                <Input id="password" type="password" />
              </div>
            </div>
            <div className="has-text-centered">
              <Link
                href="/getting-started/"
                locale={locale}
              >
                <Button text="Register" color="primary" as="a" />
              </Link>
            </div>
            <div className="has-text-centered">
              <Link href="/accounts/login" locale={locale}>
                <a>Already have an account? Sign in now</a>
              </Link>
            </div>
          </form>
        </section>
      </div>
      <div className="interactive-bg column is-8">
        <img
          alt="Student learning on computer"
          className="panel-img"
          src="/img/login-bg.jpg"
        />
      </div>
    </div>
  );
};

export default Register;
