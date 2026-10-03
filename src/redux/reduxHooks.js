import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import {
  setTheme,
  toggleTheme,
} from './slices/themeSlice';
import {
  setContactField,
  setContactError,
  resetContactForm,
  submitContactForm,
  setSignInField,
  setSignInError,
  resetSignInForm,
  submitSignInForm,
} from './slices/formSlice';
import {
  setLoading,
  setError,
  clearError,
  setUser,
  clearUser,
  setOutfits,
  addOutfit,
  removeOutfit,
  setTrends,
} from './slices/appSlice';
import {
  fetchTrends,
  fetchOutfits,
  uploadOutfit,
  deleteOutfit,
  submitContactForm as submitContactThunk,
  signInUser,
} from './appThunks';

// ============================================
// THEME HOOKS
// ============================================
export const useTheme = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.mode);

  return {
    theme,
    setTheme: useCallback((mode) => dispatch(setTheme(mode)), [dispatch]),
    toggleTheme: useCallback(() => dispatch(toggleTheme()), [dispatch]),
  };
};

// ============================================
// CONTACT FORM HOOKS
// ============================================
export const useContactForm = () => {
  const dispatch = useDispatch();
  const form = useSelector((state) => state.form.contact);

  return {
    form,
    setField: useCallback(
      (field, value) => dispatch(setContactField({ field, value })),
      [dispatch]
    ),
    setError: useCallback(
      (field, error) => dispatch(setContactError({ field, error })),
      [dispatch]
    ),
    reset: useCallback(() => dispatch(resetContactForm()), [dispatch]),
    submit: useCallback(() => dispatch(submitContactForm()), [dispatch]),
    submitAsync: useCallback(
      (formData) => dispatch(submitContactThunk(formData)),
      [dispatch]
    ),
  };
};

// ============================================
// SIGNIN FORM HOOKS
// ============================================
export const useSignInForm = () => {
  const dispatch = useDispatch();
  const form = useSelector((state) => state.form.signIn);

  return {
    form,
    setField: useCallback(
      (field, value) => dispatch(setSignInField({ field, value })),
      [dispatch]
    ),
    setError: useCallback(
      (field, error) => dispatch(setSignInError({ field, error })),
      [dispatch]
    ),
    reset: useCallback(() => dispatch(resetSignInForm()), [dispatch]),
    submit: useCallback(() => dispatch(submitSignInForm()), [dispatch]),
    signIn: useCallback(
      (credentials) => dispatch(signInUser(credentials)),
      [dispatch]
    ),
  };
};

// ============================================
// APP STATE HOOKS
// ============================================
export const useAppState = () => {
  const dispatch = useDispatch();
  const app = useSelector((state) => state.app);

  return {
    loading: app.loading,
    error: app.error,
    user: app.user,
    outfits: app.outfits,
    trends: app.trends,
    setLoading: useCallback((loading) => dispatch(setLoading(loading)), [dispatch]),
    setError: useCallback((error) => dispatch(setError(error)), [dispatch]),
    clearError: useCallback(() => dispatch(clearError()), [dispatch]),
    setUser: useCallback((user) => dispatch(setUser(user)), [dispatch]),
    clearUser: useCallback(() => dispatch(clearUser()), [dispatch]),
    setOutfits: useCallback((outfits) => dispatch(setOutfits(outfits)), [dispatch]),
    addOutfit: useCallback((outfit) => dispatch(addOutfit(outfit)), [dispatch]),
    removeOutfit: useCallback((outfitId) => dispatch(removeOutfit(outfitId)), [dispatch]),
    setTrends: useCallback((trends) => dispatch(setTrends(trends)), [dispatch]),
  };
};

// ============================================
// ASYNC OPERATION HOOKS
// ============================================
export const useTrends = () => {
  const dispatch = useDispatch();
  const trends = useSelector((state) => state.app.trends);
  const loading = useSelector((state) => state.app.loading);

  const fetchTrendsData = useCallback(() => {
    dispatch(fetchTrends());
  }, [dispatch]);

  return {
    trends,
    loading,
    fetchTrends: fetchTrendsData,
  };
};

export const useOutfits = () => {
  const dispatch = useDispatch();
  const outfits = useSelector((state) => state.app.outfits);
  const loading = useSelector((state) => state.app.loading);

  return {
    outfits,
    loading,
    fetchOutfits: useCallback(() => dispatch(fetchOutfits()), [dispatch]),
    uploadOutfit: useCallback(
      (outfitData) => dispatch(uploadOutfit(outfitData)),
      [dispatch]
    ),
    deleteOutfit: useCallback(
      (outfitId) => dispatch(deleteOutfit(outfitId)),
      [dispatch]
    ),
  };
};

// ============================================
// COMBINED HOOK FOR ALL REDUX ACCESS
// ============================================
export const useRedux = () => {
  const theme = useTheme();
  const contactForm = useContactForm();
  const signInForm = useSignInForm();
  const appState = useAppState();
  const trends = useTrends();
  const outfits = useOutfits();

  return {
    theme,
    contactForm,
    signInForm,
    appState,
    trends,
    outfits,
  };
};
