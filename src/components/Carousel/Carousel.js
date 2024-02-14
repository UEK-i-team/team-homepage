import './Carousel.module.scss';

import React from 'react';
import { useCallback, useEffect, useState } from 'react';

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

  const handlePrevious = useCallback(() => {
    if (isClickable) {
      setIndex((prev) => (prev - 1 < 0 ? length - 1 : prev - 1));
      setClickable(false);
      setTimeout(() => {
        setClickable(true);
      }, 500);
    }
  }, [isClickable, length]);

  const handleNext = useCallback(() => {
    if (isClickable) {
      setIndex((prev) => (prev + 1 >= length ? 0 : prev + 1));
      setClickable(false);
      setTimeout(() => {
        setClickable(true);
      }, 500);
    }
  }, [isClickable, length]);

  const setImage = useCallback(
    (index) => {
      if (isClickable) {
        setIndex(index);
        setClickable(false);
        setTimeout(() => {
          setClickable(true);
        }, 500);
      }
    },
    [isClickable]
  );

  useEffect(() => {
    const sliderTimeout = setTimeout(() => {
      setIndex((prev) => (prev + 1 >= length ? 0 : prev + 1));
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
              {
                <div className={indicator}>
                  {i === index && <div className={indicatorFill} />}
                </div>
              }
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
