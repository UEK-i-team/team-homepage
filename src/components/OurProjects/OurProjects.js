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
          itemText="Jesteś tutaj! Nulla reprehenderit enim elit quis veniam adipisicing ut veniam minim do adipisicing. Id reprehenderit id cupidatat sunt magna ex ullamco ad sit aute. Fugiat amet ad veniam fugiat sit nulla pariatur minim eu laborum id minim anim. Ullamco id tempor id aliqua occaecat velit duis. Fugiat ad in culpa ea reprehenderit do. Eu proident sunt nulla ut anim amet commodo tempor ullamco enim sunt id deserunt elit. Tempor cupidatat amet adipisicing elit ea non amet nulla consequat minim aliquip sunt. Aute in dolor ad Lorem cupidatat amet id est sit esse voluptate. Eu nulla tempor irure sunt ullamco ullamco ex mollit velit elit excepteur nisi dolore. Veniam commodo laboris ut veniam incididunt tempor exercitation. Commodo culpa commodo fugiat ex eu incididunt ex proident veniam."
          itemImage="project-homepage.png"
          itemLink="/projectView"
        />
        <ItemTile
          itemTitle="TAJNY PROJEKT 339"
          itemImageAlt="tajny projekt"
          itemText="Już wkrótce... Ipsum Lorem ut amet duis aute sit velit qui. Minim enim ullamco consequat magna aute sunt do excepteur laboris laboris sint ex ad. Nulla nulla enim duis nulla elit dolor veniam ut officia velit veniam aliquip. Fugiat dolore ad voluptate velit anim mollit ipsum do aliquip pariatur quis. Nisi cillum commodo in do pariatur occaecat mollit ea. Consequat nostrud eiusmod in nisi aliquip sint id elit. Ipsum nostrud est nostrud dolore occaecat exercitation nisi pariatur esse amet aliquip proident adipisicing. Lorem fugiat ex amet consequat labore nulla velit adipisicing sint qui nostrud laboris eiusmod amet. Labore dolor est et nisi pariatur ea elit consectetur exercitation deserunt do eiusmod incididunt duis. Aliquip do eiusmod laborum id qui in sunt commodo adipisicing est. Lorem adipisicing duis veniam consectetur enim magna elit dolor do consectetur quis."
          itemImage="project-homepage.png"
          itemLink="/projectView"
        />
      </div>
    </section>
  );
};
