import React, { useContext } from 'react';

import ArrowUp from '../../assets/svgs/ArrowUp.svg';
import { useAnimationContext } from '../../context/AnimationsContext';
import { ThemeContext } from '../../context/ThemeContex';
import {
  buttonNoDecoration,
  scrollToButtonContainer,
  scrollToButtonDark,
  scrollToButtonLight,
} from '../ScrollToTopButton/ScrollToTopButton.module.scss';

export const ScrollToTopButton = () => {
  const { theme } = useContext(ThemeContext);
  const { isPaused } = useAnimationContext();

  return (
    <div className={scrollToButtonContainer}>
      <button
        className={buttonNoDecoration}
        onClick={() => {
          window.scrollTo({
            top,
            behavior: isPaused ? 'instant' : 'smooth',
          });
        }}
      >
        <svg
          className={theme(scrollToButtonLight, scrollToButtonDark)}
          aria-label={'ariaLabelScrollToTopButton'}
        >
          <ArrowUp />
        </svg>
      </button>
    </div>
  );
};
