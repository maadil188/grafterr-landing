import React, { useState, useEffect } from 'react';
import ProductCard from '../ui/ProductCard';
import Carousel from '../ui/Carousel';
import GradientText from '../ui/GradientText';
import Skeleton from '../ui/Skeleton';
import useCarousel from '../../hooks/useCarousel';
import './FeaturesSection.css';

const FeaturesSection = ({ data, loading, error, onRetry }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    if (!loading && data) {
      setIsVisible(true);
    }
  }, [loading, data]);
  
  const products = data?.products || [];
  const carousel = useCarousel(products.length, data?.carousel?.itemsPerView || { mobile: 1, tablet: 2, desktop: 3 });
  
  if (error) {
    return (
      <section className="features features--error">
        <div className="container features__content">
          <div className="features__error-message">
            <h2>Unable to load features section</h2>
            <p>{error}</p>
            <button onClick={onRetry} className="error-retry-btn">Retry</button>
          </div>
        </div>
      </section>
    );
  }
  
  const renderCarouselItems = () => {
    const itemWidth = 100 / carousel.itemsToShow;
    return products.map((product) => (
      <div 
        key={product.id} 
        className="carousel__item"
        style={{ width: `${itemWidth}%`, minWidth: `${itemWidth}%` }}
      >
        <ProductCard product={product} />
      </div>
    ));
  };
  
  return (
    <section className={`features ${isVisible ? 'features--loaded' : ''}`}>
      <div className="container features__container">
        <div className="features__header">
          {loading ? (
            <>
              <Skeleton width="60%" height="60px" borderRadius="var(--radius-lg)" />
              <Skeleton width="100%" height="20px" borderRadius="var(--radius-md)" count={2} />
            </>
          ) : (
            <>
              <h2 className="features__title fade-in">
                {data?.title} <GradientText>{data?.titleAccent}</GradientText> {data?.titleSuffix}
              </h2>
              
              <div className="features__subtitle-wrapper">
                <p className="features__subtitle slide-in-up">{data?.subtitle}</p>
                <div className="features__divider slide-in-up"></div>
              </div>
            </>
          )}
        </div>
        
        <div className="features__carousel-wrapper slide-in-up">
          {loading ? (
            <div className="carousel-skeleton">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="carousel__item" style={{ width: `${100 / 3}%` }}>
                  <Skeleton width="100%" height="300px" borderRadius="var(--radius-xl)" />
                </div>
              ))}
            </div>
          ) : (
            <Carousel
              items={products}
              currentIndex={carousel.currentIndex}
              itemsToShow={carousel.itemsToShow}
              onNext={carousel.goToNext}
              onPrevious={carousel.goToPrevious}
              canGoNext={carousel.canGoNext}
              canGoPrevious={carousel.canGoPrevious}
              onSwipeStart={carousel.handleSwipeStart}
              onSwipeMove={carousel.handleSwipeMove}
              onSwipeEnd={carousel.handleSwipeEnd}
            >
              {renderCarouselItems()}
            </Carousel>
          )}
        </div>
        
        {!loading && products.length > 0 && (
          <div className="features__indicators slide-in-up">
            {products.map((_, index) => (
              <button
                key={index}
                className={`features__indicator ${index === carousel.currentIndex ? 'active' : ''}`}
                onClick={() => carousel.goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturesSection;
