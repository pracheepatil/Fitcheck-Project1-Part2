import { useState } from 'react';
import api from '../services/api';

/**
 * Custom hook for contact form submission
 * Handles form state, validation, and API call
 */
export const useContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const submitForm = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setError('All fields are required');
      setLoading(false);
      return;
    }

    try {
      await api.post('/contact', formData);
      setSuccess(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      setError(err.message || 'Failed to send message');
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({ name: '', email: '', message: '' });
    setError(null);
    setSuccess(false);
  };

  return {
    formData,
    handleChange,
    submitForm,
    resetForm,
    loading,
    error,
    success,
  };
};
