import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useIntl } from 'react-intl';
import APIInterface from '../../utils/api//client';
import Button from '../../components/elements/Button';
import Input from '../../components/elements/Input';

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errors, setErrors] = useState<Array<any>>([])

  const { formatMessage } = useIntl();
  const f = (id) => formatMessage({ id });
  const router = useRouter();
  const { locale, locales, defaultLocale } = router;

  useEffect(() => {
    if (localStorage.getItem('token')) {
      router.push('/dashboard', `/${locale}/dashboard`)
    }
  })

  const handleSubmission = () => {
    const apiInterface = new APIInterface('login', {
      username: email,
      password: password
    });
    apiInterface.request().then((response) => {
      localStorage.setItem('token', response.auth_token);
      router.push('/dashboard', `/${locale}/dashboard`)
    }).catch((errors) => {
      for (let error in errors.data) {
        let inputField = document.querySelector(`#${error}`);
        inputField.classList.add('is-danger');

        let inputParent = inputField.parentElement;

        let node = document.createElement('p');
        let textnode = document.createTextNode(errors.data[error]);
        node.appendChild(textnode);
        node.classList.add('help');
        node.classList.add('is-danger');
        inputParent.appendChild(node);
      }
    })
  }

  return (
    <div className="columns is-vcentered has-white-bg">
      <div className="login column is-4">
        <section className="section">
          <div className="has-centered-text">
            <h1>Decyphr</h1>
            <p>{f(`formHeader`)}</p>
          </div>

          <div className="field">
            <div className="control">
              <label className="label" htmlFor="username">{f(`username`)}</label>
              <Input id="username" type="text" onChange={(e) => setEmail(e.target.value)} />
            </div>
          </div>

          <div className="field">
            <div className="control">
              <label className="label" htmlFor="password">
                {f(`password`)}
              </label>
              <Input id="password" type="password" onChange={(e) => setPassword(e.target.value)} />
            </div>
          </div>
          <div className="has-text-centered">
            <Button text={f(`loginButton`)} color="primary" as="button" onClick={handleSubmission} />

          </div>
          <div className="has-text-centered">
            <Link href="/accounts/register" locale={locale}>
              <a>{f(`signUpLink`)}</a>
            </Link>
          </div>
        </section>
      </div>
      <div className="interactive-bg column is-8">
        <img
          alt={f(`imgAlt`)}
          className="panel-img"
          src="/img/login-bg.jpg"
        />
      </div>
    </div>
  );
};

export default Login;
