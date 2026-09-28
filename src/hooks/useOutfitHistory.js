import { useState, useEffect } from 'react';
import api from '../services/api';

/**
 * Custom hook for managing outfit history
 * Handles fetching, filtering, and deleting outfits
 */
export const useOutfitHistory = () => {
  const [outfits, setOutfits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchOutfits = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.get('/outfits');
      setOutfits(response.data);
    } catch (err) {
      setError(err.message || 'Failed to fetch outfits');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOutfits();
  }, []);

  const deleteOutfit = async (id) => {
    try {
      await api.delete(`/outfits/${id}`);
      setOutfits((prev) => prev.filter((outfit) => outfit.id !== id));
    } catch (err) {
      setError(err.message || 'Failed to delete outfit');
    }
  };

  const saveOutfit = async (id, data) => {
    try {
      const response = await api.put(`/outfits/${id}`, data);
      setOutfits((prev) =>
        prev.map((outfit) => (outfit.id === id ? response.data : outfit))
      );
    } catch (err) {
      setError(err.message || 'Failed to save outfit');
    }
  };

  const refreshOutfits = () => {
    fetchOutfits();
  };

  return {
    outfits,
    loading,
    error,
    deleteOutfit,
    saveOutfit,
    refreshOutfits,
  };
};
