import PropTypes from 'prop-types';
import React, { createContext, useContext, useState } from 'react';

const AnimationsContext = createContext();

export const useCarousel = () => useContext(AnimationsContext);

export const AnimationsProvider = ({ children }) => {
  const [isPaused, setPaused] = useState(
    localStorage.getItem('isPaused') === 'true' || false
  );

  const togglePaused = () => {
    setPaused((prev) => !prev);
    localStorage.setItem('isPaused', !isPaused);
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
