import './Carousel.module.scss';

import React from 'react';
import { useEffect, useState } from 'react';

import LeftArrMobile from '../../assets/svgs/LeftArrMobile.svg';
import RightArrMobile from '../../assets/svgs/RightArrMobile.svg';
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
  slider,
} from './Carousel.module.scss';
import ph from './imgs/ph.jpg';
import ph1 from './imgs/ph1.jpg';
import ph2 from './imgs/ph2.jpg';
import ph3 from './imgs/ph3.jpg';

export const Carousel = () => {
  const images = [ph, ph1, ph2, ph3];
  const length = images.length;

  const [index, setIndex] = useState(0);
  const [isClickable, setClickable] = useState(true);

  const handlePrevious = () => {
    if (isClickable) {
      const newIndex = index - 1;
      setIndex(newIndex < 0 ? length - 1 : newIndex);

      setClickable(false);

      setTimeout(() => {
        setClickable(true);
      }, 500);
    }
  };

  const handleNext = () => {
    if (isClickable) {
      const newIndex = index + 1;
      setIndex(newIndex >= length ? 0 : newIndex);

      setClickable(false);

      setTimeout(() => {
        setClickable(true);
      }, 500);
    }
  };

  const setImage = (index) => {
    if (isClickable) {
      setIndex(index);

      setClickable(false);

      setTimeout(() => {
        setClickable(true);
      }, 500);
    }
  };

  useEffect(() => {
    const sliderTimeout = setTimeout(() => {
      const newIndex = index + 1;
      setIndex(newIndex >= length ? 0 : newIndex);
    }, 5000);

    return () => {
      clearTimeout(sliderTimeout);
    };
  }, [index]);

  return (
    <div className={`${carousel}`}>
      <div className={`${inner}`}>
        <div className={slider}>
          {images.map((_, i) => (
            <img
              key={images[i]}
              src={images[i]}
              onClick={() => setIndex(i)}
              className={`${img}`}
              style={{ translate: `${-100 * index}%` }}
            />
          ))}
        </div>

        <div
          className={`${leftArrow} ${arrowContainer}`}
          onClick={handlePrevious}
        >
          <LeftArrMobile />
        </div>

        <div className={`${rightArrow} ${arrowContainer}`} onClick={handleNext}>
          <RightArrMobile />
        </div>

        <div className={`${indicators}`}>
          {images.map((_, i) => (
            <div key={i} onClick={() => setImage(i)}>
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
