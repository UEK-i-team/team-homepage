import { Link } from 'gatsby';
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import React, { useContext } from 'react';

import { ThemeContext } from '../../context/ThemeContex';
import {
  border,
  container,
  content,
  darkBorder,
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
  borderVisible = true,
}) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={borderVisible ? theme(border, darkBorder) : ''}>
      <Link to={itemLink} className={theme(container, darkContainer)}>
        {itemImage ? (
          <GatsbyImage image={itemImage} alt={itemImageAlt} className={image} />
        ) : (
          <StaticImage
            src="https://picsum.photos/600/600"
            alt="random image"
            className={image}
          />
        )}

        <div className={content}>
          <div className={title}>{itemTitle}</div>
          <div className={text}>{itemText}</div>
        </div>
      </Link>
    </div>
  );
};

ItemTile.propTypes = {
  itemTitle: PropTypes.string.isRequired,
  itemText: PropTypes.string.isRequired,
  itemImage: PropTypes.object,
  itemImageAlt: PropTypes.string,
  itemLink: PropTypes.string.isRequired,
  borderVisible: PropTypes.bool.isRequired,
};
