import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useIntl } from 'react-intl';
import APIInterface from '../../utils/api//client';
import Button from '../../components/elements/Button';
import Input from '../../components/elements/Input';

const Register: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [nativeLanguage, setNativeLanguage] = useState<number>(1);
  const [newLanguage, setNewLanguage] = useState<number>(2);
  const [preferredLanguage, setPreferredLanguage] = useState<number>(1);
  const [errors, setErrors] = useState<Array<any>>([]);

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
    let emailField = document.querySelector('#email');
    let passwordField = document.querySelector('#password');
    let emailParentField = emailField.parentElement;
    let passwordParentField = passwordField.parentElement;
    let valid = true;

    if (!email) {
      emailField.classList.add('is-danger');

      if (!(emailParentField.querySelectorAll('p').length > 0)) {
        let node = document.createElement('p');
        let textnode = document.createTextNode('Please enter an email');
        node.appendChild(textnode);
        node.setAttribute('id', 'username-help')
        node.classList.add('help');
        node.classList.add('is-danger');
        emailParentField.appendChild(node);
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

    if (email && emailField.classList.contains('is-danger')) {
      emailField.classList.remove('is-danger');
      if (emailParentField.querySelectorAll('p').length > 0) {
        let helpText = document.getElementById('email-help');
        emailParentField.removeChild(helpText);
      }
    }

    if (password && passwordParentField.querySelectorAll('p').length > 0) {
      emailField.classList.remove('is-danger');
      let helpText = document.getElementById('password-help');
      passwordParentField.removeChild(helpText);
    }

    return valid;
  }

  const renderErrors = (errors: any) => {
    let usernameField = document.querySelector('#email');
    let passwordField = document.querySelector('#password');
    let errorsParagraph = document.querySelector('#errors');

    usernameField.classList.add('is-danger');
    passwordField.classList.add('is-danger');
    errorsParagraph.innerHTML = errors[0];
  }

  const handleSubmission = () => {
    if (validateForm()) {
      const apiInterface = new APIInterface('register', {
        username: email,
        email:email,
        password: password,
        first_language: nativeLanguage,
        language_being_learned: newLanguage,
        language_preference: preferredLanguage
      });
      apiInterface.request().then((response) => {
        localStorage.setItem('token', response.auth_token);
        router.push('/getting-started', `/${locale}/getting-started`);
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
            <label className="label" htmlFor="email">{f(`email`)}</label>
            <div className="control">
              <Input id="email" type="email" required={true} onChange={(e) => setEmail(e.target.value)} />
            </div>
          </div>

          <div className="field">
            <label className="label" htmlFor="password">{f(`password`)}</label>
            <div className="control">
              <Input id="password" type="password" onChange={(e) => setPassword(e.target.value)} />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <p className="help is-danger" id="errors"></p>
            </div>
          </div>
          <div className="field is-grouped">

            <div className="control">
            <label className="label">{f(`nativeLanguage`)}</label>
              <Input as="select" onChange={e => setNativeLanguage(e.target.value)}>
                <option value="1">English</option>
                <option value="2">Portuguese</option>
              </Input>
            </div>

            <div className="control">
              <label className="label">{f(`newLanguage`)}</label>
              <Input as="select" onChange={e => setNewLanguage(e.target.value)}>
              <option value="1">English</option>
                <option value="2">Portuguese</option>
              </Input>
            </div>
            <div className="control">
              <label className="label">{f(`preferredLanguage`)}</label>
              <Input as="select" onChange={e => setPreferredLanguage(e.target.value)}>
              <option value="1">English</option>
                <option value="2">Portuguese</option>
              </Input>
            </div>
          </div>
          <div className="has-text-centered">
            <Button text={f(`signUpButton`)} color="primary" as="button" onClick={handleSubmission} />
          </div>
          <div className="has-text-centered">
            <Link href="/accounts/login" locale={locale}>
              <a>{f(`loginLink`)}</a>
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

export default Register;
