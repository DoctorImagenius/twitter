import { createContext } from 'react';

import useFetchData from '../customHooks/useFetchData'

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  let auth = useFetchData();

  return (
    <AuthContext.Provider
      value={auth}
    >
      {children}
    </AuthContext.Provider>
  );
};