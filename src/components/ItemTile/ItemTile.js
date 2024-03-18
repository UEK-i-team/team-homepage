import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import React, { useContext } from 'react';

import { ThemeContext } from '../../context/ThemeContex';
import {
  container,
  content,
  darkContainer,
  image,
  text,
  title,
} from './ItemTile.module.scss';

export const ItemTile = ({
  itemTitle,
  itemText,
  itemImage,
  itemLink,
  itemImageAlt,
}) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Link to={itemLink} className={theme(container, darkContainer)}>
      <GatsbyImage image={itemImage} alt={itemImageAlt} className={image} />
      <div className={content}>
        <div className={title}>{itemTitle}</div>
        <div className={text}>{itemText}</div>
      </div>
    </Link>
  );
};

ItemTile.propTypes = {
  itemTitle: PropTypes.string.isRequired,
  itemText: PropTypes.string.isRequired,
  itemImage: PropTypes.object.isRequired,
  itemImageAlt: PropTypes.string.isRequired,
  itemLink: PropTypes.string.isRequired,
};
