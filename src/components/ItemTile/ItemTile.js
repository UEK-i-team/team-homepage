import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import React, { useContext } from 'react';

import { ThemeContext } from '../../context/ThemeContex';
import {
  container,
  content,
  dark,
  image,
  text,
  title,
} from './ItemTile.module.scss';

export const ItemTile = ({
  itemTitle,
  itemText,
  itemImage,
  /* 'fileName.png', image from src/assets/images/ */
  itemImageAlt,
}) => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          sourceInstanceName: { eq: "images" }
          internal: { mediaType: { regex: "/image/" } }
        }
      ) {
        nodes {
          relativePath
          childImageSharp {
            gatsbyImageData(
              layout: CONSTRAINED
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
  `);

  const matchedImage = data.allFile.nodes.find(
    (node) => node.relativePath === itemImage
  );

  const imageSrc = getImage(matchedImage);
  const { isDarkTheme } = useContext(ThemeContext);

  return (
    <div className={isDarkTheme ? `${container} ${dark}` : container}>
      <GatsbyImage image={imageSrc} alt={itemImageAlt} className={image} />
      <div className={content}>
        <div className={title}>{itemTitle}</div>
        <div className={text}>{itemText}</div>
      </div>
    </div>
  );
};

ItemTile.propTypes = {
  itemTitle: PropTypes.string.isRequired,
  itemText: PropTypes.string.isRequired,
  itemImage: PropTypes.string.isRequired,
  itemImageAlt: PropTypes.string.isRequired,
};
