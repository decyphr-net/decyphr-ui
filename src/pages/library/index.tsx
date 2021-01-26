import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useIntl } from 'react-intl';
import Navbar from '../../components/structures/Navbar';
import Card from '../../components/structures/Card';

const Library: React.FC = () => {
  const { formatMessage } = useIntl();
  const f = (id) => formatMessage({ id });
  const router = useRouter();
  const { locale, locales, defaultLocale } = router;

  return (
    <div id="wrapper" className="has-text-centered-mobile">
      <section className="container">
        <Navbar>
          <div className="navbar-menu">
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
        <div>
          <div className="columns">
            <p>Hello world</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Library;
