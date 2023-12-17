import PropTypes from 'prop-types';
import React from 'react';

import sampleImg from '../../assets/images/sampleProjectImg.png';
import {
  moblieProject,
  moblieProjectTitle,
  projectImg,
} from './MoblileProject.module.scss';

export const MoblieProject = (props) => {
  return (
    <>
      <img src={sampleImg} alt="project image" className={`${projectImg}`} />

      <h1 className={`${moblieProjectTitle}`}>{props.title}</h1>
      <div className={`${moblieProject}`}>
        <div>{props.description}</div>
        <a href={props.link}>
          Zobacz nasz projekt w praktyce {/* ARROW */} &#10140;
        </a>
      </div>
    </>
  );
};

MoblieProject.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.any.isRequired,
  link: PropTypes.any.isRequired,
};
