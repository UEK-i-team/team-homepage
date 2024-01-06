import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { useState } from 'react';

import SidebarDark from '../../assets/svgs/Sidebar_dark.svg';
import SidebarLight from '../../assets/svgs/Sidebar_light.svg';
import ThemeIconLight from '../../assets/svgs/ThemeIcon_dark.svg';
import ThemeIconDark from '../../assets/svgs/ThemeIcon_light.svg';
import {
  engLight,
  languageThemeWraper,
  Line,
  lineDark,
  Logo,
  logoContainer,
  mainContainer,
  mainContainerDark,
  Name,
  plDark,
  plLight,
  Sidebar,
  sidebarContainer,
} from './Navbar.module.scss';

export function Navbar() {
  const [isLightTheme, setIsLightTheme] = useState(true);

  function switchTheme() {
    setIsLightTheme((prev) => !prev);
  }
  return (
    <nav className={`${mainContainer} ${!isLightTheme && mainContainerDark}`}>
      <div className={logoContainer}>
        {isLightTheme ? (
          <>
            <div className={Logo}>
              <StaticImage
                src="../../assets/images/logo_icon_light_theme.png"
                alt="ITeam Logo"
              ></StaticImage>
            </div>
            <div className={Name}>
              <StaticImage
                src="../../assets/images/logo_text_light_theme.png"
                alt="ITeam Logo"
              ></StaticImage>
            </div>
          </>
        ) : (
          <>
            <div className={Logo}>
              <StaticImage
                src="../../assets/images/logo_icon_dark_theme.png"
                alt="ITeam Logo"
              ></StaticImage>
            </div>
            <div className={Name}>
              <StaticImage
                src="../../assets/images/logo_text_dark_theme.png"
                alt="ITeam Logo"
              ></StaticImage>
            </div>
          </>
        )}
      </div>
      <div className={languageThemeWraper}>
        <button id={isLightTheme ? plLight : plDark}>PL</button>
        <span id={isLightTheme ? Line : lineDark}> | </span>
        <button id={engLight}>ENG</button>

        <button onClick={() => switchTheme()}>
          {isLightTheme ? <ThemeIconLight /> : <ThemeIconDark />}
        </button>
      </div>
      <div className={sidebarContainer}>
        <div className={Sidebar}>
          <button>{isLightTheme ? <SidebarLight /> : <SidebarDark />}</button>
        </div>
      </div>
    </nav>
  );
}
