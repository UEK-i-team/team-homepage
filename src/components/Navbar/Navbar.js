import { StaticImage } from 'gatsby-plugin-image';
import React, { useContext } from 'react';
import { useState } from 'react';

import SidebarDark from '../../assets/svgs/Sidebar_dark.svg';
import SidebarLight from '../../assets/svgs/Sidebar_light.svg';
import ThemeIconLight from '../../assets/svgs/ThemeIcon_dark.svg';
import ThemeIconDark from '../../assets/svgs/ThemeIcon_light.svg';
import { ThemeContext } from '../../context/ThemeContex';
import { SidebarMenu } from '../SidebarMenu/SidebarMenu';
import {
  engLight,
  languageThemeWraper,
  line,
  lineDark,
  logo,
  logoContainer,
  mainContainer,
  mainContainerDark,
  name,
  plDark,
  plLight,
  sidebar,
  sidebarContainer,
} from './Navbar.module.scss';

export function Navbar() {
  const [isSidebarMenuVisible, setIsSidebarMenuVisible] = useState(false);
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

  function toggleSidebarMenu() {
    setIsSidebarMenuVisible((prev) => !prev);
  }

  return (
    <div>
      <nav className={`${mainContainer} ${isDarkTheme && mainContainerDark}`}>
        <div className={logoContainer}>
          {isDarkTheme ? (
            <>
              <div className={logo}>
                <StaticImage
                  src="../../assets/images/logo_icon_dark_theme.png"
                  alt="ITeam Logo"
                ></StaticImage>
              </div>
              <div className={name}>
                <StaticImage
                  src="../../assets/images/logo_text_dark_theme.png"
                  alt="ITeam Logo"
                ></StaticImage>
              </div>
            </>
          ) : (
            <>
              <div className={logo}>
                <StaticImage
                  src="../../assets/images/logo_icon_light_theme.png"
                  alt="ITeam Logo"
                ></StaticImage>
              </div>
              <div className={name}>
                <StaticImage
                  src="../../assets/images/logo_text_light_theme.png"
                  alt="ITeam Logo"
                ></StaticImage>
              </div>
            </>
          )}
        </div>
        <div className={languageThemeWraper}>
          <button id={isDarkTheme ? plDark : plLight}>PL</button>
          <span id={isDarkTheme ? lineDark : line}> | </span>
          <button id={engLight}>ENG</button>

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
