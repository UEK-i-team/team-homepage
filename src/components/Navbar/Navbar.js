import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { useState } from 'react';

import SidebarDark from '../../assets/svgs/Sidebar_dark.svg';
import SidebarLight from '../../assets/svgs/Sidebar_light.svg';
import ThemeIconLight from '../../assets/svgs/ThemeIcon_dark.svg';
import ThemeIconDark from '../../assets/svgs/ThemeIcon_light.svg';
import {
  ENG,
  LanguageThemeWraper,
  Line,
  LineDark,
  Logo,
  LogoContainer,
  MainContainer,
  MainContainerDark,
  Name,
  PL,
  PL_dark,
  Sidebar,
  SidebarContainer,
} from './Navbar.module.scss';

export function Navbar() {
  const [isLightTheme, setisLightTheme] = useState(true);

  function switchTheme() {
    setisLightTheme((prev) => !prev);
  }
  return (
    <nav className={`${MainContainer} ${!isLightTheme && MainContainerDark}`}>
      <div className={LogoContainer}>
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
      <div className={LanguageThemeWraper}>
        <button id={isLightTheme ? PL : PL_dark}>PL</button>
        <span id={isLightTheme ? Line : LineDark}> | </span>
        <button id={ENG}>ENG</button>

        <button onClick={() => switchTheme()}>
          {isLightTheme ? <ThemeIconLight /> : <ThemeIconDark />}
        </button>
      </div>
      <div className={SidebarContainer}>
        <div className={Sidebar}>
          <button>{isLightTheme ? <SidebarLight /> : <SidebarDark />}</button>
        </div>
      </div>
    </nav>
  );
}
