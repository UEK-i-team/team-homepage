import './Carousel.module.scss';

import React from 'react';
import { useState } from 'react';

import LeftArrowSvg from '../../assets/svgs/LeftArrowSvg.svg';
import RightArrowSvg from '../../assets/svgs/RightArrowSvg.svg';
import {
  arrowContainer,
  carousel,
  img,
  indicator,
  indicatorFill,
  indicators,
  inner,
  leftArrow,
  rightArrow,
} from './Carousel.module.scss';
import ph from './imgs/ph.jpg';
import ph1 from './imgs/ph1.jpg';
import ph2 from './imgs/ph2.jpg';
import ph3 from './imgs/ph3.jpg';

export const Carousel = () => {
  const images = [ph, ph1, ph2, ph3];
  const length = images.length;

  const [index, setIndex] = useState(0);

  const handlePrevious = () => {
    const newIndex = index - 1;
    setIndex(newIndex < 0 ? length - 1 : newIndex);
  };

  const handleNext = () => {
    const newIndex = index + 1;
    setIndex(newIndex >= length ? 0 : newIndex);
  };

  return (
    <div className={`${carousel}`}>
      <div className={`${inner}`}>
        <img src={images[index]} className={`${img}`} />

        <div
          className={`${leftArrow} ${arrowContainer}`}
          onClick={handlePrevious}
        >
          <LeftArrowSvg />
        </div>

        <div className={`${rightArrow} ${arrowContainer}`} onClick={handleNext}>
          <RightArrowSvg />
        </div>

        <div className={`${indicators}`}>
          {images.map((_, i) => (
            <div key={i} onClick={() => setIndex(i)}>
              {i === index ? (
                <div className={indicator}>
                  <div className={indicatorFill} />
                </div>
              ) : (
                <div className={indicator} />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
