/**
 * Custom hook for fetching content with loading and error states
 */

import { useState, useEffect, useCallback } from 'react';
import * as api from '../services/api';

export const useContent = (fetchFunction) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadContent = useCallback(async () => {
    setLoading(true);
    setError(null);
    
    try {
      const content = await fetchFunction();
      setData(content);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [fetchFunction]);

  useEffect(() => {
    loadContent();
  }, [loadContent]);

  const retry = useCallback(() => {
    loadContent();
  }, [loadContent]);

  return { data, loading, error, retry };
};

export default useContent;
