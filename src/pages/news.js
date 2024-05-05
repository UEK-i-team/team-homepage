import '../i18n/i18n';

import React from 'react';
import { useTranslation } from 'react-i18next';

import { News } from '../components/News/News';
const NewsPage = () => <News />;

export default NewsPage;

export const Head = () => {
  const { t } = useTranslation();

  return <title>{t('news')}</title>;
};
