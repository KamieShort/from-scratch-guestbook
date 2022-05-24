import React, { createContext, useContext, useState } from 'react';
import { getUser, signUpUser, signInUser, signOutUser } from '../services/auth';

export const UserContext = createContext();

export function UserProvider({ children }) {
  const currentUser = getUser();

  const [user, setUser] = useState(currentUser || { email: null });

  const newUser = async (email, password) => {
    const authedUser = await signUpUser({ email, password });
    if (authedUser) {
      setUser(authedUser);
    }
  };

  const login = async (email, password) => {
    const authedUser = await signInUser({ email, password });
    if (authedUser) {
      setUser(authedUser);
    } else {
      throw new Error('Try again, invalid login credentials.');
    }
  };

  const logout = async () => {
    const signOut = await signOutUser();
    setUser(signOut);
  };

  return (
    <UserContext.Provider value={{ user, login, logout, newUser }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUserHook = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error('useUserHook must be used within UserProvider');
  }
  return context;
};
