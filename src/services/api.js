import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:3001/api';
const API_MODE = process.env.REACT_APP_API_MODE || 'mock';

// Mock data
const mockOutfits = [
  {
    id: 1,
    image: 'https://via.placeholder.com/400x400?text=Outfit+1',
    score: 85,
    date: '2026-09-20',
    analysis: 'Great color coordination with excellent style match'
  },
  {
    id: 2,
    image: 'https://via.placeholder.com/400x400?text=Outfit+2',
    score: 92,
    date: '2026-09-19',
    analysis: 'Perfect trend alignment with modern aesthetic'
  }
];

const mockTrends = [
  {
    id: 1,
    name: 'Minimalist',
    percentage: 45,
    items: ['Neutral Colors', 'Clean Lines', 'Simplicity']
  },
  {
    id: 2,
    name: 'Vintage Vibes',
    percentage: 60,
    items: ['Retro', 'Classic', 'Timeless']
  },
  {
    id: 3,
    name: 'Bold & Colorful',
    percentage: 35,
    items: ['Vibrant', 'Patterns', 'Statement']
  }
];

// Axios instance
const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Interceptor for auth tokens (Project 2 ready)
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Mock API Service
const mockApi = {
  // Outfits
  getOutfits: () => Promise.resolve({ data: mockOutfits }),
  getOutfit: (id) => Promise.resolve({ data: mockOutfits.find(o => o.id === id) }),
  createOutfit: (outfit) => Promise.resolve({ data: { id: Date.now(), ...outfit } }),
  updateOutfit: (id, outfit) => Promise.resolve({ data: { id, ...outfit } }),
  deleteOutfit: (id) => Promise.resolve({ data: { id } }),

  // Analysis
  analyzeOutfit: (id) => Promise.resolve({
    data: {
      id,
      colorHarmony: 92,
      fitSilhouette: 88,
      accessoryCoordination: 78,
      trendAlignment: 82
    }
  }),

  // Trends
  getTrends: () => Promise.resolve({ data: mockTrends }),

  // Auth
  login: (email, password) => Promise.resolve({
    data: {
      token: 'mock-token-' + Date.now(),
      user: { id: 1, email, name: 'User' }
    }
  }),
  signup: (data) => Promise.resolve({
    data: {
      token: 'mock-token-' + Date.now(),
      user: data
    }
  }),

  // Contact
  submitContact: (data) => Promise.resolve({ data: { success: true } })
};

// Real API Service
const realApi = {
  getOutfits: () => axiosInstance.get('/outfits'),
  getOutfit: (id) => axiosInstance.get(`/outfits/${id}`),
  createOutfit: (outfit) => axiosInstance.post('/outfits', outfit),
  updateOutfit: (id, outfit) => axiosInstance.put(`/outfits/${id}`, outfit),
  deleteOutfit: (id) => axiosInstance.delete(`/outfits/${id}`),
  analyzeOutfit: (id) => axiosInstance.post(`/analysis/${id}`),
  getTrends: () => axiosInstance.get('/trends'),
  login: (email, password) => axiosInstance.post('/auth/login', { email, password }),
  signup: (data) => axiosInstance.post('/auth/signup', data),
  submitContact: (data) => axiosInstance.post('/contact', data)
};

// Export appropriate API
const API = API_MODE === 'real' ? realApi : mockApi;

export default API;
