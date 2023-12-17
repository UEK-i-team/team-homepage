import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import React from 'react';

import { container, content, image, text, title } from './ItemTile.module.scss';

export const ItemTile = ({ projectTitle, projectText, projectImage }) => {
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
    (node) => node.relativePath === projectImage
  );

  if (!matchedImage) {
    console.error(`Image ${projectImage} not found`);
    return null;
  }

  const imageSrc = getImage(matchedImage);

  return (
    <div className={container}>
      <GatsbyImage image={imageSrc} alt="Project image" className={image} />
      <div className={content}>
        <div className={title}>{projectTitle}</div>
        <div className={text}>{projectText}</div>
      </div>
    </div>
  );
};

ItemTile.propTypes = {
  projectTitle: PropTypes.string.isRequired,
  projectText: PropTypes.string.isRequired,
  projectImage: PropTypes.string.isRequired,
};
