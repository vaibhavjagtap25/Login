// src/context/AuthContext.js

import React, { createContext, useContext, useState,  } from 'react';

// Create a Context
const AuthContext = createContext();

// Custom hook to use the AuthContext
export default function useAuth()  {
  return useContext(AuthContext);
};

// Provider component
export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(() => {
    const storedUser = sessionStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const login = (email,password) => {
    const newUser = { email,password };
    setUser(newUser);
    sessionStorage.setItem('user', JSON.stringify(newUser));
  };

  const logout = () => {
    setUser(null);
    sessionStorage.removeItem('user');
  };

  const value = { user, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
