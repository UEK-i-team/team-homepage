import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import React from 'react';

import {
  container,
  content,
  darkTheme,
  image,
  text,
  title,
} from './ItemTile.module.scss';

export const ItemTile = ({
  itemTitle,
  itemText,
  itemImage, 
  /* 'fileName.png', image from src/assets/images/ */
<<<<<<< HEAD
  itemImageAlt,
=======
  projectImageAlt,
  isDarkTheme,
>>>>>>> f756f58 (feature: wip)
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

  return (
<<<<<<< HEAD
    <div className={container}>
      <GatsbyImage image={imageSrc} alt={itemImageAlt} className={image} />
=======
    <div className={`${container} ${isDarkTheme ? darkTheme : ''}`}>
      <GatsbyImage image={imageSrc} alt={projectImageAlt} className={image} />
>>>>>>> f756f58 (feature: wip)
      <div className={content}>
        <div className={title}>{itemTitle}</div>
        <div className={text}>{itemText}</div>
      </div>
    </div>
  );
};

ItemTile.propTypes = {
<<<<<<< HEAD
  itemTitle: PropTypes.string.isRequired,
  itemText: PropTypes.string.isRequired,
  itemImage: PropTypes.string.isRequired,
  itemImageAlt: PropTypes.string.isRequired,
=======
  projectTitle: PropTypes.string.isRequired,
  projectText: PropTypes.string.isRequired,
  projectImage: PropTypes.string.isRequired,
  projectImageAlt: PropTypes.string.isRequired,
  isDarkTheme: PropTypes.bool.isRequired,
>>>>>>> f756f58 (feature: wip)
};
