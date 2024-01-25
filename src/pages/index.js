import '../i18n/i18n';

import React from 'react';

import { Carousel } from '../components/Carousel/Carousel';
import { Footer } from '../components/Footer/Footer';
import { Navbar } from '../components/Navbar/Navbar';
import { OurProjects } from '../components/OurProjects/OurProjects';
import { WhoWeAre } from '../components/WhoWeAre/WhoWeAre';
import { ThemeProvider } from '../context/ThemeContex';
const IndexPage = () => (
  <>
    <ThemeProvider>
      <Navbar />
      <Carousel />
      <Footer />
    </ThemeProvider>
  </>
);

export default IndexPage;

export const Head = () => <title>Home Page</title>;
