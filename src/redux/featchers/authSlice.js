import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_URL, doApiPost } from '../../services/apiService';

export const verifyToken = createAsyncThunk('auth/verifyToken', async (token) => {
  const response = await doApiPost(`${API_URL}/api/verifyToken`, { token });
  console.log("auth", response);
  return response.data;
});

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: false, // You might have other properties like loading, error, etc.
  },
  reducers: {
    // Other reducers related to authentication can be added here
  },
  extraReducers: (builder) => {
    builder.addCase(verifyToken.fulfilled, (state, action) => {
    console.log(action.payload);
      const { data, response } = action.payload;
      console.log("Server Response:", response);
      console.log("Data:", data);
      state.isLoggedIn = !!data; // Convert data to a boolean
    });
  },
});

export default authSlice.reducer;
