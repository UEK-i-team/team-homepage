import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();
  return (
    <div className={theme(mainContainerLight, mainContainerDark)}>
      <div className={theme(containerGridLight, containerGridDark)}>
        <div>
          <h2>
            {t('iTeam')} <br />
            {t('uniName')} <br />
            {t('uniTown')}
          </h2>
        </div>
        <div>
          <h3>{t('board')}</h3>
          <p>zarzad@example.com</p>
        </div>
        <div>
          <p>
            Rakowicka 27, 31-510 <br />
            {t('town')} <br />
            {t('ourRoom')} <br />
            kniuex@example.com
          </p>
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
