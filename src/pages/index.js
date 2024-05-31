import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { OurProjects } from '../components/OurProjects/OurProjects';
import { WhoWeAre } from '../components/WhoWeAre/WhoWeAre';
import { useScrollTo } from '../hooks/useScrollTo';

const IndexPage = ({ location }) => {
  const { i18n } = useTranslation();
  const currLang = i18n.language;
  useEffect(() => {
    document.documentElement.lang = currLang; // Set your language code here
  }, [currLang]);

  useScrollTo(location);

  return (
    <>
      <WhoWeAre />
      <OurProjects />
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;

IndexPage.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({ scrollTo: PropTypes.string.isRequired }),
  }),
};
