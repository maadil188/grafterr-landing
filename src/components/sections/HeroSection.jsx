import React, { useState, useEffect } from 'react';
import GradientText from '../ui/GradientText';
import GradientButton from '../ui/GradientButton';
import FloatingShape from '../ui/FloatingShape';
import Skeleton from '../ui/Skeleton';
import './HeroSection.css';

const HeroSection = ({ data, loading, error, onRetry }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    if (!loading && data) {
      setIsVisible(true);
    }
  }, [loading, data]);
  
  if (error) {
    return (
      <section className="hero hero--error">
        <div className="container hero__content">
          <div className="hero__error-message">
            <h1>Unable to load hero section</h1>
            <p>{error}</p>
            <GradientButton onClick={onRetry}>Retry</GradientButton>
          </div>
        </div>
      </section>
    );
  }
  
  const heroData = data?.hero;
  const shapes = heroData?.decorativeShapes;
  
  return (
    <section className={`hero ${isVisible ? 'hero--loaded' : ''}`}>
      {shapes && (
        <>
          <FloatingShape 
            type="circle"
            color={shapes.circle?.color}
            size={shapes.circle?.size}
            position={shapes.circle?.position}
          />
          <FloatingShape 
            type="rectangle"
            color={shapes.rectangle?.color}
            size={shapes.rectangle?.width}
            position={shapes.rectangle?.position}
          />
        </>
      )}
      
      <div className="container hero__container">
        <div className="hero__content">
          {loading ? (
            <>
              <Skeleton width="80%" height="80px" borderRadius="var(--radius-lg)" />
              <Skeleton width="100%" height="24px" borderRadius="var(--radius-md)" count={2} />
              <Skeleton width="140px" height="48px" borderRadius="var(--radius-lg)" />
            </>
          ) : (
            <>
              <h1 className="hero__headline fade-in">
                {heroData?.headline} <GradientText>{heroData?.headlineGradient}</GradientText>
              </h1>
              
              <p 
                className="hero__subheadline slide-in-up" 
                dangerouslySetInnerHTML={{ __html: heroData?.subheadline }}
              />
              
              <div className="hero__cta slide-in-up">
                <GradientButton size="md" href={heroData?.cta?.href || '#'}>
                  {heroData?.cta?.label || 'Learn more'}
                </GradientButton>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
