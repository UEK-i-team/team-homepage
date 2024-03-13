import '../i18n/i18n';

import React from 'react';

import { Footer } from '../components/Footer/Footer';
import { Navbar } from '../components/Navbar/Navbar';
import { Project } from '../components/Project/Project';
import { AnimationsProvider } from '../context/AnimationsContext';
import { ThemeProvider } from '../context/ThemeContex';
const ProjectView = () => (
  <>
    <ThemeProvider>
      <AnimationsProvider>
        <Navbar />
        <Project
          title={'Projekt'}
          images={[
            'project-homepage.jpg',
            'project-homepage.jpg',
            'project-homepage.jpg',
          ]}
          description={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In volutpat erat orci. Cras vestibulum urna sagittis, faucibus lectus sit amet, malesuada dolor. Integer at nisl a ex blandit mattis. Nam sit amet mi cursus, sodales ligula at, mollis diam. Nunc semper tellus turpis, vel suscipit augue commodo sed. Ut id fringilla tortor, nec euismod nulla. Aliquam vestibulum libero at nibh pulvinar luctus. Nulla mollis egestas est, eu cursus turpis imperdiet ut. Sed et urna in orci gravida cursus. Aenean dictum hendrerit enim in tempus. Nunc sed porttitor leo. Integer magna lorem, rutrum eget porttitor vitae, fermentum at metus. In hac habitasse platea dictumst. Morbi posuere nulla sit amet sapien vestibulum, eget porta felis elementum. Morbi vestibulum leo vel posuere elementum. Donec et ex vitae neque varius ornare eu a nibh. '
          }
          link={'https://www.youtube.com/'}
        />
        <Footer />
      </AnimationsProvider>
    </ThemeProvider>
  </>
);

export default ProjectView;

export const Head = () => <title>Hamburger</title>;
