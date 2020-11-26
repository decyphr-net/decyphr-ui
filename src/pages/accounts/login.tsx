import React from 'react';
import { useRouter } from 'next/router';
import { useIntl } from 'react-intl';

const Login: React.FC = () => {
  const { formatMessage } = useIntl();
  const f = (id) => formatMessage({ id });
  const router = useRouter();
  const { locale, locales, defaultLocale } = router;

  return (
    <div className="columns is-vcentered has-mustard-bg">
      <div className="login column is-4">
        <section className="section">
          <div className="has-centered-text">
            <h1>Decyphr</h1>
          </div>

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
            <label className="label" htmlFor="password">Password</label>
              <input className="input" id="password" type="password" />
              <span className="icon is-small is-right">
                <i className="fa fa-key" />
              </span>
            </div>
          </div>
          <div className="has-text-centered">
            <a href="/" className="button is-vcentered is-primary">Login</a>
          </div>
          <div className="has-text-centered">
            <a href="signup.html"> Don't you have an account? Sign up now!</a>
          </div>
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
