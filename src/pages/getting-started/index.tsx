import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useIntl } from 'react-intl';
import Button from '../../components/elements/Button';
import Input from '../../components/elements/Input';

const GettingStarted: React.FC = () => {
  const { formatMessage } = useIntl();
  const f = (id) => formatMessage({ id });
  const router = useRouter();
  const { locale, locales, defaultLocale } = router;

  return (
    <section className="container">
      <div className="columns is-multiline">
        <div className="column is-8 is-offset-2 register">
          <div className="columns">
            <div className="column left">
              <h1 className="title is-2">
                Welcome
              </h1>

              <h2 className="subtitle coloured is-4"> to Decyphr.</h2>

              <p className="description">
                We noticed that you just signed up so we just need to ask you a couple
                of quick questions before we get started.
              </p>
            </div>
            <div className="column right has-text-centered">
              <h1 className="title is-4">
                Getting Started
              </h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit
              </p>

              <form>
                <div className="field">
                  <label className="label">Native Language</label>
                  <div className="control">
                    <Input as="select">
                      <option>English</option>
                      <option>Portuguese</option>
                    </Input>
                  </div>
                </div>
                <div className="field">
                <label className="label">New Language</label>
                  <div className="control">
                    <Input as="select">
                      <option>English</option>
                      <option>Portuguese</option>
                    </Input>
                  </div>
                </div>
                <Button text="Next" color="primary" />
              </form>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

export default GettingStarted;
