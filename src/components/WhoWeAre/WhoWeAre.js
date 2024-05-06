import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';

import { ThemeContext } from '../../context/ThemeContex';
import {
  backgroundDark,
  backgroundLight,
  container,
  h1Dark,
  h1Light,
  pDark,
  pLight,
} from '../WhoWeAre/WhoWeAre.module.scss';

export const WhoWeAre = () => {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);

  return (
    <section className={`${container}`}>
      <div className={theme(backgroundLight, backgroundDark)}>
        <h1 className={theme(h1Light, h1Dark)}>{t('heading')}</h1>
        <p className={theme(pLight, pDark)}>{t('description')}</p>
      </div>
    </section>
  );
};
