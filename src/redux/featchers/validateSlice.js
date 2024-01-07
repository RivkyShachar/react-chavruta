import { createSlice } from "@reduxjs/toolkit";

const validateSlice = createSlice({
  name: "validate",
  initialState: {
    validateValue: "true"
  },
  
  reducers: {
    setValidate: (state, action) => {
      state.validateValue = action.payload.validateValue;
    },
  }
});

export const setValidate = validateSlice.actions.setValidate;

export default validateSlice.reducer;
