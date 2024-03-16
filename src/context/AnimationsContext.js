import PropTypes from 'prop-types';
import React, { createContext, useContext, useState } from 'react';

const AnimationsContext = createContext();

export const useCarousel = () => useContext(AnimationsContext);
const isBrowser = typeof window !== 'undefined';

export const AnimationsProvider = ({ children }) => {
  const [isPaused, setPaused] = useState(
    isBrowser && localStorage.getItem('isPaused') === 'true'
  );

  const togglePaused = () => {
    setPaused((prev) => !prev);
    if (isBrowser) {
      localStorage.setItem('isPaused', !isPaused);
    }
  };

  return (
    <AnimationsContext.Provider value={{ isPaused, togglePaused }}>
      {children}
    </AnimationsContext.Provider>
  );
};

AnimationsProvider.propTypes = {
  children: PropTypes.node,
};
