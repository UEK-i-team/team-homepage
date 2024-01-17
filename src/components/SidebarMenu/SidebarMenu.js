import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React, { useContext, useEffect, useRef, useState } from 'react';

import CaronSVG from '../../assets/svgs/caron.svg';
import CloseSVG from '../../assets/svgs/close.svg';
import FacebookSVG from '../../assets/svgs/facebook.svg';
import GithubSVG from '../../assets/svgs/github.svg';
import { ThemeContext } from '../../context/ThemeContex';
import { FACEBOOK_LINK, GITHUB_LINK } from '../../utils/constants/links';
import {
  caronItem,
  caronItemRotated,
  close,
  containerDark,
  containerHiddenDark,
  containerHiddenLight,
  containerLight,
  menu,
  menuItem,
  menuItemDecoration,
  menuItemProjects,
  projectsOption,
  projectsOptionHidden,
  socialMedia,
} from './SidebarMenu.module.scss';

export const SidebarMenu = ({ isVisible, onToggle }) => {
  const sidebarRef = useRef();
  const { isDarkTheme } = useContext(ThemeContext);
  const [areProjectsVisible, setAreProjectsVisible] = useState(false);

  const handleToggleProjects = () => {
    setAreProjectsVisible((prev) => !prev);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        if (isVisible) {
          onToggle();
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onToggle, isVisible]);

  return (
    <div ref={sidebarRef}>
      <div
        className={
          isVisible
            ? isDarkTheme
              ? containerDark
              : containerLight
            : isDarkTheme
            ? containerHiddenDark
            : containerHiddenLight
        }
      >
        <button className={close} onClick={onToggle}>
          <CloseSVG />
        </button>
        <div className={menu}>
          <div className={menuItem}>
            <Link to="/">HOME</Link>
          </div>
          <div
            onClick={handleToggleProjects}
            className={areProjectsVisible ? menuItemProjects : menuItem}
          >
            <button>
              <CaronSVG
                className={areProjectsVisible ? caronItem : caronItemRotated}
              />
              <span>
                <Link to="/">PROJEKTY</Link>
              </span>
            </button>
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
          <a href={GITHUB_LINK}>
            <GithubSVG />
          </a>
          <a href={FACEBOOK_LINK}>
            <FacebookSVG />
          </a>
        </div>
      </div>
    </div>
  );
};

SidebarMenu.propTypes = {
  isVisible: PropTypes.bool.isRequired,
};
