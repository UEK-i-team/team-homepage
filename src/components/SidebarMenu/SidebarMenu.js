import { Link } from 'gatsby';
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
  const facebookLink = 'https://www.facebook.com/KNIUEK';
  const githubLink = 'https://github.com/UEK-i-team';
  const [areProjectsVisible, setAreProjectsVisible] = useState(false);

  const handleToggleProjects = () => {
    setAreProjectsVisible((prev) => !prev);
  };

  return (
    <div className={container}>
      <div className={close}>
        <CloseSVG />
      </div>
      <div className={menu}>
        <div className={menuItem}>
          <Link to="/">HOME</Link>
        </div>
        <div className={areProjectsVisible ? menuItemProjects : menuItem}>
          <CaronSVG
            className={areProjectsVisible ? caronItem : caronItemRotated}
            onClick={handleToggleProjects}
          />
          <span>
            <Link to="/">PROJEKTY</Link>
          </span>
        </div>
        <div>
          <div
            className={
              areProjectsVisible ? projectsOption : projectsOptionHidden
            }
          >
            <div className={menuItemDecoration}></div>
            <span>
              <Link to="/">MAPA UCZELNI</Link>
            </span>
          </div>
          <div
            className={
              areProjectsVisible ? projectsOption : projectsOptionHidden
            }
          >
            <div className={menuItemDecoration}></div>
            <span>
              <Link to="/">TAJNY PROJEKT PROJEKT 339</Link>
            </span>
          </div>
        </div>
        <div className={menuItem}>
          <Link to="/">AKTUALNOŚCI</Link>
        </div>
        <div className={menuItem}>
          <Link to="/">DOŁĄCZ DO NAS</Link>
        </div>
        <div className={menuItem}>
          <Link to="/">KONTAKT</Link>
        </div>
      </div>
      <div className={socialMedia}>
        <a href={githubLink}>
          <GithubSVG />
        </a>
        <a href={facebookLink}>
          <FacebookSVG />
        </a>
      </div>
    </div>
  );
};
