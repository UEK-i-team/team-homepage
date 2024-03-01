import { GatsbyImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import React from 'react';

import LeftArrMobile from '../../assets/svgs/LeftArrMobile.svg';
import RightArrMobile from '../../assets/svgs/RightArrMobile.svg';
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
              style={{ transform: ` translateX(${-100 * currentImageIndex}%)` }}
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

        <div className={indicators}>
          {images.map((_, i) => (
            <div key={i} onClick={() => setImage(i)}>
              {
                <div className={indicator}>
                  {i === currentImageIndex && <div className={indicatorFill} />}
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
  images: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.object.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};
