import React from 'react';
import { useUserHook } from '../context/userContext';

export default function EntryList() {
  const context = useUserHook();

  return (
    <div>
      <h1>Guestbook Entry List</h1>
      <button onClick={context.logout}>Logout</button>
    </div>
  );
}
