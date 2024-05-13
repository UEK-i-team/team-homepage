import React, { useContext } from 'react';

import ArrowUp from '../../assets/svgs/ArrowUp.svg';
import { ThemeContext } from '../../context/ThemeContex';
import {
  buttonNoDecoration,
  scrollToButtonContainer,
  scrollToButtonDark,
  scrollToButtonLight,
} from '../ScrollToTopButton/ScrollToTopButton.module.scss';

export const ScrollToTopButton = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={scrollToButtonContainer}>
      <button
        className={buttonNoDecoration}
        onClick={() => {
          window.scrollTo({
            top,
            behavior: 'smooth',
          });
        }}
      >
        <svg className={theme(scrollToButtonLight, scrollToButtonDark)}>
          <ArrowUp />
        </svg>
      </button>
    </div>
  );
};
