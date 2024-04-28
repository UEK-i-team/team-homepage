import PropTypes from 'prop-types';
import React, { createContext, useCallback, useEffect, useState } from 'react';

export const ThemeContext = createContext({
  isDarkTheme: false,
  toggleTheme: () => {},
  theme: () => {},
});

const ThemeProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('isDarkTheme');
      return storedTheme ? JSON.parse(storedTheme) : false;
    } else {
      return true;
    }
  });

  useEffect(() => {
    if (document)
      document.body.className = isDarkTheme ? 'dark-body' : 'light-body';
    if (typeof window !== 'undefined') {
      localStorage.setItem('isDarkTheme', JSON.stringify(isDarkTheme));
    } else {
      return true;
    }
  }, [isDarkTheme]);

  const toggleTheme = useCallback(() => {
    setIsDarkTheme((prev) => !prev);
  }, []);

  const theme = (lightThemeName, darkThemeName) =>
    `${lightThemeName} ${isDarkTheme && darkThemeName}`;

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ThemeProvider };
