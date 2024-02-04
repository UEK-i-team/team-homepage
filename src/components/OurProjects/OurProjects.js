import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';

import { ThemeContext } from '../../context/ThemeContex';
import { ItemTile } from '../ItemTile/ItemTile';
import { container, darkContainer, title } from './OurProjects.module.scss';

export const OurProjects = () => {
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();
  return (
    <section className={theme(container, darkContainer)}>
      <div>
        <h1 className={title}>{t('ourProjects')}</h1>
        <ItemTile
          itemTitle="Strona Koła Naukowego i::team"
          itemImageAlt="projekt strony"
          itemText="Jesteś tutaj!"
          itemImage="project-homepage.png"
        />
        <ItemTile
          itemTitle="TAJNY PROJEKT 339"
          itemImageAlt="tajny projekt"
          itemText="Już wkrótce..."
          itemImage="project-homepage.png"
        />
      </div>
    </section>
  );
};
