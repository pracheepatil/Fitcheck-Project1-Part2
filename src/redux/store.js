import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './slices/themeSlice';
import formReducer from './slices/formSlice';
import appReducer from './slices/appSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    form: formReducer,
    app: appReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(require('redux-thunk').default),
});

export default store;
