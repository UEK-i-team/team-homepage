import { Link } from 'gatsby';
import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';

import ErrorRobot from '../../assets/svgs/ErrorRobot.svg';
import ErrorRobotDark from '../../assets/svgs/ErrorRobotDark.svg';
import { ThemeContext } from '../../context/ThemeContex';
import {
  animationContainer,
  goBackButton,
  goBackButtonDark,
  infoText,
  infoTextDark,
  mainContainer,
  mainContainerDark,
  mainPageLink,
} from './NotFound.module.scss';

const NotFound = () => {
  const { isDarkTheme } = useContext(ThemeContext);
  const { t } = useTranslation();

  return (
    <>
      {isDarkTheme ? (
        <div className={mainContainerDark}>
          <div className={animationContainer}>
            <ErrorRobot width="107.14" height="137.81" />
          </div>{' '}
          <div className={infoTextDark}>
            <h1>404</h1>
            <h2>{t('notFoundHeader')}</h2>
            <h4>{t('notFoundDescription')}</h4>
            <Link to="/" className={mainPageLink}>
              <div className={goBackButtonDark}>{t('notFoundButton')}</div>
            </Link>
          </div>
        </div>
      ) : (
        <div className={mainContainer}>
          {' '}
          <div className={animationContainer}>
            <ErrorRobotDark width="107.14" height="137.81" />
          </div>{' '}
          <div className={infoText}>
            <h1>404</h1>
            <h2>{t('notFoundHeader')}</h2>
            <h4>{t('notFoundDescription')}</h4>
            <Link to="/" className={mainPageLink}>
              <div className={goBackButton}>{t('notFoundButton')}</div>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default NotFound;
