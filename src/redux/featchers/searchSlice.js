import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchValue: ""
  },
  reducers: {
    setSearchValueName: (state, action) => {
      state.searchValue = action.payload.searchValue;
    },
  }
});

export const setSearchValueName = searchSlice.actions.setSearchValueName;

export default searchSlice.reducer;
