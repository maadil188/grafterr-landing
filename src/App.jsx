import React, { useCallback } from 'react';
import HeroSection from './components/sections/HeroSection';
import FeaturesSection from './components/sections/FeaturesSection';
import useContent from './hooks/useContent';
import * as api from './services/api';
import './styles/global.css';
import './App.css';

function App() {
  const { data: heroData, loading: heroLoading, error: heroError, retry: retryHero } = useContent(api.fetchHeroContent);
  const { data: featuresData, loading: featuresLoading, error: featuresError, retry: retryFeatures } = useContent(api.fetchFeaturesContent);

  return (
    <div className="app">
      <HeroSection 
        data={heroData} 
        loading={heroLoading} 
        error={heroError}
        onRetry={retryHero}
      />
      <FeaturesSection 
        data={featuresData}
        loading={featuresLoading}
        error={featuresError}
        onRetry={retryFeatures}
      />
    </div>
  );
}

export default App;
