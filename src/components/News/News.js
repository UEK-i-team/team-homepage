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
          itemText="To jest pierwszy post! Ullamco ad eiusmod nulla sit esse. Fugiat est tempor commodo elit laboris. Incididunt labore voluptate ullamco ullamco magna cillum commodo officia esse tempor ea laboris aliqua. Nisi exercitation tempor adipisicing veniam. Do veniam minim dolore sit reprehenderit exercitation sit ad id laborum velit. Pariatur tempor quis ea tempor exercitation consectetur anim tempor anim dolore anim id. Dolor non aliqua laborum exercitation duis duis sint sunt. Voluptate qui consequat esse consequat deserunt nostrud exercitation culpa ad. Excepteur aute cupidatat aliquip eu do Lorem non eiusmod ea consequat commodo ullamco commodo. Excepteur labore fugiat ea mollit consectetur non amet id occaecat fugiat ad. Esse ut enim ullamco culpa sint exercitation ut labore ex. In adipisicing tempor nostrud ipsum laboris ullamco ea non fugiat."
          itemImage="project-homepage.png"
        />
      </div>
    </section>
  );
};
