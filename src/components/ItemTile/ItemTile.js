// import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

import { container, content, image, text, title } from './ItemTile.module.scss';

export const ItemTile = ({ projectTitle, projectText, projectImageSrc }) => {
  // const imageSrc = getImage(projectImageSrc)

  useEffect(() => {
    console.log(projectImageSrc);
  }, []);

  return (
    <div className={`${container}`}>
      <img alt={'Project image'} src={projectImageSrc} className={`${image}`} />
      <div className={`${content}`}>
        <div className={`${title}`}>{projectTitle}</div>
        <div className={`${text}`}>{projectText}</div>
      </div>
    </div>
  );
};

ItemTile.propTypes = {
  projectTitle: PropTypes.string.isRequired,
  projectText: PropTypes.string.isRequired,
  projectImageSrc: PropTypes.string.isRequired,
};
