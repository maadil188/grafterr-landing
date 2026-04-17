/**
 * API Service - Simulated API with network delay
 * Fetches content from content.json with realistic delay
 */

const API_DELAY = 1200; // Simulate 1000-1500ms network delay

/**
 * Simulate network delay
 * @param {number} delay - Delay in milliseconds
 * @returns {Promise<void>}
 */
const simulateNetworkDelay = (delay = API_DELAY) => {
  return new Promise((resolve) => {
    const randomDelay = delay + Math.random() * 500;
    setTimeout(resolve, randomDelay);
  });
};

/**
 * Fetch content from content.json
 * @returns {Promise<Object>}
 * @throws {Error}
 */
const fetchContent = async () => {
  try {
    await simulateNetworkDelay();
    const response = await fetch('/content.json');
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    throw new Error(`Failed to fetch content: ${error.message}`);
  }
};

/**
 * Get hero section content
 * @returns {Promise<Object>}
 */
export const fetchHeroContent = async () => {
  const content = await fetchContent();
  return {
    hero: content.hero,
    navigation: content.navigation
  };
};

/**
 * Get features section content
 * @returns {Promise<Object>}
 */
export const fetchFeaturesContent = async () => {
  const content = await fetchContent();
  return content.featuresSection;
};

/**
 * Get navigation content
 * @returns {Promise<Object>}
 */
export const fetchNavigationContent = async () => {
  const content = await fetchContent();
  return content.navigation;
};

export default {
  fetchHeroContent,
  fetchFeaturesContent,
  fetchNavigationContent
};
