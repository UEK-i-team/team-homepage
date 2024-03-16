import PropTypes from 'prop-types';
import React, { createContext, useCallback, useEffect, useState } from 'react';

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    const storedTheme = localStorage.getItem('isDarkTheme');
    return storedTheme ? JSON.parse(storedTheme) : false;
  });

  useEffect(() => {
    document.body.className = isDarkTheme ? 'dark-body' : 'light-body';
    localStorage.setItem('isDarkTheme', JSON.stringify(isDarkTheme));
  }, [isDarkTheme]);

  const toggleTheme = useCallback(() => {
    setIsDarkTheme((prev) => !prev);
  }, []);

  const theme = (lightThemeClassName, darkThemeClassName) =>
    `${lightThemeClassName} ${isDarkTheme ? darkThemeClassName : ''}`;

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
