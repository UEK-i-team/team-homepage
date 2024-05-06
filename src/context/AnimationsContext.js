import PropTypes from 'prop-types';
import React, { createContext, useContext, useState } from 'react';

const defaultAnimationsContext = {
  isPaused: false,
  togglePaused: () => {},
};

const AnimationsContext = createContext(defaultAnimationsContext);

export const useAnimationContext = () => useContext(AnimationsContext);
const isBrowser = typeof window !== 'undefined';

export const AnimationsContextProvider = ({ children }) => {
  const [isPaused, setPaused] = useState(
    isBrowser && localStorage.getItem('isPaused') === 'true'
  );

  const togglePaused = () => {
    setPaused((prev) => {
      if (isBrowser) localStorage.setItem('isPaused', !prev);
      return !prev;
    });
  };

  return (
    <AnimationsContext.Provider value={{ isPaused, togglePaused }}>
      {children}
    </AnimationsContext.Provider>
  );
};

AnimationsContextProvider.propTypes = {
  children: PropTypes.node,
};
