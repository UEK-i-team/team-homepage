import '../i18n/i18n';

import React from 'react';

import { Footer } from '../components/Footer/Footer';
import { Navbar } from '../components/Navbar/Navbar';
import { Project } from '../components/Project/Project';
import { ThemeProvider } from '../context/ThemeContex';
const IndexPage = () => (
  <>
    <ThemeProvider>
      <Navbar />
      <Project
        title="Projekt"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eros tellus, sollicitudin nec neque eget, rhoncus fringilla quam. Nullam fermentum augue eu pharetra elementum. Sed eu diam mauris. Aliquam vestibulum et ante ut pharetra. Quisque eget vestibulum sapien, eget ultrices odio. Suspendisse non pretium massa. Cras ultricies lacus quis congue semper. Nullam vel suscipit eros. Praesent lacinia mattis sem a cursus. Phasellus sodales id leo nec mattis. Etiam dictum suscipit quam et commodo. Ut sed quam eu mauris mattis tristique quis laoreet leo.Cras ultricies lacus quis congue semper. Nullam vel suscipit eros. Praesent lacinia mattis sem a cursus. Phasellus sodales id leo nec mattis. Etiam dictum suscipit quam et commodo. Ut sed quam eu mauris mattis tristique quis laoreet leo."
      />
      <Footer />
    </ThemeProvider>
  </>
);

export default IndexPage;

export const Head = () => <title>Home Page</title>;
