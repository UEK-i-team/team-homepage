import React, { useContext } from 'react';

import FacebookSVG from '../../assets/svgs/facebook.svg';
import GithubSVG from '../../assets/svgs/github.svg';
import { ThemeContext } from '../../context/ThemeContex';
import { FACEBOOK_LINK, GITHUB_LINK } from '../../utils/constants/links';
import {
  containerGridDark,
  containerGridLight,
  containerIconsDark,
  containerIconsLight,
  mainContainerDark,
  mainContainerLight,
} from './Footer.module.scss';
export const Footer = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme(mainContainerLight, mainContainerDark)}>
      <div className={theme(containerGridLight, containerGridDark)}>
        <div>
          <h2>
            Koło naukowe i::team <br />
            Uniwersytetu Ekonomicznego <br />w Krakowie
          </h2>
        </div>
        <div>
          <h3>Zarząd:</h3>
          <p>zarzad@example.com</p>
        </div>
        <div>
          <p>
            Rakowicka 27, 31-510 <br />
            Kraków <br />
            Biblioteka Główna p.432 <br />
            kniuex@example.com
          </p>
        </div>
        <div>
          <h3>Opiekun Koła:</h3>
          <p>
            mgr Katarzyna Wójcik <br />
            katwoj@fakemail.com
          </p>
        </div>
        <div></div>
        <div>
          <h3>Znajdziesz nas na:</h3>
          <div className={theme(containerIconsLight, containerIconsDark)}>
            <a href={GITHUB_LINK}>
              <GithubSVG />
            </a>
            <a href={FACEBOOK_LINK}>
              <FacebookSVG />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
