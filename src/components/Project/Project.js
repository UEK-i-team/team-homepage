import PropTypes from 'prop-types';
import React from 'react';

import { mobileProject, mobileProjectTitle } from './Project.module.scss';

export const Project = ({ link, description, title }) => {
  return (
    <>
      <h1 className={`${mobileProjectTitle}`}>{title}</h1>
      <div className={`${mobileProject}`}>
        <div>{description}</div>
        <a href={link}>Zobacz nasz projekt w praktyce {/* ARROW */} &#10140;</a>
      </div>
    </>
  );
};

Project.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.any.isRequired,
  link: PropTypes.any.isRequired,
};
