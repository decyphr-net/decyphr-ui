import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useIntl } from 'react-intl';
import Button from '../components/elements/Button';
import Navbar from '../components/structures/Navbar';
import Card from '../components/structures/Card';

const Home: React.FC = () => {
  const { formatMessage } = useIntl();
  const f = (id) => formatMessage({ id });
  const router = useRouter();
  const { locale, locales, defaultLocale } = router;

  return (
    <div id="wrapper" className="has-text-centered-mobile">
      <section id="hero" className="hero is-medium">
        <div className="hero-head">
          <Navbar>
            <div className="navbar-menu">
              <div className="navbar-end">
                <a href="/" className="a-menu is-size-7 navbar-item">
                  {f(`navlinkHome`)}
                </a>
                <a href="/" className="a-menu is-size-7 navbar-item">
                  {f(`navlinkAbout`)}
                </a>
                <a href="/" className="a-menu is-size-7 navbar-item">
                  {f(`navlinkFeatures`)}
                </a>
                <a href="/" className="a-menu is-size-7 navbar-item">
                  {f(`navlinkContact`)}
                </a>
              </div>
            </div>
          </Navbar>
        </div>
        <div className="hero-body">
          <div className="container">
            <h1 className="has-text-green is-size-1 is-size-3-mobile">
              {f(`title`)}
            </h1>
            <p className="has-text-green hero-p">{f(`heroParagraph`)}</p>
            <Link
              href="/accounts/login"
              locale={locale}
            >
              <Button text={f(`callToAction`)} color="primary" variant="rounded" modifier="shadow" as="a"  />
            </Link>
          </div>
        </div>
      </section>

      <section id="twitter-feed" className="section has-white-mustard-gradient">
        <div className="container">
          <div className="columns">
            <Card title={f(`cardOneHeader`)} description={f(`cardOneText`)} />
            <Card title={f(`cardTwoHeader`)} description={f(`cardTwoText`)} />
            <Card title={f(`cardThreeHeader`)} description={f(`cardThreeText`)} />
          </div>
        </div>
      </section>
      <section id="features" className="section has-mustard-bg">
        <div className="container">
          <div className="columns reverse-row-order">
            <div className="column">
              <h3 className="is-size-3">{f(`marketingOneHeader`)}</h3>
              <p className="has-text-green paragraph">
                {f(`marketingOneText`)}
              </p>
            </div>
            <div className="column">
              <img
                className="feature-img"
                src="img/feature1.svg"
                alt="feature"
              />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="columns">
            <div className="column">
              <img
                className="feature-img"
                src="img/feature2.svg"
                alt="feature"
              />
            </div>
            <div className="column">
              <h3 className="is-size-3">{f(`marketingTwoHeader`)}</h3>
              <p className="has-text-green paragraph">
                {f(`marketingTwoText`)}
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="columns reverse-row-order">
            <div className="column">
              <h3 className="is-size-3">{f(`marketingThreeHeader`)}</h3>
              <p className="has-text-green paragraph">
                {f(`marketingThreeText`)}
              </p>
            </div>
            <div className="column">
              <img
                className="feature-img"
                src="img/feature3.svg"
                alt="feature"
              />
            </div>
          </div>
        </div>
      </section>
      <section id="newsletter" className="section">
        <div className="container">
          <div className="columns">
            <div className="column">
              <video src="video/sample.mp4" controls>
                <track default kind="captions" srcLang="en" src="#" />
              </video>
            </div>
          </div>
        </div>
      </section>
      <section id="footer" className="section has-green-bg">
        <div className="container has-text-centered">
          <a
            href="https://twitter.com/hellobetkowski"
            className="is-size-4 social-link"
          >
            <i className="fab fa-twitter" />
          </a>
          <a
            href="https://github.com/hellobetkowski"
            className="is-size-4 social-link"
          >
            <i className="fab fa-github" />
          </a>
          <a href="https://dev.to/betkowski" className="is-size-4 social-link">
            <i className="fab fa-dev" />
          </a>
          <p className="has-text-white is-size-7">
            Built with <i className="fas fa-heart" /> and{` `}
            <a href="https://bulma.io">Bulma</a>, by{` `}
            <a href="https://twitter.com/hellobetkowski">@hellobetkowski</a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
