import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';

import { ThemeContext } from '../../context/ThemeContex';
import { convertTitleToLinkFormat } from '../../utils/functions/convertTitleToLinkFormat';
import { ItemTile } from '../ItemTile/ItemTile';
import { container, darkContainer, title } from './OurProjects.module.scss';
import { useGetProjectsData } from './useGetProjectsData';

export const OurProjects = () => {
  const { theme } = useContext(ThemeContext);
  const { t, i18n } = useTranslation();
  const projectsData = useGetProjectsData();

  const currLang = i18n.language;

  return (
    <section className={theme(container, darkContainer)}>
      <div>
        <h1 className={title}>{t('ourProjects')}</h1>
        {projectsData.map((project) => (
          <ItemTile
            key={project[currLang].id}
            itemTitle={project[currLang].title}
            itemImageAlt={project[currLang].image.description}
            itemText={project[currLang].description}
            itemImage={project[currLang].image.image}
            itemLink={`projects/${convertTitleToLinkFormat(project.pl.title)}`}
          />
        ))}
      </div>
    </section>
  );
};
