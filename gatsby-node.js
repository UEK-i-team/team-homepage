const path = require('path');
const {
  convertTitleToLinkFormat,
} = require('./src/utils/functions/convertTitleToLinkFormat');

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const queryResults = await graphql(
    `
      {
        allContentfulPost {
          group(field: { contentful_id: SELECT }) {
            nodes {
              id
              contentful_id
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
              linkToProject
            }
          }
        }
      }
    `
  );

  if (queryResults.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  const projectTemplate = path.resolve(`src/templates/ProjectTemplate.js`);

  queryResults.data.allContentfulPost.group.forEach((groupByLang) => {
    const langPL = groupByLang.nodes.find(
      ({ node_locale }) => node_locale === 'pl'
    );
    const langEN = groupByLang.nodes.find(
      ({ node_locale }) => node_locale === 'en-US'
    );

    createPage({
      path: `/projects/${convertTitleToLinkFormat(langPL.title)}`,
      component: projectTemplate,
      context: {
        pl: langPL,
        en: langEN,
      },
    });
  });
};
