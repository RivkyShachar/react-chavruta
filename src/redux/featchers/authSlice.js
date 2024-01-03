import { createSlice } from '@reduxjs/toolkit';
import { TOKEN_NAME } from '../../services/apiService';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: false,
    userRole: null,
    userId: null
  },
  reducers: {
    setLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
      console.log("is logged",state.isLoggedIn );
    },
    setUserRole: (state, action) => {
      state.userRole = action.payload;
    },
    setUserId: (state, action) => {
      state.userId = action.payload;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.userRole=null;
      state.userId = null;
      localStorage.removeItem(TOKEN_NAME);
      console.log("is logged",state.isLoggedIn );
    },
    selectAuth: (state) => state.authSlice,
  },
});

export const { setLoggedIn,setUserRole,setUserId, logout,selectAuth } = authSlice.actions;
export default authSlice.reducer;
