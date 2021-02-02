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
        <div className="column is-10 is-offset-1 register">
          <div className="columns">
            <div className="column left">
              <h1 className="title is-2">
                {f(`welcomeTitle`)}
              </h1>

              <h2 className="subtitle coloured is-4">{" "}{f(`welcomeSubtitle`)}.</h2>

              <p className="description">
                {f(`descriptionText`)}
              </p>
            </div>
            <div className="column right has-text-centered">
              <h1 className="title is-4">
                {f(`formTitle`)}
              </h1>
              <p>
                {f(`formSubtitle`)}
              </p>

              <form>
                <div className="field">
                  <label className="label mt-4">{f(`nativeLanguage`)}</label>
                  <div className="control">
                    <Input as="select">
                      <option>English</option>
                      <option>Portuguese</option>
                    </Input>
                  </div>
                </div>
                <div className="field">
                <label className="label">{f(`newLanguage`)}</label>
                  <div className="control">
                    <Input as="select">
                      <option>English</option>
                      <option>Portuguese</option>
                    </Input>
                  </div>
                </div>
                <Link
                  href="/dashboard"
                  locale={locale}
                >
                  <Button text={f(`nextButton`)} color="primary" as="a" />
                </Link>
              </form>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

export default GettingStarted;
