import { useEffect } from 'react';

export const useScrollTo = (location) => {
  useEffect(() => {
    const { scrollToId } = location?.state;
    console.log(scrollToId);
    if (scrollToId) {
      document
        .getElementById(scrollToId)
        ?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location, document]);
};
