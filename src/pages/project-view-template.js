import '../i18n/i18n';

import React from 'react';

import { Footer } from '../components/Footer/Footer';
import { Navbar } from '../components/Navbar/Navbar';
import { Project } from '../components/Project/Project';
import { ThemeProvider } from '../context/ThemeContex';
const ProjectView = () => (
  <>
    <ThemeProvider>
      <Navbar />
      <Project
        title={'hamburgdzer'}
        images={[
          'project-homepage.jpg',
          'project-homepage.jpg',
          'project-homepage.jpg',
        ]}
        description={
          'i went to burger king, then i went back home from burger king, i went to burger king, then i went back home from burger king, i went to burger king, then i went back home from burger king, i went to burger king, then i went back home from burger king, i went to burger king, then i went back home from burger king, i went to burger king, then i went back home from burger king,'
        }
        link={'https://www.youtube.com/'}
      />
      <Footer />
    </ThemeProvider>
  </>
);

export default ProjectView;

export const Head = () => <title>Hamburger</title>;
