import { GatsbyImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import React from 'react';

import LeftArrMobile from '../../assets/svgs/LeftArrMobile.svg';
import RightArrMobile from '../../assets/svgs/RightArrMobile.svg';
import { useAnimationContext } from '../../context/AnimationsContext';
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
import { useCarousel } from './useCarousel';

export const Carousel = ({ images }) => {
  const { handleNextImage, setImage, handlePreviousImage, currentImageIndex } =
    useCarousel(images);
  const { isPaused } = useAnimationContext();

  return (
    <div className={carousel}>
      <div className={sliderContainer}>
        <div className={slider}>
          {images.map(({ image, description }) => (
            <GatsbyImage
              key={image}
              alt={description}
              image={image}
              className={img}
              style={{
                transform: ` translateX(${-100 * currentImageIndex}%)`,
                transition: isPaused ? 'none' : '',
              }}
            />
          ))}
        </div>

        <a
          href="#"
          className={`${leftArrowContainer} ${arrowContainer}`}
          onClick={(e) => {
            e.preventDefault();
            handlePreviousImage();
          }}
        >
          <LeftArrMobile />
        </a>

        <a
          href="#"
          className={`${rightArrowContainer} ${arrowContainer}`}
          onClick={(e) => {
            e.preventDefault();
            handleNextImage();
          }}
        >
          <RightArrMobile />
        </a>

        <div className={indicators}>
          {images.map((_, i) => (
            <a
              href="#"
              key={i}
              onClick={(e) => {
                e.preventDefault();
                setImage(i);
              }}
            >
              {
                <div className={indicator}>
                  {i === currentImageIndex && <div className={indicatorFill} />}
                </div>
              }
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

Carousel.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.object.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};
