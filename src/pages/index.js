import React from 'react';

// import imgSrc from '../assets/images/image35.png';
import { ItemTile } from '../components/ItemTile/ItemTile';
import { TitleText } from '../components/TitleText/TitleText';

const IndexPage = () => (
  <>
    <TitleText />
    <ItemTile
      projectTitle="Project title"
      projectText="Eu non culpa amet sunt excepteur nostrud cupidatat dolor aliqua incididunt aliquip non non. Ad amet dolor sint enim tempor. Tempor velit ad occaecat consectetur elit occaecat officia voluptate proident et mollit."
      projectImage={'image35.png'}
    />
    <ItemTile
      projectTitle="Project title"
      projectText="Eu non cuasddunt aliquip non non. Adasd occaecat consectetur elit occaecat officia voluptate proident et mollit."
      projectImage={'gatsbyImageIcon.png'}
    />
  </>
);

export default IndexPage;

export const Head = () => <title>Home Page</title>;
