import { configureStore } from "@reduxjs/toolkit";
import requestSlice from '../redux/featchers/request'
import userSlice from './featchers/userSlice'
import toggleSlice from './featchers/toggleSlice'
import authSlice from './featchers/authSlice'
import searchSlice from './featchers/searchSlice'


const myStore = configureStore({
  reducer: {
    requestSlice,
    userSlice,
    toggleSlice,
    searchSlice,
    toggleSlice,
    authSlice
  }
})

export default myStore;