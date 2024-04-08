import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
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
  const { theme } = useContext(ThemeContext);

  return (
    <Link to={itemLink} className={theme(container, darkContainer)}>
      <GatsbyImage image={imageSrc} alt={itemImageAlt} className={image} />
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
  itemImage: PropTypes.string.isRequired,
  itemImageAlt: PropTypes.string.isRequired,
  itemLink: PropTypes.string.isRequired,
};
