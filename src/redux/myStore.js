import { configureStore } from "@reduxjs/toolkit";
import requestSlice from '../redux/featchers/request'
import userSlice from './featchers/userSlice'
import toggleSlice from './featchers/toggleSlice'
import authSlice from './featchers/authSlice'


const myStore = configureStore({
  reducer: {
    requestSlice,
    userSlice,
    toggleSlice,
    authSlice
  }
})

export default myStore;