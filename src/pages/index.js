import React from 'react';

import { Navbar } from '../components/Navbar/Navbar';
import { TitleText } from '../components/TitleText/TitleText';

const IndexPage = () => (
  <>
    <TitleText />
    <Navbar />
  </>
);

export default IndexPage;

export const Head = () => <title>Home Page</title>;
