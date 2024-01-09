import React, { useContext } from 'react';

import { ThemeContext } from '../../context/ThemeContex';
import { title, titleDark } from './TitleText.module.scss';

export const TitleText = () => {
  const { theme } = useContext(ThemeContext);
  return <h1 className={theme(title, titleDark)}>Hello on team-homepage</h1>;
};
