import React, { createContext, useContext, useState } from 'react';

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState({ email: null });
  return (
    <UserContext.Provider value={{ user, setUser }}>
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
