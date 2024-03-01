import '../i18n/i18n';

import PropTypes from 'prop-types';
import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { Project } from '../components/Project/Project';

const ProjectTemplate = ({ pageContext }) => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const content = useMemo(
    () => ({
      title: pageContext[currentLanguage].title,
      description: pageContext[currentLanguage].description.description,
      images: pageContext[currentLanguage].images.map(
        ({ description, gatsbyImageData }) => ({
          image: gatsbyImageData,
          description,
        })
      ),
      linkToProject: pageContext[currentLanguage].linkToProject,
    }),
    [pageContext, currentLanguage]
  );

  return (
    <>
      <Project
        title={content.title}
        images={content.images}
        description={content.description}
        link={content.linkToProject}
      />
    </>
  );
};
export default ProjectTemplate;

ProjectTemplate.propTypes = {
  pageContext: PropTypes.shape({
    pl: PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.shape({ description: PropTypes.string.isRequired })
        .isRequired,
      images: PropTypes.shape({
        gatsbyImageData: PropTypes.object.isRequired,
        description: PropTypes.string.isRequired,
      }).isRequired,
      linkToProject: PropTypes.string.isRequired,
    }).isRequired,
    en: PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.shape({ description: PropTypes.string.isRequired })
        .isRequired,
      images: PropTypes.shape({
        gatsbyImageData: PropTypes.object.isRequired,
        description: PropTypes.string.isRequired,
      }).isRequired,
      linkToProject: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
