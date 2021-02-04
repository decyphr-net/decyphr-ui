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

  const validateForm = () => {
    let usernameField = document.querySelector('#username');
    let passwordField = document.querySelector('#password');
    let usernameParentField = usernameField.parentElement;
    let passwordParentField = passwordField.parentElement;
    let valid = true;

    if (!email) {
      usernameField.classList.add('is-danger');

      if (!(usernameParentField.querySelectorAll('p').length > 0)) {
        let node = document.createElement('p');
        let textnode = document.createTextNode('Please enter a username');
        node.appendChild(textnode);
        node.setAttribute('id', 'username-help')
        node.classList.add('help');
        node.classList.add('is-danger');
        usernameParentField.appendChild(node);
      }
      valid = false;
    }

    if (!password) {
      passwordField.classList.add('is-danger');

      if (!(passwordParentField.querySelectorAll('p').length > 0)) {
        let node = document.createElement('p');
        let textnode = document.createTextNode('Please enter a password');
        node.appendChild(textnode);
        node.setAttribute('id', 'password-help')
        node.classList.add('help');
        node.classList.add('is-danger');
        passwordParentField.appendChild(node);
      }
      valid = false;
    }

    if (email && usernameField.classList.contains('is-danger')) {
      usernameField.classList.remove('is-danger');
      if (usernameParentField.querySelectorAll('p').length > 0) {
        let helpText = document.getElementById('username-help');
        usernameParentField.removeChild(helpText);
      }
    }

    if (password && passwordParentField.querySelectorAll('p').length > 0) {
      usernameField.classList.remove('is-danger');
      let helpText = document.getElementById('password-help');
      passwordParentField.removeChild(helpText);
    }

    return valid;
  }

  const renderErrors = (errors: any) => {
    let usernameField = document.querySelector('#username');
    let passwordField = document.querySelector('#password');
    let errorsParagraph = document.querySelector('#errors');

    usernameField.classList.add('is-danger');
    passwordField.classList.add('is-danger');
    errorsParagraph.innerHTML = errors[0];
  }

  const handleSubmission = () => {
    if (validateForm()) {
      const apiInterface = new APIInterface('login', {
        username: email,
        password: password
      });
      apiInterface.request().then((response) => {
        localStorage.setItem('token', response.auth_token);
        router.push('/dashboard', `/${locale}/dashboard`);
      }).catch((errors) => renderErrors(errors.data))
    }
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
          <div className="field">
            <div className="control">
              <p className="help is-danger" id="errors"></p>
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
