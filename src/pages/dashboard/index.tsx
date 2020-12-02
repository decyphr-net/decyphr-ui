import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useIntl } from 'react-intl';
import Button from '../../components/elements/Button';
import Input from '../../components/elements/Input';
import Navbar from '../../components/structures/Navbar';

const Dashboard: React.FC = () => {
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
              <a href="/" className="a-menu is-size-7 navbar-item">
                Courses
              </a>
              <a href="/" className="a-menu is-size-7 navbar-item">
                Reading
              </a>
              <a href="/" className="a-menu is-size-7 navbar-item">
                Practice
              </a>
              <a href="/" className="a-menu is-size-7 navbar-item">
                Logout
              </a>
            </div>
          </div>
        </Navbar>
      </section>
    </div>
  )
}

export default Dashboard;
