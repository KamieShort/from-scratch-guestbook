import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useUserHook } from '../context/userContext';

export default function Auth() {
  const [email, setEmail] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const context = useUserHook();
  const [error, setError] = useState('');
  const history = useHistory();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await context.login(email, password);
      history.push('/entryList');
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSignUp = async (e) => {
    try {
      e.preventDefault();
      await context.newUser(newEmail, newPassword);
      history.push('/entryList');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h3>Sign In Here!</h3>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="sign-in email here"
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

      <form onSubmit={handleSignUp}>
        <h3>Sign Up Here!</h3>
        <input
          type="email"
          value={newEmail}
          onChange={(e) => setNewEmail(e.target.value)}
          placeholder="sign-up email here"
        />

        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          placeholder="password here"
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
