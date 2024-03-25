import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React, { useCallback, useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';

import GlobeSVG from '../../assets/svgs/globe.svg';
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
  desktopMenuItem,
  languageButton,
  languageButtonDark,
  languageThemeWraper,
  logo,
  logoContainer,
  mainContainer,
  mainContainerDark,
  name,
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
          <div className={desktopMenuItem}>
            <Link to="/">{t('projects')}</Link>
          </div>
          <div className={desktopMenuItem}>
            <Link to="/news/">{t('news')}</Link>
          </div>
          <div className={desktopMenuItem}>
            <Link to="/">{t('joinUs')}</Link>
          </div>
          <div className={desktopMenuItem}>
            <Link to="/">{t('contact')}</Link>
          </div>
        </div>
        <div className={languageThemeWraper}>
          <button
            className={theme(languageButton, languageButtonDark)}
            onClick={handleButtonChange}
          >
            <GlobeSVG />
            <span>{t('lang')}</span>
          </button>

          <button onClick={toggleTheme} className={themeButton}>
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
