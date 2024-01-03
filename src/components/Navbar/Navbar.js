import Brightness6RoundedIcon from '@mui/icons-material/Brightness6Rounded';
import { IconButton } from '@mui/material';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { useState } from 'react';

import SidebarDark from '../../assets/svgs/Sidebar_dark.svg';
import SidebarLight from '../../assets/svgs/Sidebar_light.svg';
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
        <IconButton
          style={{ width: '40px', height: '40px', color: 'black' }}
          onClick={() => switchTheme()}
        >
          <svg>
            <Brightness6RoundedIcon
              sx={{ color: isLightTheme ? '#000' : '#FFF' }}
            />
          </svg>
        </IconButton>
      </div>
      <div className={SidebarContainer}>
        <div className={Sidebar}>
          <IconButton>
            {isLightTheme ? <SidebarLight /> : <SidebarDark />}
          </IconButton>
        </div>
      </div>
    </nav>
  );
}
