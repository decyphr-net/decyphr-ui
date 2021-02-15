import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useIntl } from 'react-intl';
import DashboardLayout from '../../components/layouts/dashboard';
import Autocomplete from '../../components/elements/Autocomplete';
import APIInterface from '../../utils/api/client';
import Button from '../../components/elements/Button';
import { BookCard } from '../../components/structures/Card';

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
        {userLibrary.map((libraryEntry, index) => {
          return (
            <BookCard
              key={index}
              title={libraryEntry['book'].title}
              description={`Number of completed sessions: ${libraryEntry['readingsession_count']}`}
              imgSrc={libraryEntry['book'].thumbnail}
            >
              <Button as="a" text="Continue" color="primary" className="is-pulled-right mr-3 ml-3" />
              <Button as="a" text="Options" color="secondary" className="button is-pulled-right mr-3 ml-6" />
            </BookCard>
          )
        })}
      </div>
    </DashboardLayout>
  )
}

export default Library;
