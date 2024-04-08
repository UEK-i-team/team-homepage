import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';

import { ThemeContext } from '../../context/ThemeContex';
import { ItemTile } from '../ItemTile/ItemTile';
import { container, darkContainer, title } from './News.module.scss';

export const News = () => {
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();
  return (
    <section className={theme(container, darkContainer)}>
      <div>
        <h1 className={title}>{t('news')}</h1>
        <ItemTile
          itemTitle="Pierwszy post"
          itemImageAlt="pierwszy post"
          itemText="To jest pierwszy post!"
          itemImage="project-homepage.png"
        />
      </div>
    </section>
  );
};
