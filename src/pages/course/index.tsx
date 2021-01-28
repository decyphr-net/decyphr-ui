import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useIntl } from 'react-intl';
import DashboardLayout from '../../components/layouts/dashboard';
import Panel from '../../components/structures/Panel';
import Card from '../../components/structures/Card';

const Course: React.FC = () => {
  const { formatMessage } = useIntl();
  const f = (id) => formatMessage({ id });
  const router = useRouter();
  const { locale, locales, defaultLocale } = router;

  return (
    <DashboardLayout>
      <div className="column is-6 is-block">
        <h2 className="has-text-left ml-4 is-size-1 has-text-weight-light">Your courses</h2>
        <Panel
          title="English for Portuguese speakers"
          description="Check out your course list"
        />
        <Panel title="English for Portuguese speakers" description="Check out your course list" />
        <Panel title="English for Portuguese speakers" description="Check out your course list" />
      </div>
      <div className="column is-2 is-block">
        <h2 className="has-text-left ml-4 mt-5 is-size-3 has-text-weight-light">More courses</h2>
        <Link href="/course/1">
          <a>
            <Card title="English for Spanish speakers" description="Check out your course list" />
          </a>
        </Link>
        <Link href="/course/2">
          <a>
            <Card title="English for Spanish speakers" description="Check out your course list" />
          </a>
        </Link>
        <Link href="/course/3">
          <a>
            <Card title="English for Spanish speakers" description="Check out your course list" />
          </a>
        </Link>
        <Link href="/course/4">
          <a>
            <Card title="English for Spanish speakers" description="Check out your course list" />
          </a>
        </Link>
      </div>
    </DashboardLayout>
  )
}

export default Course;
