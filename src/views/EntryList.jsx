import React, { useState, useEffect } from 'react';
import { useUserHook } from '../context/userContext';
import { getEntries, createEntry } from '../../src/services/entries';
import InputEntry from '../components/InputEntry';

export default function EntryList() {
  const context = useUserHook();
  const [guestEntries, setGuestEntries] = useState([]);
  const [entry, setEntry] = useState('');
  // const [content, setContent] = useState('');

  useEffect(() => {
    const getGuestEntries = async () => {
      const data = await getEntries();
      setGuestEntries(data);
    };
    getGuestEntries();
  }, []);

  const submitEntry = async () => {
    const addedEntry = await createEntry(entry);

    setGuestEntries((prevState) => [...prevState, addedEntry]);
    setEntry('');
  };

  return (
    <div>
      <h1>Entry List</h1>
      <p>Signed in as {context.user.email}</p>
      <ul>
        {guestEntries.map((entry) => (
          <li key={entry.id}>{entry.content}</li>
        ))}
      </ul>
      <InputEntry {...{ entry, setEntry, submitEntry }} />
      <button onClick={context.logout}>Logout</button>
    </div>
  );
}
