import { useState } from 'react';
import api from '../services/api';

/**
 * Custom hook for authentication (sign in, sign up, sign out)
 * Handles login state, validation, and API calls
 */
export const useAuthentication = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const signIn = async (email, password) => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.post('/auth/signin', { email, password });
      setUser(response.data.user);
      localStorage.setItem('token', response.data.token);
      return response.data;
    } catch (err) {
      setError(err.message || 'Sign in failed');
      console.error('Auth error:', err);
    } finally {
      setLoading(false);
    }
  };

  const signUp = async (email, password, name) => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.post('/auth/signup', { email, password, name });
      setUser(response.data.user);
      localStorage.setItem('token', response.data.token);
      return response.data;
    } catch (err) {
      setError(err.message || 'Sign up failed');
    } finally {
      setLoading(false);
    }
  };

  const signOut = () => {
    setUser(null);
    localStorage.removeItem('token');
  };

  return {
    user,
    loading,
    error,
    signIn,
    signUp,
    signOut,
  };
};
