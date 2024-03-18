import React from 'react';

import { OurProjects } from '../components/OurProjects/OurProjects';
import { WhoWeAre } from '../components/WhoWeAre/WhoWeAre';
const IndexPage = () => (
  <>
    <WhoWeAre />
    <OurProjects />
  </>
);

export default IndexPage;

export const Head = () => <title>Home Page</title>;
