import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';

import FacebookSVG from '../../assets/svgs/facebook.svg';
import GithubSVG from '../../assets/svgs/github.svg';
import { ThemeContext } from '../../context/ThemeContex';
import { FACEBOOK_LINK, GITHUB_LINK } from '../../utils/constants/links';
import { SUB_PAGES } from '../../utils/constants/links';
import {
  addressContainer,
  containerGridDark,
  containerGridLight,
  containerIconsDark,
  containerIconsLight,
  footerLinksDark,
  footerLinksLight,
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
  const LINKS = [
    {
      title: t('home'),
      to: SUB_PAGES.HOME,
      arialLabel: t('ariaLabelHomePage'),
      type: 'Link',
    },
    {
      title: t('news'),
      to: SUB_PAGES.NEWS,
      arialLabel: t('ariaLabelNews'),
      type: 'Link',
    },
    {
      title: t('joinUs'),
      to: SUB_PAGES.JOIN_US,
      arialLabel: t('ariaLabelJoinUs'),
      type: 'a',
    },
    {
      title: t('contact'),
      to: '/',
      arialLabel: t('ariaLabelContact'),
      type: 'a',
    },
  ];
  return (
    <div
      className={theme(mainContainerLight, mainContainerDark)}
      aria-label={t('ariaLabelFooter')}
    >
      <div className={theme(containerGridLight, containerGridDark)}>
        <div>
          <h3
            tabIndex="0"
            aria-label={t('ariaLabelScienceClub')}
            className={title}
          >
            {t('scienceClub')}
          </h3>
          <h2>
            <div tabIndex="0" aria-label={t('ariaLabelTeamName')}>
              {' '}
              {t('iTeam')}{' '}
            </div>
            <div tabIndex="0" aria-label={t('ariaLabelUniName')}>
              i::team {t('uniName')}
            </div>
            <div>Uniwersytetu Ekonomicznego</div>
            {t('uniTown')}
          </h2>
        </div>
        <div tabIndex="0" aria-label={t('ariaLabelboard')}>
          <h3>{t('board')}</h3>
          <p>zarzad@example.com</p>
        </div>
        <div>
          {isDarkTheme ? (
            <>
              <div aria-hidden="true" className={logo}>
                <StaticImage
                  src="../../assets/images/logo_icon_dark_theme.png"
                  alt="ITeam Logo"
                ></StaticImage>
              </div>
              <div aria-hidden="true" className={name}>
                <StaticImage
                  src="../../assets/images/logo_text_dark_theme.png"
                  alt="ITeam Logo"
                ></StaticImage>
              </div>
            </>
          ) : (
            <>
              <div aria-hidden="true" className={logo}>
                <StaticImage
                  src="../../assets/images/logo_icon_light_theme.png"
                  alt="ITeam Logo"
                ></StaticImage>
              </div>
              <div aria-hidden="true" className={name}>
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
            <h3 aria-label={t('ariaLabelAddressWrapper')}>{t('address')}</h3>
          </div>
          <div
            tabIndex="0"
            aria-label={t('ariaLabelAddress')}
            className={addressContainer}
          >
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
          <h3 tabIndex="0" aria-label={t('ariaLabelSupervisor')}>
            {t('supervisor')}
          </h3>
          <p>
            mgr Katarzyna Wójcik <br />
            katwoj@fakemail.com
          </p>
        </div>
        <div aria-label={t('ariaLabelfindUs')}>
          <h3>{t('findUs')}</h3>
          <div className={theme(containerIconsLight, containerIconsDark)}>
            <a href={GITHUB_LINK} aria-label={t('ariaLabelGitHub')}>
              <GithubSVG />
            </a>
            <a href={FACEBOOK_LINK} aria-label={t('ariaLabelFacebook')}>
              <FacebookSVG />
            </a>
          </div>
        </div>
        <div className="linksWrapper">
          <h3>{t('links')}</h3>
          <div className="linksListWrapper">
            <ul>
              {LINKS.map(({ title, to, arialLabel, type }) => (
                <li key={title}>
                  {type === 'Link' ? (
                    <Link
                      to={to}
                      aria-label={arialLabel}
                      className={theme(footerLinksLight, footerLinksDark)}
                    >
                      {title}
                    </Link>
                  ) : (
                    <a
                      href={to}
                      aria-label={arialLabel}
                      className={theme(footerLinksLight, footerLinksDark)}
                    >
                      {title}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
