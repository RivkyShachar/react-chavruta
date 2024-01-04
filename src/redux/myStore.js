import { configureStore } from "@reduxjs/toolkit";
import requestSlice from './featchers/requestSlice'
import userSlice from './featchers/userSlice'
import authSlice from './featchers/authSlice'
import searchSlice from './featchers/searchSlice'


const myStore = configureStore({
  reducer: {
    requestSlice,
    userSlice,
    searchSlice,
    authSlice,
  }
})

export default myStore;