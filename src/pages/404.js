import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import NotFound from '../components/NotFound/NotFound';

const NotFoundPage = () => {
  const { i18n } = useTranslation();
  const currLang = i18n.language;
  useEffect(() => {
    document.documentElement.lang = currLang;
  }, [currLang]);

  return (
    <>
      <NotFound />
    </>
  );
};

export default NotFoundPage;
