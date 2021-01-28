import React from 'react';
import { useRouter } from 'next/router';
import { useIntl } from 'react-intl';
import DashboardLayout from '../../components/layouts/dashboard';

const CourseDetails: React.FC = () => {
  const { formatMessage } = useIntl();
  const f = (id) => formatMessage({ id });
  const router = useRouter();
  const { locale, locales, defaultLocale } = router;
  const { id } = router.query

  return (
    <DashboardLayout>
      <p>{id}</p>
    </DashboardLayout>
  )
}

export default CourseDetails;
