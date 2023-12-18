import React from 'react';

import {
  containerGrid,
  containerLinks,
  mainContainer,
} from './MobileFooter.module.scss';
export const MobileFooter = () => (
  <div className={mainContainer}>
    <div className={containerGrid}>
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
          <a href={'https://github.com/UEK-i-team'}>
            <img alt={'Github logo'} />
          </a>
          <a href={'https://www.facebook.com/KNIUEK/'}>
            <img alt={'Facebook logo'} />
          </a>
        </div>
      </div>
    </div>
  </div>
);
