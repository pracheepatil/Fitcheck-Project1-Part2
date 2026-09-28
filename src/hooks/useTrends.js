import { useState, useEffect } from 'react';
import api from '../services/api';

/**
 * Custom hook for fetching and managing trend data
 * Handles trends loading, caching, and refresh
 */
export const useTrends = () => {
  const [trends, setTrends] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTrends = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.get('/trends');
      setTrends(response.data);
    } catch (err) {
      setError(err.message || 'Failed to fetch trends');
      console.error('Trends error:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTrends();
  }, []);

  const refreshTrends = () => {
    fetchTrends();
  };

  return {
    trends,
    loading,
    error,
    refreshTrends,
  };
};
