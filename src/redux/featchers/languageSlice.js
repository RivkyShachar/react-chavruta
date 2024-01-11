import { createSlice } from "@reduxjs/toolkit";

const languageSlice = createSlice({
  name: "language",
  initialState: {
    language: "en"
  },
  
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload.language;
    },
  }
});

export const setLanguage = languageSlice.actions.setLanguage;

export default languageSlice.reducer;