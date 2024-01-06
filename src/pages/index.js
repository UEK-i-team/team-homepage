import React from 'react';

import { Navbar } from '../components/Navbar/Navbar';
import { ThemeProvider } from '../components/ThemeProvider/ThemeProvider';
const IndexPage = () => (
  <>
    <ThemeProvider>
      <Navbar />
    </ThemeProvider>
  </>
);

export default IndexPage;

export const Head = () => <title>Home Page</title>;
