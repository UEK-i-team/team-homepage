import { useEffect } from 'react';

import { useAnimationContext } from '../context/AnimationsContext';

export const useScrollTo = (location) => {
  const { isPaused } = useAnimationContext();

  useEffect(() => {
    if (location.state) {
      const { scrollTo } = location.state;

      if (scrollTo && document && window) {
        setTimeout(() => {
          document.getElementById(scrollTo)?.scrollIntoView({
            behavior: isPaused ? 'instant' : 'smooth',
          });

          window.history.replaceState({}, '');
        });
      }
    }
  }, [location.state]);
};
