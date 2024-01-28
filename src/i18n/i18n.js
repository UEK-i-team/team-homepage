import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslations from './enTranslation';
import plTranslations from './plTranslation';

i18n.use(initReactI18next).init({
  resources: {
    en: enTranslations,
    pl: plTranslations,
  },
  lng: 'pl',
  fallbackLng: 'pl',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
