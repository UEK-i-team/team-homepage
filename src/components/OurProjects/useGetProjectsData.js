import { graphql, useStaticQuery } from 'gatsby';
import { useCallback, useMemo } from 'react';

export const useGetProjectsData = () => {
  const queryResultsProjectsData = useStaticQuery(graphql`
    query {
      allContentfulPost {
        group(field: { contentful_id: SELECT }) {
          nodes {
            id
            title
            node_locale
            images {
              gatsbyImageData
              title
              description
            }
            description {
              description
            }
          }
        }
      }
    }
  `);

  const refactorData = useCallback(
    (project) => ({
      id: project.id,
      title: project.title,
      description: project.description.description,
      image: {
        image: project.images[0].gatsbyImageData,
        description: project.images[0].description,
      },
    }),
    []
  );

  const projectsData = useMemo(
    () =>
      queryResultsProjectsData.allContentfulPost.group.map(
        ({ nodes: projects }) => {
          const langPLNode = projects.find(
            ({ node_locale }) => node_locale === 'pl'
          );
          const langENNode = projects.find(
            ({ node_locale }) => node_locale === 'en-US'
          );

          return {
            en: refactorData(langENNode),
            pl: refactorData(langPLNode),
          };
        }
      ),
    [queryResultsProjectsData]
  );

  return projectsData;
};
