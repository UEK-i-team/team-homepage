import PropTypes from 'prop-types';
import React from 'react';
import { useCallback, useEffect, useState } from 'react';

import LeftArrMobile from '../../assets/svgs/LeftArrMobile.svg';
import RightArrMobile from '../../assets/svgs/RightArrMobile.svg';
import { useCarousel } from '../../context/AnimationsContext';
import {
  arrowContainer,
  carousel,
  img,
  indicator,
  indicatorFill,
  indicators,
  leftArrowContainer,
  rightArrowContainer,
  slider,
  sliderContainer,
} from './Carousel.module.scss';

export const Carousel = ({ images /* Array z zaimportowanych zdjęć */ }) => {
  const imagesLength = images.length;

  const [index, setIndex] = useState(0);
  const [isClickable, setClickable] = useState(true);
  const { isPaused } = useCarousel();

  const handlePreviousImage = useCallback(() => {
    if (isClickable) {
      setIndex((prev) => (prev - 1 < 0 ? imagesLength - 1 : prev - 1));
      setClickable(false);
      setTimeout(() => {
        setClickable(true);
      }, 200);
    }
  }, [isClickable, imagesLength]);

  const handleNextImage = useCallback(() => {
    if (isClickable) {
      setIndex((prev) => (prev + 1 >= imagesLength ? 0 : prev + 1));
      setClickable(false);
      setTimeout(() => {
        setClickable(true);
      }, 200);
    }
  }, [isClickable, imagesLength]);

  const setImage = useCallback(
    (index) => {
      if (isClickable) {
        setIndex(index);
        setClickable(false);
        setTimeout(() => {
          setClickable(true);
        }, 200);
      }
    },
    [isClickable]
  );

  useEffect(() => {
    if (!isPaused) {
      const sliderTimeout = setTimeout(() => {
        setIndex((prev) => (prev + 1 >= imagesLength ? 0 : prev + 1));
      }, 1000);

      return () => {
        clearTimeout(sliderTimeout);
      };
    }
  }, [index, isPaused, imagesLength]);

  return (
    <div className={`${carousel}`}>
      <div className={`${sliderContainer}`}>
        <div className={slider}>
          {images.map((_, i) => (
            <img
              key={images[i]}
              src={images[i]}
              className={`${img}`}
              style={{ translate: `${-100 * index}%` }}
            />
          ))}
        </div>

        <div
          className={`${leftArrowContainer} ${arrowContainer}`}
          onClick={handlePreviousImage}
        >
          <LeftArrMobile />
        </div>

        <div
          className={`${rightArrowContainer} ${arrowContainer}`}
          onClick={handleNextImage}
        >
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

Carousel.propTypes = {
  images: PropTypes.array.isRequired,
};
