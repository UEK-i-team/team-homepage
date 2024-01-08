import React from 'react';

import FacebookSVG from '../../assets/svgs/facebook-logo-dark-theme.svg';
import GithubSVG from '../../assets/svgs/github-logo-dark-theme.svg';
import { FACEBOOK_LINK, GITHUB_LINK } from '../../utils/constants/links';
import {
  containerGridDark,
  containerLinks,
  mainContainer,
} from './MobileFooter.module.scss';
export const MobileFooter = () => (
  <div className={mainContainer}>
    <div className={containerGridDark}>
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
        <div className={containerLinks}>
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
