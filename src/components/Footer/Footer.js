import { StaticImage } from 'gatsby-plugin-image';
import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';

import FacebookSVG from '../../assets/svgs/facebook.svg';
import GithubSVG from '../../assets/svgs/github.svg';
import { ThemeContext } from '../../context/ThemeContex';
import { FACEBOOK_LINK, GITHUB_LINK } from '../../utils/constants/links';
import {
  addressContainer,
  containerGridDark,
  containerGridLight,
  containerIconsDark,
  containerIconsLight,
  logo,
  mainContainerDark,
  mainContainerLight,
  name,
  title,
} from './Footer.module.scss';

export const Footer = () => {
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();
  const { isDarkTheme } = useContext(ThemeContext);
  return (
    <div
      className={theme(mainContainerLight, mainContainerDark)}
      aria-label="site's footer"
    >
      <div className={theme(containerGridLight, containerGridDark)}>
        <div>
          <h3 className={title}>{t('scienceClub')}</h3>
          <h2>
            <div> {t('iTeam')} </div>
            <div>i::team {t('uniName')}</div>
            <div>Uniwersytetu Ekonomicznego</div>
            {t('uniTown')}
          </h2>
        </div>
        <div>
          <h3>{t('board')}</h3>
          <p>zarzad@example.com</p>
        </div>
        <div>
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
              </div>{' '}
            </>
          )}
        </div>
        <div>
          <div>
            <h3>{t('address')}</h3>
          </div>
          <div className={addressContainer}>
            <p>
              Rakowicka 27, 31-510 <br />
              {t('town')}
            </p>
            <p>Rakowicka 27, 31-510 {t('town')}</p>
            <p>
              {t('ourRoom')} <br />
              kniuex@example.com
            </p>
          </div>
        </div>
        <div>
          <h3>{t('supervisor')}</h3>
          <p>
            mgr Katarzyna Wójcik <br />
            katwoj@fakemail.com
          </p>
        </div>
        <div></div>
        <div>
          <h3>{t('findUs')}</h3>
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
