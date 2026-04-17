import React from 'react';
import './Carousel.css';

const Carousel = ({ 
  items = [], 
  currentIndex = 0, 
  itemsToShow = 3,
  onNext = () => {},
  onPrevious = () => {},
  canGoNext = true,
  canGoPrevious = true,
  onSwipeStart = () => {},
  onSwipeMove = () => {},
  onSwipeEnd = () => {},
  children
}) => {
  const translateX = -(currentIndex * (100 / itemsToShow));
  
  return (
    <div 
      className="carousel"
      onTouchStart={onSwipeStart}
      onTouchMove={onSwipeMove}
      onTouchEnd={onSwipeEnd}
      onMouseDown={onSwipeStart}
      onMouseMove={onSwipeMove}
      onMouseUp={onSwipeEnd}
      onMouseLeave={onSwipeEnd}
    >
      <div className="carousel__viewport">
        <div 
          className="carousel__track"
          style={{
            transform: `translateX(${translateX}%)`,
            transitionDuration: '300ms'
          }}
        >
          {children}
        </div>
      </div>
      
      {/* Navigation Arrows */}
      <button
        className="carousel__nav carousel__nav--prev"
        onClick={onPrevious}
        disabled={!canGoPrevious}
        aria-label="Previous slide"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>
      
      <button
        className="carousel__nav carousel__nav--next"
        onClick={onNext}
        disabled={!canGoNext}
        aria-label="Next slide"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>
    </div>
  );
};

export default Carousel;
