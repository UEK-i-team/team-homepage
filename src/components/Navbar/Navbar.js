import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React, { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import SidebarDark from '../../assets/svgs/Sidebar_dark.svg';
import SidebarLight from '../../assets/svgs/Sidebar_light.svg';
import ThemeIconLight from '../../assets/svgs/ThemeIcon_dark.svg';
import ThemeIconDark from '../../assets/svgs/ThemeIcon_light.svg';
import { ThemeContext } from '../../context/ThemeContex';
import { changeLanguage } from '../LanguageSwitching/LanguageSwitch';
import { SidebarMenu } from '../SidebarMenu/SidebarMenu';
import {
  darkActiveButton,
  darkInactiveButton,
  desktopMenu,
  desktopMenuDark,
  desktopMenuItem,
  languageThemeWraper,
  lightActiveButton,
  lightInactiveButton,
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
  const [language, setLanguage] = useState('');
  const [buttonColorPL, setButtonColorPL] = useState('');
  const [buttonColorENG, setButtonColorENG] = useState('');
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();

  function toggleSidebarMenu() {
    setIsSidebarMenuVisible((prev) => !prev);
  }

  const handleButtonChange = (lang) => {
    setLanguage(lang);
  };

  useEffect(() => {
    if (language === 'pl') {
      setButtonColorPL(isDarkTheme ? darkActiveButton : lightActiveButton);
      setButtonColorENG(isDarkTheme ? darkInactiveButton : lightInactiveButton);
    } else if (language === 'en') {
      setButtonColorENG(isDarkTheme ? darkActiveButton : lightActiveButton);
      setButtonColorPL(isDarkTheme ? darkInactiveButton : lightInactiveButton);
    }
  }, [language, isDarkTheme]);
  return (
    <div>
      <nav className={theme(mainContainer, mainContainerDark)}>
        <div className={logoContainer}>
          {isDarkTheme ? (
            <>
              <div className={logo}>
                <StaticImage
                  src="../../assets/images/logo_icon_dark_theme.png"
                  alt="ITeam Logo"
                />
              </div>
              <div className={name}>
                <StaticImage
                  src="../../assets/images/logo_text_dark_theme.png"
                  alt="ITeam Logo"
                />
              </div>
            </>
          ) : (
            <>
              <div className={logo}>
                <StaticImage
                  src="../../assets/images/logo_icon_light_theme.png"
                  alt="ITeam Logo"
                />
              </div>
              <div className={name}>
                <StaticImage
                  src="../../assets/images/logo_text_light_theme.png"
                  alt="ITeam Logo"
                />
              </div>
            </>
          )}
        </div>
        <div className={theme(desktopMenu, desktopMenuDark)}>
          <div className={desktopMenuItem}>
            <Link to="/">{t('projekty')}</Link>
          </div>
          <div className={desktopMenuItem}>
            <Link to="/">{t('news')}</Link>
          </div>
          <div className={desktopMenuItem}>
            <Link to="/">{t('joinus')}</Link>
          </div>
          <div className={desktopMenuItem}>
            <Link to="/">{t('kontakt')}</Link>
          </div>
        </div>
        <div className={languageThemeWraper}>
          <button
            onClick={() => {
              changeLanguage('pl');
              handleButtonChange('pl');
            }}
            className={buttonColorPL}
          >
            PL
          </button>
          <span className={isDarkTheme ? lineDark : line}> | </span>
          <button
            onClick={() => {
              changeLanguage('en');
              handleButtonChange('en');
            }}
            className={buttonColorENG}
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
