import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useUserHook } from '../context/userContext';

export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const context = useUserHook();
  const [error, setError] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    try {
      e.preventDefault();
      context.login(email, password);
      history.push('/entryList');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email here"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password here"
        />
        <button type="submit">Go</button>
        <p>{error}</p>
      </form>
    </>
  );
}
