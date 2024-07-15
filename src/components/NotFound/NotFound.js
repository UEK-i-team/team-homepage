import { Link } from 'gatsby';
import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';

import ErrorRobot from '../../assets/svgs/ErrorRobot.svg';
import ErrorRobotDark from '../../assets/svgs/ErrorRobotDark.svg';
import ErrorRobotDarkPaused from '../../assets/svgs/ErrorRobotDarkPaused.svg';
import ErrorRobotPaused from '../../assets/svgs/ErrorRobotPaused.svg';
import { useAnimationContext } from '../../context/AnimationsContext';
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
  const { isPaused } = useAnimationContext();

  let RobotSvg;
  if (isDarkTheme) {
    RobotSvg = isPaused ? ErrorRobotPaused : ErrorRobot;
  } else {
    RobotSvg = isPaused ? ErrorRobotDarkPaused : ErrorRobotDark;
  }

  return (
    <div className={isDarkTheme ? mainContainerDark : mainContainer}>
      <div className={animationContainer}>
        <RobotSvg width="107.14" height="137.81" />
      </div>
      <div className={isDarkTheme ? infoTextDark : infoText}>
        <h1>404</h1>
        <h2>{t('notFoundHeader')}</h2>
        <h4>{t('notFoundDescription')}</h4>
        <Link to="/" className={mainPageLink}>
          <div className={isDarkTheme ? goBackButtonDark : goBackButton}>
            {t('notFoundButton')}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
