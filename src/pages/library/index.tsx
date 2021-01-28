import React from 'react';
import { useRouter } from 'next/router';
import { useIntl } from 'react-intl';
import DashboardLayout from '../../components/layouts/dashboard';
import Autocomplete from '../../components/elements/Autocomplete';

const Library: React.FC = () => {
  const { formatMessage } = useIntl();
  const f = (id) => formatMessage({ id });
  const router = useRouter();
  const { locale, locales, defaultLocale } = router;

  return (
    <DashboardLayout>
      <div className="column is-8">
        <h2 className="has-text-left is-size-2">Library</h2>
        <h3 className="has-text-left is-size-3 mt-4">Add a new item to your library</h3>
        <Autocomplete
          name="library"
          label=""
          placeholder="Select an item to add to your library"
          data={[
            'Apple',
            'Pineapple',
            'Banana',
            'Orange',
            'Peach',
            'Blueberry',
            'Pear',
          ]}
        />

        <h3 className="has-text-left is-size-3 mt-6">Continue a book from your library</h3>
        <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
        <thead>
          <tr>
            <th>Cover</th>
            <th>Title</th>
            <th>Options</th>
          </tr>
        </thead>
        <tr>
        <td>Cover</td>
            <td>Title</td>
            <td>Options</td>
        </tr>
      </table>
      </div>


    </DashboardLayout>
  )
}

export default Library;
