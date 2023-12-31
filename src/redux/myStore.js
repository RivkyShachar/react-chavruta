import { configureStore } from "@reduxjs/toolkit";
import requestSlice from '../redux/featchers/request'
import userSlice from './featchers/userSlice'
import toggleSlice from './featchers/toggleSlice'
import searchSlice from './featchers/searchSlice'


const myStore = configureStore({
  reducer: {
    requestSlice,
    userSlice,
    toggleSlice,
    searchSlice
  }
})

export default myStore;