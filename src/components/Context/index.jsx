import React, { createContext, useContext, useState } from "react";
import { Route, Navigate } from "react-router-dom";

// Create a UserAuth context
export const UserAuthContext = createContext();

export const useUserAuth = () => {
  return useContext(UserAuthContext);
};

const UserAuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <UserAuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </UserAuthContext.Provider>
  );
};

export default UserAuthProvider;
