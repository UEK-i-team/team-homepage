import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React, { useContext }, { useEffect, useState } from 'react';

import SidebarDark from '../../assets/svgs/Sidebar_dark.svg';
import SidebarLight from '../../assets/svgs/Sidebar_light.svg';
import ThemeIconLight from '../../assets/svgs/ThemeIcon_dark.svg';
import ThemeIconDark from '../../assets/svgs/ThemeIcon_light.svg';
import { ThemeContext } from '../../context/ThemeContex';
import { changeLanguage } from '../LanguageSwitching/LanguageSwitch';
import { SidebarMenu } from '../SidebarMenu/SidebarMenu';
import {
  darkActiveButton,
  desktopMenu,
  desktopMenuDark,
  desktopMenuItem,
  darkInactiveButton,
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

  function toggleSidebarMenu() {
    setIsSidebarMenuVisible((prev) => !prev);
  }

  function switchTheme() {
    setIsDarkTheme((prev) => !prev);
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
            <Link to="/">Projekty</Link>
          </div>
          <div className={desktopMenuItem}>
            <Link to="/">Aktualności</Link>
          </div>
          <div className={desktopMenuItem}>
            <Link to="/">Dołącz do nas</Link>
          </div>
          <div className={desktopMenuItem}>
            <Link to="/">Kontakt</Link>
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
