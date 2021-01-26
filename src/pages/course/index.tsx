import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useIntl } from 'react-intl';
import Navbar from '../../components/structures/Navbar';
import Panel from '../../components/structures/Panel';
import Card from '../../components/structures/Card';

const Course: React.FC = () => {
  const { formatMessage } = useIntl();
  const f = (id) => formatMessage({ id });
  const router = useRouter();
  const { locale, locales, defaultLocale } = router;

  return (
    <div id="wrapper" className="has-text-centered-mobile">
      <section className="container">
        <Navbar>
          <div className="navbar-menu mb-6">
            <div className="navbar-end">
              <Link
                href="/accounts/login"
                locale={locale}
              >
                <a className="a-menu is-size-7 navbar-item">
                  Courses
                </a>
              </Link>
              <Link
                href="/library"
                locale={locale}
              >
                <a className="a-menu is-size-7 navbar-item">
                  Reading
                </a>
              </Link>
              <Link
                href="/accounts/login"
                locale={locale}
              >
                <a className="a-menu is-size-7 navbar-item">
                  Practice
                </a>
              </Link>
              <Link
                href="/accounts/login"
                locale={locale}
              >
                <a className="a-menu is-size-7 navbar-item">
                  Logout
                </a>
              </Link>
            </div>
          </div>
        </Navbar>

      </section>

      <section className="section ml-6 mt-3">
        <div className="columns">
          <div className="column is-1"></div>
          <div className="column is-7 is-block">
            <h2 className="has-text-left ml-4 is-size-1 has-text-weight-light">Your courses</h2>
            <Panel
              title="English for Portuguese speakers"
              description="Check out your course list"
            />
            <Panel title="English for Portuguese speakers" description="Check out your course list" />
            <Panel title="English for Portuguese speakers" description="Check out your course list" />
          </div>
          <div className="column is-3 is-block">
            <h2 className="has-text-left ml-4 mt-5 is-size-3 has-text-weight-light">More courses</h2>
            <Card title="English for Spanish speakers" description="Check out your course list" />
            <Card title="Portuguese for English speakers" description="Check out your course list" />
            <Card title="Portuguese for English speakers" description="Check out your course list" />
            <Card title="Portuguese for English speakers" description="Check out your course list" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Course;
