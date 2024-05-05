import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import CaronSVG from '../../assets/svgs/caron.svg';
import CloseSVG from '../../assets/svgs/close.svg';
import FacebookSVG from '../../assets/svgs/facebook.svg';
import GithubSVG from '../../assets/svgs/github.svg';
import { ThemeContext } from '../../context/ThemeContex';
import { FACEBOOK_LINK, GITHUB_LINK } from '../../utils/constants/links';
import { convertTitleToLinkFormat } from '../../utils/functions/convertTitleToLinkFormat';
import { useGetProjectsData } from '../OurProjects/useGetProjectsData';
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
  const { t, i18n } = useTranslation();
  const projectsData = useGetProjectsData();

  const currLang = i18n.language;

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

    document && document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document && document.removeEventListener('mousedown', handleClickOutside);
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
        <button
          className={close}
          onClick={onToggle}
          tabIndex={isVisible ? 0 : -1}
          aria-label={t('ariaLabelSidebarCloseButton')}
        >
          <CloseSVG />
        </button>
        <div className={menu}>
          <div className={menuItem}>
            <Link to="/" tabIndex={isVisible ? 0 : -1}>
              {t('home')}
            </Link>
          </div>
          <div
            onClick={handleToggleProjects}
            className={areProjectsVisible ? menuItemProjects : menuItem}
          >
            <button tabIndex={isVisible ? 0 : -1}>
              <CaronSVG
                className={areProjectsVisible ? caronItem : caronItemRotated}
              />
              <span>
                <Link to="/" tabIndex={isVisible ? 0 : -1}>
                  {t('projects')}
                </Link>
              </span>
            </button>
          </div>
          <div>
            {projectsData.map((project) => (
              <div
                key={project[currLang].id}
                className={
                  areProjectsVisible ? projectsOption : projectsOptionHidden
                }
              >
                <div className={menuItemDecoration}></div>
                <span>
                  <Link
                    onClick={onToggle}
                    to={`/projects/${convertTitleToLinkFormat(
                      project.pl.title
                    )}`}
                    tabIndex={isVisible ? 0 : -1}
                  >
                    {project[currLang].title}
                  </Link>
                </span>
              </div>
            ))}
          </div>
          <div className={menuItem}>
            <Link to="/news/" tabIndex={isVisible ? 0 : -1}>
              {t('news')}
            </Link>
          </div>
          <div className={menuItem}>
            <Link to="/" tabIndex={isVisible ? 0 : -1}>
              {t('joinUs')}
            </Link>
          </div>
          <div className={menuItem}>
            <Link to="/" tabIndex={isVisible ? 0 : -1}>
              {t('contact')}
            </Link>
          </div>
        </div>
        <div className={socialMedia}>
          <a
            href={GITHUB_LINK}
            tabIndex={isVisible ? 0 : -1}
            aria-label="I:: team github link"
          >
            <GithubSVG />
          </a>
          <a
            href={FACEBOOK_LINK}
            tabIndex={isVisible ? 0 : -1}
            aria-label="I:: team facebook link"
          >
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
SidebarMenu.propTypes = {
  onToggle: PropTypes.func.isRequired,
};
