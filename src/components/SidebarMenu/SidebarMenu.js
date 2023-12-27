import React, { useState } from 'react';

import CaronSVG from '../../assets/svgs/caron.svg';
import CloseSVG from '../../assets/svgs/close.svg';
import FacebookSVG from '../../assets/svgs/facebook.svg';
import GithubSVG from '../../assets/svgs/github.svg';
import {
  caronItem,
  caronItemRotated,
  close,
  container,
  menu,
  menuItem,
  menuItemDecoration,
  menuItemProjects,
  projectsOption,
  projectsOptionHidden,
  socialMedia,
} from './SidebarMenu.module.scss';

export const SidebarMenu = () => {
  const [projects, useProjects] = useState(false);

  const handleToggleProjects = () => {
    useProjects(!projects);
  };

  return (
    <div className={container}>
      <CloseSVG className={close} />
      <div className={menu}>
        <div className={menuItem}>HOME</div>
        <div className={projects ? menuItemProjects : menuItem}>
          <CaronSVG
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
      <div className={socialMedia}>
        <GithubSVG />
        <FacebookSVG />
      </div>
    </div>
  );
};
