import React from 'react';

import { Navbar } from '../components/Navbar/Navbar';
import { WhoWeAre } from '../components/WhoWeAre/WhoWeAre';
import { ThemeProvider } from '../context/ThemeContex';
const IndexPage = () => (
  <>
    <ThemeProvider>
      <Navbar />
      <WhoWeAre />
      <h1>hello</h1>
    </ThemeProvider>
  </>
);

export default IndexPage;

export const Head = () => <title>Home Page</title>;
