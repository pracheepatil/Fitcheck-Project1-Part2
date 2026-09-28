import { useState } from 'react';
import api from '../services/api';

/**
 * Custom hook for outfit upload and analysis logic
 * Handles file upload, API call, and response state
 */
export const useOutfitUpload = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [analysisResult, setAnalysisResult] = useState(null);

  const uploadOutfit = async (file) => {
    setLoading(true);
    setError(null);
    try {
      const formData = new FormData();
      formData.append('outfit', file);

      const response = await api.post('/outfits/analyze', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      setAnalysisResult(response.data);
      return response.data;
    } catch (err) {
      setError(err.message || 'Failed to analyze outfit');
      console.error('Upload error:', err);
    } finally {
      setLoading(false);
    }
  };

  const clearAnalysis = () => {
    setAnalysisResult(null);
    setError(null);
  };

  return {
    uploadOutfit,
    clearAnalysis,
    loading,
    error,
    analysisResult,
  };
};
