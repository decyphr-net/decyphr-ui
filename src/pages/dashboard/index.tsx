import React from 'react';
import { useRouter } from 'next/router';
import { useIntl } from 'react-intl';
import DashboardLayout from '../../components/layouts/dashboard';
import Card from '../../components/structures/Card';

const Dashboard: React.FC = () => {
  const { formatMessage } = useIntl();
  const f = (id) => formatMessage({ id });
  const router = useRouter();
  const { locale, locales, defaultLocale } = router;

  return (
    <DashboardLayout>
      <div className="column is-2">
        <Card title="Courses" description="Search for new courses, or continue" />
      </div>
      <div className="column is-2">
        <Card title="Book List" description="Add some new books to your book list" />
      </div>
      <div className="column is-2">
        <Card title="Practice" description="Practice the translations from your reading sessions" />
      </div>
      <div className="column is-2">
        <Card title="Class" description="Schedule a class with your tutor of choice" />
      </div>
    </DashboardLayout>
  )
}

export default Dashboard;
