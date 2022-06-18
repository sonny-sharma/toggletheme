import React, { useContext, useState } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState({});
  const [text, setText] = useState('LightMode');

  const handleTheme = (e) => {
    if (e.target.checked) {
      setTheme({
        backgroundColor: '#3f3f3f',
        color: 'white',
        transition: '0.4s ease-in-out',
      });
      setText('DarkMode');
    } else {
      setTheme({
        backgroundColor: '#e5e5e5',
        color: 'black',
        transition: '0.4s ease-in-out',
      });

      setText('LightMode');
    }
  };

  return (
    <AppContext.Provider
      value={{
        theme,
        handleTheme,
        text,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// custom hooks
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
