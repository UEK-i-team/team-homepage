import '../i18n/i18n';

import React from 'react';

import { Footer } from '../components/Footer/Footer';
import { Navbar } from '../components/Navbar/Navbar';
import { News } from '../components/News/News';
import { ThemeProvider } from '../context/ThemeContex';
const NewsPage = () => (
  <>
    <ThemeProvider>
      <Navbar />
      <News />
      <Footer />
    </ThemeProvider>
  </>
);

export default NewsPage;

export const Head = () => <title>News</title>;
