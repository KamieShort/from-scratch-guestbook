import React from 'react';
import { useUserHook } from '../context/userContext';

export default function EntryList() {
  const context = useUserHook();

  return (
    <div>
      <h1>Entry List</h1>
      <p>Signed in as {context.user.email}</p>
      <button onClick={context.logout}>Logout</button>
    </div>
  );
}
