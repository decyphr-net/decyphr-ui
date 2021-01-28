import React from 'react';
import { useRouter } from 'next/router';
import { useIntl } from 'react-intl';
import DashboardLayout from '../../components/layouts/dashboard';
import Button from '../../components/elements/Button';

const CourseDetails: React.FC = () => {
  const { formatMessage } = useIntl();
  const f = (id) => formatMessage({ id });
  const router = useRouter();
  const { locale, locales, defaultLocale } = router;
  const { id } = router.query

  return (
    <DashboardLayout>
      <div className="column is-8">
        <div className=" box columns">
          <div className="column is-3">
          <figure className="image is-1by1">
            <img className="is-rounded" src="https://bulma.io/images/placeholders/128x128.png" />
          </figure>
          </div>
          <div className="column is-9 is-block">
            <h3 className="m-4 is-size-3 has-text-left">English for Spanish speakers</h3>
            <p className="m-4 has-text-left">
              A language developed for Spanish speakers that wish to learn how to speak English.
            </p>
            <p className="m-4 has-text-left">
              This course is specifically designed to teach the English language from the
              perspective of Spanish speakers to ensure that any nuances in the language can
              be explained in a `Spanish` way
            </p>
            <p className="m-4 has-text-left">
              This course is specifically designed to teach the English language from the
              perspective of Spanish speakers to ensure that any nuances in the language can
              be explained in a `Spanish` way
            </p>
            <p className="m-4 has-text-left">
              This course is specifically designed to teach the English language from the
              perspective of Spanish speakers to ensure that any nuances in the language can
              be explained in a `Spanish` way
            </p>
            <Button as="a" text="Enroll in course" color="primary" className="is-pulled-right mr-6 ml-3 mt-4" />
            </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default CourseDetails;
