import '../i18n/i18n';

import React from 'react';
import { useTranslation } from 'react-i18next';

import { Footer } from '../components/Footer/Footer';
import { Navbar } from '../components/Navbar/Navbar';
import { News } from '../components/News/News';
import { AnimationsProvider } from '../context/AnimationsContext';
import { ThemeProvider } from '../context/ThemeContex';
const NewsPage = () => (
  <>
    <ThemeProvider>
      <AnimationsProvider>
        <Navbar />
        <News />
        <Footer />
      </AnimationsProvider>
    </ThemeProvider>
  </>
);

export default NewsPage;

export const Head = () => {
  const { t } = useTranslation();

  return <title>{t('news')}</title>;
};
