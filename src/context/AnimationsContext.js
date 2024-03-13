import PropTypes from 'prop-types';
import React, { createContext, useContext, useState } from 'react';

const AnimationsContext = createContext();

export const useCarousel = () => useContext(AnimationsContext);

export const AnimationsProvider = ({ children }) => {
  const [isPaused, setPaused] = useState(false);

  const togglePaused = () => {
    setPaused((prev) => !prev);
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
