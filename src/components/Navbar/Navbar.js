import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React, { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import SidebarDark from '../../assets/svgs/Sidebar_dark.svg';
import SidebarLight from '../../assets/svgs/Sidebar_light.svg';
import ThemeIconLight from '../../assets/svgs/ThemeIcon_dark.svg';
import ThemeIconDark from '../../assets/svgs/ThemeIcon_light.svg';
import { ThemeContext } from '../../context/ThemeContex';
import { switchLanguage } from '../../i18n/switchLanguage';
import { SidebarMenu } from '../SidebarMenu/SidebarMenu';
import {
  desktopMenu,
  desktopMenuDark,
  desktopMenuItemActive,
  desktopMenuItems,
  languageThemeWraper,
  line,
  lineDark,
  logo,
  logoContainer,
  mainContainer,
  mainContainerDark,
  name,
  sidebar,
  sidebarContainer,
} from './Navbar.module.scss';

export function Navbar() {
  const [isSidebarMenuVisible, setIsSidebarMenuVisible] = useState(false);
  const storedMenuItem = localStorage.getItem('ACTIVE_ITEM');
  const [activeMenuItem, setActiveMenuItem] = useState(storedMenuItem);
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();

  function toggleSidebarMenu() {
    setIsSidebarMenuVisible((prev) => !prev);
  }

  const handleButtonChange = () => {};

  useEffect(() => {
    localStorage.setItem('ACTIVE_ITEM', activeMenuItem);
    if (activeMenuItem !== '/') {
      handleMenuItem(activeMenuItem);
    }
  }, [activeMenuItem]);
  const handleMenuItem = (link) => {
    setActiveMenuItem(link);
    localStorage.setItem('ACTIVE_ITEM', link);
  };

  return (
    <div>
      <nav className={theme(mainContainer, mainContainerDark)}>
        <div className={logoContainer}>
          {isDarkTheme ? (
            <>
              <div className={logo}>
                <Link to="/">
                  <StaticImage
                    src="../../assets/images/logo_icon_dark_theme.png"
                    alt="ITeam Logo"
                  />
                </Link>
              </div>
              <Link to="/">
                <div className={name}>
                  <StaticImage
                    src="../../assets/images/logo_text_dark_theme.png"
                    alt="ITeam Logo"
                  />
                </div>
              </Link>
            </>
          ) : (
            <>
              <div className={logo}>
                <Link to="/" onClick={() => handleMenuItem('')}>
                  <StaticImage
                    src="../../assets/images/logo_icon_light_theme.png"
                    alt="ITeam Logo"
                  />
                </Link>
              </div>
              <Link to="/" onClick={() => handleMenuItem('')}>
                <div className={name}>
                  <StaticImage
                    src="../../assets/images/logo_text_light_theme.png"
                    alt="ITeam Logo"
                  />
                </div>
              </Link>
            </>
          )}
        </div>
        <div className={theme(desktopMenu, desktopMenuDark)}>
          <div className={desktopMenuItems}>
            <div
              className={
                activeMenuItem === 'projects' ? desktopMenuItemActive : ''
              }
              onClick={() => handleMenuItem('projects')}
            >
              <Link to="/projects">{t('projects')}</Link>
            </div>
            <div
              className={activeMenuItem === 'news' ? desktopMenuItemActive : ''}
            >
              <Link to="/" onClick={() => handleMenuItem('news')}>
                {t('news')}
              </Link>
            </div>
            <div
              className={
                activeMenuItem === 'joinUs' ? desktopMenuItemActive : ''
              }
            >
              <Link to="/" onClick={() => handleMenuItem('joinUs')}>
                {t('joinUs')}
              </Link>
            </div>
            <div
              className={
                activeMenuItem === 'contact' ? desktopMenuItemActive : ''
              }
            >
              <Link to="/" onClick={() => handleMenuItem('contact')}>
                {t('contact')}
              </Link>
            </div>
          </div>
        </div>
        <div className={languageThemeWraper}>
          <button
            onClick={() => {
              switchLanguage('pl');
              handleButtonChange();
            }}
          >
            PL
          </button>
          <span className={isDarkTheme ? lineDark : line}> | </span>
          <button
            onClick={() => {
              switchLanguage('en');
              handleButtonChange();
            }}
          >
            ENG
          </button>

          <button onClick={() => toggleTheme()}>
            {isDarkTheme ? <ThemeIconDark /> : <ThemeIconLight />}
          </button>
        </div>
        <div className={sidebarContainer}>
          <div className={sidebar}>
            <button onClick={() => toggleSidebarMenu()}>
              {isDarkTheme ? <SidebarDark /> : <SidebarLight />}
            </button>
          </div>
        </div>
      </nav>
      <SidebarMenu
        isVisible={isSidebarMenuVisible}
        onToggle={toggleSidebarMenu}
      />
    </div>
  );
}
