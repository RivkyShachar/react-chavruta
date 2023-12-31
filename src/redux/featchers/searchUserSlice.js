import { createSlice } from "@reduxjs/toolkit";

const searchUserSlice = createSlice({
  name: "search1",
  initialState: {
    searchValueUser: ""
  },
  reducers: {
    setSearchValueUser: (state, action) => {
      state.searchValueUser = action.payload.searchValueUser;
    },
  }
});

export const setSearchValueUser = searchUserSlice.actions.setSearchValueUser;

export default searchUserSlice.reducer;


