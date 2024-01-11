import { configureStore } from "@reduxjs/toolkit";
import requestSlice from './featchers/requestSlice'
import userSlice from './featchers/userSlice'
import searchSlice from './featchers/searchSlice'
import languageSlice from './featchers/languageSlice'


const myStore = configureStore({
  reducer: {
    requestSlice,
    userSlice,
    searchSlice,
    languageSlice,
  }
})

export default myStore;