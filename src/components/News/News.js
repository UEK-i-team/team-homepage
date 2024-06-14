import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';

import { ThemeContext } from '../../context/ThemeContex';
import { Carousel } from '../Carousel/Carousel';
import { ItemTile } from '../ItemTile/ItemTile';
import {
  container,
  darkContainer,
  postsContainer,
  title,
} from './News.module.scss';

export const News = () => {
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();

  return (
    <div>
      <Carousel />
      <section className={theme(container, darkContainer)}>
        <div>
          <h1 className={title}>{t('news')}</h1>
          <div className={postsContainer}>
            <ItemTile
              itemLink={`/`}
              itemTitle="Pierwszy post"
              itemText="To jest pierwszy post!"
              itemImage=""
            />
          </div>
        </div>
      </section>
    </div>
  );
};
