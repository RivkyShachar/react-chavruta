import { configureStore } from "@reduxjs/toolkit";
import requestSlice from '../redux/featchers/request'
import userSlice from './featchers/userSlice'
import toggleSlice from './featchers/toggleSlice'


const myStore = configureStore({
  reducer: {
    requestSlice,
    userSlice,
    toggleSlice
  }
})

export default myStore;