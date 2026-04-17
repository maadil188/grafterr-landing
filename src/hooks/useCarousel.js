/**
 * Custom hook for carousel logic
 * Handles navigation, swipe support, and responsive breakpoints
 */

import { useState, useCallback, useEffect, useRef } from 'react';

export const useCarousel = (itemsCount, itemsPerView) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(itemsPerView.desktop || 3);
  const [isSwiping, setIsSwiping] = useState(false);
  const swipeStartX = useRef(0);
  const swipeEndX = useRef(0);

  // Handle responsive breakpoints
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      
      if (width < 768) {
        setItemsToShow(itemsPerView.mobile || 1);
      } else if (width < 1024) {
        setItemsToShow(itemsPerView.tablet || 2);
      } else {
        setItemsToShow(itemsPerView.desktop || 3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [itemsPerView]);

  const maxIndex = Math.max(0, itemsCount - itemsToShow);

  const goToSlide = useCallback((index) => {
    setCurrentIndex(Math.max(0, Math.min(index, maxIndex)));
  }, [maxIndex]);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  }, []);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  }, [maxIndex]);

  // Swipe handlers
  const handleSwipeStart = useCallback((e) => {
    setIsSwiping(true);
    swipeStartX.current = e.touches?.[0]?.clientX || e.clientX;
  }, []);

  const handleSwipeMove = useCallback((e) => {
    if (!isSwiping) return;
    swipeEndX.current = e.touches?.[0]?.clientX || e.clientX;
  }, [isSwiping]);

  const handleSwipeEnd = useCallback(() => {
    setIsSwiping(false);
    
    const swipeThreshold = 50;
    const diff = swipeStartX.current - swipeEndX.current;

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        goToNext();
      } else {
        goToPrevious();
      }
    }
  }, [goToNext, goToPrevious]);

  const canGoPrevious = currentIndex > 0;
  const canGoNext = currentIndex < maxIndex;

  return {
    currentIndex,
    itemsToShow,
    canGoPrevious,
    canGoNext,
    goToSlide,
    goToPrevious,
    goToNext,
    handleSwipeStart,
    handleSwipeMove,
    handleSwipeEnd,
    maxIndex
  };
};

export default useCarousel;
