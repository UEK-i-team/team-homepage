import React, { useState } from 'react';

import CaronSVG from './caron.svg';
import {
  caronItem,
  caronItemRotated,
  container,
  menu,
  menuItem,
  menuItemDecoration,
  menuItemProjects,
  projectsOption,
  projectsOptionHidden,
} from './SidebarMenu.module.scss';

export const SidebarMenu = () => {
  const [projects, useProjects] = useState(false);
  // const [projectsOption, useProjects] = useState(false)

  const handleToggleProjects = () => {
    useProjects(!projects);
  };

  return (
    <div className={container}>
      <div className={menu}>
        <div className={menuItem}>HOME</div>
        <div className={projects ? menuItemProjects : menuItem}>
          <img
            src={CaronSVG}
            className={projects ? caronItem : caronItemRotated}
            onClick={handleToggleProjects}
          />
          <span>PROJEKTY</span>
        </div>
        <div>
          <div className={projects ? projectsOption : projectsOptionHidden}>
            <div className={menuItemDecoration}></div>
            <span>MAPA UCZELNI</span>
          </div>
          <div className={projects ? projectsOption : projectsOptionHidden}>
            <div className={menuItemDecoration}></div>
            <span>TAJNY PROJEKT PROJEKT 339</span>
          </div>
        </div>
        <div className={menuItem}>AKTUALNOŚCI</div>
        <div className={menuItem}>DOŁĄCZ DO NAS</div>
        <div className={menuItem}>KONTAKT</div>
      </div>
    </div>
  );
};
