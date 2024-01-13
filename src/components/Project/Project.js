import PropTypes from 'prop-types';
import React, { useContext } from 'react';

import { ThemeContext } from '../../context/ThemeContex';
import {
  mobileProjectDarkTheme,
  mobileProjectLightTheme,
  mobileProjectTitleDarkTheme,
  mobileProjectTitleLightTheme,
} from './Project.module.scss';

export const Project = ({ link, description, title }) => {
  const { theme } = useContext(ThemeContext);
  const ARROW = <>&#10140;</>;

  return (
    <>
      <h1
        className={theme(
          mobileProjectTitleLightTheme,
          mobileProjectTitleDarkTheme
        )}
      >
        {title}
      </h1>
      <div className={theme(mobileProjectLightTheme, mobileProjectDarkTheme)}>
        <div>{description}</div>
        <a href={link}>Zobacz nasz projekt w praktyce {ARROW}</a>
      </div>
    </>
  );
};

Project.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.any.isRequired,
  link: PropTypes.any.isRequired,
};