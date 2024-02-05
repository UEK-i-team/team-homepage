import '../i18n/i18n';

import React from 'react';

import { Footer } from '../components/Footer/Footer';
import { Navbar } from '../components/Navbar/Navbar';
import { OurProjects } from '../components/OurProjects/OurProjects';
import { WhoWeAre } from '../components/WhoWeAre/WhoWeAre';
import { ThemeProvider } from '../context/ThemeContex';
const IndexPage = () => (
  <>
    <ThemeProvider>
      <Navbar />
      <WhoWeAre />
      <OurProjects />
      <Footer />
    </ThemeProvider>
  </>
);

export default IndexPage;

export const Head = () => <title>Home Page</title>;
