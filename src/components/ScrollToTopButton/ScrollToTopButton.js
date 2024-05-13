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
      <button className={buttonNoDecoration}>
        <svg
          className={theme(scrollToButtonLight, scrollToButtonDark)}
          onClick={() => {
            window.scrollTo({
              top,
              behavior: 'smooth',
            });
          }}
        >
          <ArrowUp />
        </svg>
      </button>
    </div>
  );
};
