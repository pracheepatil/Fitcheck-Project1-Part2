import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  error: null,
  user: null,
  outfits: [],
  trends: [],
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    clearError(state) {
      state.error = null;
    },
    setUser(state, action) {
      state.user = action.payload;
    },
    clearUser(state) {
      state.user = null;
    },
    setOutfits(state, action) {
      state.outfits = action.payload;
    },
    addOutfit(state, action) {
      state.outfits.push(action.payload);
    },
    removeOutfit(state, action) {
      state.outfits = state.outfits.filter((outfit) => outfit.id !== action.payload);
    },
    setTrends(state, action) {
      state.trends = action.payload;
    },
  },
});

export const {
  setLoading,
  setError,
  clearError,
  setUser,
  clearUser,
  setOutfits,
  addOutfit,
  removeOutfit,
  setTrends,
} = appSlice.actions;

export default appSlice.reducer;
