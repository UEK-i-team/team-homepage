import '../i18n/i18n';

import React from 'react';

import { Footer } from '../components/Footer/Footer';
import { Navbar } from '../components/Navbar/Navbar';
import { ThemeProvider } from '../context/ThemeContex';
import { Project } from '../components/Project/Project';
const ProjectView = () => (
  <>
    <ThemeProvider>
      <Navbar />
      <Project  title={} description={} link={}/>
      <Footer />
    </ThemeProvider>
  </>
);

export default ProjectView;

