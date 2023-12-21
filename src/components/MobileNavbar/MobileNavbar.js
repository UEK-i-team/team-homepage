import '../MobileNavbar/MobileNavbar.scss';

import Brightness6RoundedIcon from '@mui/icons-material/Brightness6Rounded';
import { IconButton } from '@mui/material';
import React from 'react';

import logo_icon_light_theme from '../../assets/images/logo_icon_light_theme.png';
import logo_text_light_theme from '../../assets/images/logo_text_light_theme.png';

export function MobileNavbar() {
  //   const [theme, setTheme] = useState(false);
  //   let navbar = document.getElementsByClassName('MobileNavbar')[0]
  //   function switchTheme(theme) {
  //     return (
  //         navbar.style.backgroundColor = 'rgba(8,0,16)';
  //         navbar.style.color = 'white';

  //         );
  //   }
  return (
    <nav className="MobileNavbar">
      <div className="LogoContainer">
        <div className="Logo">
          <img src={logo_icon_light_theme}></img>
        </div>
        <div className="Name">
          <img src={logo_text_light_theme}></img>
        </div>
      </div>
      <div className="Language">
        <div style={{ padding: '0.5rem' }}>
          <a id="PL">PL</a>
        </div>
        <a> | </a>
        <div style={{ padding: '0.5rem' }}>
          <a id="ENG">ENG</a>
        </div>
      </div>
      <div className="Theme">
        <IconButton
          style={{ width: '40px', height: '40px' }}
          // onClick={() => SwitchTheme() ? :}
        >
          <svg className="ThemeIcon">
            <Brightness6RoundedIcon style={{ color: 'black' }} />
          </svg>
        </IconButton>
      </div>
      <div className="SidebarContainer">
        <div className="Sidebar">
          <IconButton>
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="21" height="2" rx="1" fill="black" />
              <rect y="8" width="21" height="2" rx="1" fill="black" />
              <rect y="16" width="21" height="2" rx="1" fill="black" />
            </svg>
          </IconButton>
        </div>
      </div>
    </nav>
  );
}
