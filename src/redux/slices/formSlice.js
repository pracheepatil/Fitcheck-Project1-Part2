import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contact: {
    name: '',
    email: '',
    message: '',
    submitted: false,
    errors: {},
  },
  signIn: {
    email: '',
    password: '',
    submitted: false,
    errors: {},
  },
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    // Contact Form Actions
    setContactField(state, action) {
      const { field, value } = action.payload;
      state.contact[field] = value;
    },
    setContactError(state, action) {
      const { field, error } = action.payload;
      if (error) {
        state.contact.errors[field] = error;
      } else {
        delete state.contact.errors[field];
      }
    },
    resetContactForm(state) {
      state.contact = {
        name: '',
        email: '',
        message: '',
        submitted: false,
        errors: {},
      };
    },
    submitContactForm(state) {
      state.contact.submitted = true;
    },

    // SignIn Form Actions
    setSignInField(state, action) {
      const { field, value } = action.payload;
      state.signIn[field] = value;
    },
    setSignInError(state, action) {
      const { field, error } = action.payload;
      if (error) {
        state.signIn.errors[field] = error;
      } else {
        delete state.signIn.errors[field];
      }
    },
    resetSignInForm(state) {
      state.signIn = {
        email: '',
        password: '',
        submitted: false,
        errors: {},
      };
    },
    submitSignInForm(state) {
      state.signIn.submitted = true;
    },
  },
});

export const {
  setContactField,
  setContactError,
  resetContactForm,
  submitContactForm,
  setSignInField,
  setSignInError,
  resetSignInForm,
  submitSignInForm,
} = formSlice.actions;

export default formSlice.reducer;
