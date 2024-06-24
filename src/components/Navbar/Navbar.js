import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React, { useCallback, useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';

import AnimationPauseLight from '../../assets/svgs/AnimationPauseLight.svg';
import AnimationPlayLight from '../../assets/svgs/AnimationPlayLight.svg';
import GlobeSVG from '../../assets/svgs/globe.svg';
import SidebarDark from '../../assets/svgs/Sidebar_dark.svg';
import SidebarLight from '../../assets/svgs/Sidebar_light.svg';
import ThemeIconLight from '../../assets/svgs/ThemeIcon_dark.svg';
import ThemeIconDark from '../../assets/svgs/ThemeIcon_light.svg';
import { useAnimationContext } from '../../context/AnimationsContext';
import { ThemeContext } from '../../context/ThemeContex';
import { switchLanguage } from '../../i18n/switchLanguage';
import { PROJECTS_ID, SUB_PAGES } from '../../utils/constants/links';
import { SidebarMenu } from '../SidebarMenu/SidebarMenu';
import {
  activeLink,
  animate,
  animationButton,
  animationButtonDark,
  desktopMenu,
  desktopMenuDark,
  desktopMenuItem,
  desktopMenuItems,
  desktopMenuItemsDark,
  languageButton,
  languageButtonDark,
  languageThemeWraper,
  logo,
  logoContainer,
  mainContainer,
  mainContainerDark,
  menuLinks,
  name,
  noAnimate,
  sidebar,
  sidebarContainer,
  themeButton,
} from './Navbar.module.scss';

export function Navbar() {
  const [isSidebarMenuVisible, setIsSidebarMenuVisible] = useState(false);
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState('pl');
  const { togglePaused, isPaused } = useAnimationContext();

  function toggleSidebarMenu() {
    setIsSidebarMenuVisible((prev) => !prev);
  }

  const handleButtonChange = useCallback(() => {
    if (currentLanguage === 'pl') {
      switchLanguage('en');
      setCurrentLanguage('en');
    } else {
      switchLanguage('pl');
      setCurrentLanguage('pl');
    }
  }, [switchLanguage, currentLanguage]);

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
                    alt="ITeam Logo text"
                  />
                </div>
              </Link>
            </>
          ) : (
            <>
              <div className={logo}>
                <Link to="/">
                  <StaticImage
                    src="../../assets/images/logo_icon_light_theme.png"
                    alt="ITeam Logo"
                  />
                </Link>
              </div>
              <Link to="/">
                <div className={name}>
                  <StaticImage
                    src="../../assets/images/logo_text_light_theme.png"
                    alt="ITeam Logo text"
                  />
                </div>
              </Link>
            </>
          )}
        </div>
        <div className={theme(desktopMenu, desktopMenuDark)}>
          <div className={theme(desktopMenuItems, desktopMenuItemsDark)}>
            <div className={desktopMenuItem}>
              <Link
                activeClassName={activeLink}
                className={`${menuLinks} ${isPaused ? noAnimate : animate}`}
                to={SUB_PAGES.HOME}
                state={{ scrollTo: PROJECTS_ID }}
              >
                {t('projects')}
              </Link>
            </div>
            <div className={desktopMenuItem}>
              <Link
                activeClassName={activeLink}
                className={`${menuLinks} ${isPaused ? noAnimate : animate}`}
                to={SUB_PAGES.NEWS}
              >
                {t('news')}
              </Link>
            </div>
            <div className={desktopMenuItem}>
              <a
                className={`${menuLinks} ${isPaused ? noAnimate : animate}`}
                href={SUB_PAGES.JOIN_US}
              >
                {t('joinUs')}
              </a>
            </div>
            <div className={desktopMenuItem}>
              <Link
                activeClassName={activeLink}
                className={`${menuLinks} ${isPaused ? noAnimate : animate}`}
                to="/contact"
              >
                {t('contact')}
              </Link>
            </div>
          </div>
        </div>
        <div className={languageThemeWraper}>
          <button
            className={theme(languageButton, languageButtonDark)}
            onClick={handleButtonChange}
            aria-label={t('ariaLabelLangButton')}
          >
            <GlobeSVG />
            <span>{t('lang')}</span>
          </button>

          <button
            onClick={togglePaused}
            className={theme(animationButton, animationButtonDark)}
            aria-label={t('ariaLabelPauseAnimationsButton')}
          >
            {typeof window !== 'undefined' && isPaused ? (
              isDarkTheme ? (
                <AnimationPlayLight />
              ) : (
                <AnimationPlayLight />
              )
            ) : isDarkTheme ? (
              <AnimationPauseLight />
            ) : (
              <AnimationPauseLight />
            )}
          </button>

          <button
            onClick={toggleTheme}
            className={themeButton}
            aria-label={t('ariaLabelThemeButton')}
          >
            {isDarkTheme ? <ThemeIconDark /> : <ThemeIconLight />}
          </button>
        </div>
        <div className={sidebarContainer}>
          <div className={sidebar}>
            <button
              onClick={() => toggleSidebarMenu()}
              aria-label={t('ariaLabelSidebarButton')}
            >
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
