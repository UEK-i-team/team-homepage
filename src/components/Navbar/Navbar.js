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
  darkActiveLanguageButton,
  darkInactiveLanguageButton,
  desktopMenu,
  desktopMenuDark,
  desktopMenuItem,
  languageThemeWraper,
  lightActiveLanguageButton,
  lightInactiveLanguageButton,
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
  const [language, setLanguage] = useState('pl');
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
      setButtonColorPL(
        theme(lightActiveLanguageButton, darkActiveLanguageButton)
      );
      setButtonColorENG(
        theme(lightInactiveLanguageButton, darkInactiveLanguageButton)
      );
    } else if (language === 'en') {
      setButtonColorENG(
        theme(lightActiveLanguageButton, darkActiveLanguageButton)
      );
      setButtonColorPL(
        theme(lightInactiveLanguageButton, darkInactiveLanguageButton)
      );
    }
  }, [language, isDarkTheme]);
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
              <div className={name}>
                <Link to="/">
                  <StaticImage
                    src="../../assets/images/logo_text_dark_theme.png"
                    alt="ITeam Logo"
                  />
                </Link>
              </div>
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
              <div className={name}>
                <Link to="/">
                  <StaticImage
                    src="../../assets/images/logo_text_light_theme.png"
                    alt="ITeam Logo"
                  />
                </Link>
              </div>
            </>
          )}
        </div>
        <div className={theme(desktopMenu, desktopMenuDark)}>
          <div className={desktopMenuItem}>
            <Link to="/">{t('projects')}</Link>
          </div>
          <div className={desktopMenuItem}>
            <Link to="/">{t('news')}</Link>
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
            onClick={() => {
              switchLanguage('pl');
              handleButtonChange('pl');
            }}
            className={buttonColorPL}
          >
            PL
          </button>
          <span className={isDarkTheme ? lineDark : line}> | </span>
          <button
            onClick={() => {
              switchLanguage('en');
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
