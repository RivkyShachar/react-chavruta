// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
// import { API_URL, doApiTukenGet, RESTAURNAT_ID } from "../../services/servise"

// export const getRestaurantInfo = createAsyncThunk(
//     "restaurant,getRestaurantInfo", async (dispatch, getState) => {
//         if (localStorage.getItem(RESTAURNAT_ID)) {
//             let url = API_URL + '/restaurants/byId/' + localStorage.getItem(RESTAURNAT_ID)
//             let data = await doApiTukenGet(url)
//             if (!data.err) {
//                 return data.data;
//             }
//             else {
//                 return null
//             }
//         }
//         else {
//             return null;
//         }
//     }
// )
// const restaurantSlice = createSlice({
//     name: "restaurant",
//     initialState: {
//         restaurant: null,
//         status: null

//     },
//     extraReducers(builder) {
//         builder.
//             addCase(getRestaurantInfo.pending, (state, action) => {
//                 state.status = "loading";
//             })
//             .addCase(getRestaurantInfo.fulfilled, (state, action) => {
//                 state.status = "success";
//                 if (action.payload == null) {
//                     state.status = "failed";
//                     state.restaurant = null
//                 } else if (action.payload == null) {
//                     state.restaurant = null;
//                     state.status = "failed";

//                 }

//                 else {
//                     state.restaurant = { ...action.payload };

//                 }
//             })
//             .addCase(getRestaurantInfo.rejected, (state, action) => {
//                 state.status = "failed";
//             })
//     },
//     reducers: {
//         logoutRestaurant: (state, action) => {
//             state.restaurant = null
//         }
//     }
// })

// export const { logoutRestaurant } = restaurantSlice.actions



// export default restaurantSlice.reducer;