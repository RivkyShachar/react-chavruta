import { createSlice } from "@reduxjs/toolkit";

const searchSlice1 = createSlice({
  name: "search1",
  initialState: {
    searchValue1: ""
  },
  
  reducers: {
    setSearchValueName1: (state, action) => {
      state.searchValue1 = action.payload.searchValue1;
    },
  }
});

export const setSearchValueName1 = searchSlice1.actions.setSearchValueName1;

export default searchSlice1.reducer;
