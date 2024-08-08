import React, { createContext, useState } from "react";

// Create the context
export const AppContext = createContext(null);

// Create a provider component
const AppContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedAuthor, setSelectedAuthor] = useState("");
  const [userName, setUserName] = useState("");
  const [useEmail, setUserEmail] = useState("");


  const value = {
    isLoggedIn,
    setIsLoggedIn,
    selectedAuthor,
    setSelectedAuthor,
    userName,
    setUserName,
    useEmail,
    setUserEmail
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
