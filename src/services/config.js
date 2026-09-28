// Environment Configuration Service

const config = {
  // API
  apiBaseUrl: process.env.REACT_APP_API_BASE_URL || 'http://localhost:3001/api',
  apiMode: process.env.REACT_APP_API_MODE || 'mock', // 'mock' or 'real'

  // Firebase (Project 2)
  firebase: {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
  },

  // Google Cloud (Project 2)
  googleCloud: {
    projectId: process.env.REACT_APP_GOOGLE_CLOUD_PROJECT_ID,
    region: process.env.REACT_APP_GOOGLE_CLOUD_REGION || 'us-central1'
  },

  // App
  env: process.env.REACT_APP_ENV || 'development',
  isDevelopment: process.env.REACT_APP_ENV === 'development',
  isProduction: process.env.REACT_APP_ENV === 'production'
};

export default config;
