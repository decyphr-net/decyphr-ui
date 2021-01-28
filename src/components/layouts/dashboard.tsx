import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useIntl } from 'react-intl';
import Navbar from '../../components/structures/Navbar';

type Props = {
  children?: JSX.Element;
}

const DashboardLayout: React.FC = ({ children }: Props) => {
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
                href="/course"
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
          {children}
        </div>
      </section>
    </div>
  )
}

export default DashboardLayout;
