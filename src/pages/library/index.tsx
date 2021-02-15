import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useIntl } from 'react-intl';
import DashboardLayout from '../../components/layouts/dashboard';
import Autocomplete from '../../components/elements/Autocomplete';
import APIInterface from '../../utils/api/client';

const Library: React.FC = () => {
  const [userLibrary, setUserLibrary] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [choice, setChoice] = useState([]);
  const [choiceText, setChoiceText] = useState('');
  const [errors, setErrors] = useState([]);

  const { formatMessage } = useIntl();
  const f = (id) => formatMessage({ id });
  const router = useRouter();
  const { locale, locales, defaultLocale } = router;

  useEffect(() => {
    getLibraryItems();
  }, []);

  const getLibraryItems = async () => {
    let apiInterface = new APIInterface('getReadingList');

    apiInterface.request().then((response) => {
      setUserLibrary(response);
      console.log(response)
    }).catch((errors) => {
      setErrors(errors)
    });
  }

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
          {userLibrary.map((libraryEntry, index) => {
            return (
              <tr key={index}>
                <td><img src={libraryEntry['book'].thumbnail}/></td>
                <td><p className="is-size-3 mt-3 ml-3 has-text-left">{libraryEntry['book'].title}</p></td>
                <td>Options</td>
              </tr>
            )
          })}
        </table>
      </div>
    </DashboardLayout>
  )
}

export default Library;
