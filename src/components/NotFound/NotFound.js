import { Link } from 'gatsby';
import React, { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Lottie from 'react-lottie';

import animationDataDark from '../../assets/svgs/ErrorRobot.json';
import animationData from '../../assets/svgs/ErrorRobotDark.json';
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
  const [isStopped] = useState(true);
  const { isDarkTheme } = useContext(ThemeContext);
  const { t } = useTranslation();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationDataDark,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  const defaultOptionsDark = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <>
      {isDarkTheme ? (
        <div className={mainContainerDark}>
          <div className={animationContainer}>
            {' '}
            <Lottie
              options={defaultOptions}
              width={128.56872}
              height={161.77344}
              isStopped={isStopped}
            />
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
            <Lottie
              options={defaultOptionsDark}
              width={128.56872}
              height={161.77344}
              isStopped={isStopped}
            />
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
