import { useCallback, useEffect, useMemo, useState } from 'react';

import { useAnimationContext } from '../../context/AnimationsContext';
export const useCarousel = (images) => {
  const imagesLength = useMemo(() => images.length, [images]);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isClickable, setClickable] = useState(true);
  const { isPaused } = useAnimationContext();
  const [disableSlider, setDisableSlider] = useState(false);

  const handlePreviousImage = useCallback(() => {
    if (isClickable) {
      setCurrentImageIndex((prev) =>
        prev - 1 < 0 ? imagesLength - 1 : prev - 1
      );
      setClickable(false);
      setTimeout(() => {
        setClickable(true);
      }, 200);
      setDisableSlider(true);
      setTimeout(() => {
        setDisableSlider(false);
      }, 15000);
    }
  }, [isClickable, imagesLength]);

  const handleNextImage = useCallback(() => {
    if (isClickable) {
      setCurrentImageIndex((prev) => (prev + 1 >= imagesLength ? 0 : prev + 1));
      setClickable(false);
      setTimeout(() => {
        setClickable(true);
      }, 200);
      setDisableSlider(true);
      setTimeout(() => {
        setDisableSlider(false);
      }, 15000);
    }
  }, [isClickable, imagesLength]);

  const setImage = useCallback(
    (index) => {
      if (isClickable) {
        setCurrentImageIndex(index);
        setClickable(false);
        setTimeout(() => {
          setClickable(true);
        }, 200);
      }
    },
    [isClickable]
  );

  useEffect(() => {
    if (!isPaused && !disableSlider) {
      const sliderTimeout = setTimeout(() => {
        setCurrentImageIndex((prev) =>
          prev + 1 >= imagesLength ? 0 : prev + 1
        );
      }, 5000);

      return () => {
        clearTimeout(sliderTimeout);
      };
    }
  }, [currentImageIndex, isPaused, imagesLength, disableSlider]);

  return {
    handlePreviousImage,
    setImage,
    handleNextImage,
    currentImageIndex,
  };
};
