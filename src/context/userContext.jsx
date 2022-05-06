import React, { createContext, useContext, useState } from 'react';

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState({ email: null });

  const login = (email, password) => {
    if (email === 'kamie@alchemy.com' && password === 'test123') {
      setUser({ email: 'kamie@alchemy.com' });
    } else {
      throw new Error('Try again, invalid login credentials.');
    }
  };

  const logout = () => {
    setUser({ email: null });
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
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
