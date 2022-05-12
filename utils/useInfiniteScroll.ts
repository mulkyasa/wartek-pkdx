import { useState, useEffect } from 'react';

const useInfiniteScroll = (elementId: string) => {
  const [isBottom, setIsBottom] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const currentHeight =
        window.innerHeight + document.documentElement.scrollTop;
      const heightCoefficient = 0.99;
      const minimumHeightToTrigger =
        document.getElementById(elementId)!.offsetHeight * heightCoefficient;

      if (currentHeight < minimumHeightToTrigger) return;
      setIsBottom(true);
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [elementId]);

  return [isBottom, setIsBottom] as const;
};

export default useInfiniteScroll;
