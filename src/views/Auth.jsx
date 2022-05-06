import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  console.log('location', location);

  return (
    <>
      <div>Auth</div>
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
      </form>
    </>
  );
}
