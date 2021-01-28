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
      <Card title="Courses" description="Check out your course list" />
      <Card title="Book List" description="Add some new books to your book list" />
      <Card title="Practice" description="Practice your translations" />
    </DashboardLayout>
  )
}

export default Dashboard;
