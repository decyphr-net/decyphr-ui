import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useIntl } from 'react-intl';
import Button from '../../components/elements/Button';

const Login: React.FC = () => {
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
            <p>Login to Decyphr</p>
          </div>

          <form>
            <div className="field">

              <div className="control has-icons-right">
                <label className="label" htmlFor="username">Username</label>
                <input className="input" id="username" type="text" />
                <span className="icon is-small is-right">
                  <i className="fa fa-user" />
                </span>
              </div>
            </div>

            <div className="field">

              <div className="control has-icons-right">
                <label className="label" htmlFor="password">
                  Password
                </label>
                <input className="input" id="password" type="password" />
                <span className="icon is-small is-right">
                  <i className="fa fa-key" />
                </span>
              </div>
            </div>
            <div className="has-text-centered">
              <Link
                href="/getting-started/"
                locale={locale}
              >
                <Button text="Login" color="primary" as="a" />
              </Link>
            </div>
            <div className="has-text-centered">
              <Link href="/accounts/register" locale={locale}>
                <a>Don't have an account? Sign up now!</a>
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

export default Login;
