import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { OurProjects } from '../components/OurProjects/OurProjects';
import { WhoWeAre } from '../components/WhoWeAre/WhoWeAre';

const IndexPage = () => {
  const { i18n } = useTranslation();
  const currLang = i18n.language;
  useEffect(() => {
    document.documentElement.lang = currLang; // Set your language code here
  }, [currLang]);

  return (
    <>
      <WhoWeAre />
      <OurProjects />
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
