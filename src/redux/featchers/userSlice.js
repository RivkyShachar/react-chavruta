import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { API_URL, doApiTukenGet, TOKEN_NAME } from "../../services/apiService"



export const getUserInfo = createAsyncThunk(
    "user,getUserInfo", async (dispatch, getState) => {
        if (localStorage.getItem(TOKEN_NAME)) {
            let data = await doApiTukenGet(API_URL + '/users/checkToken')
            if (!data.err) {

                return data.data;
            } else {
                return null
            }


        } else {
            return null;
        }
    }
)
const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
        status: null

    },
    extraReducers(builder) {
        builder.
            addCase(getUserInfo.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(getUserInfo.fulfilled, (state, action) => {
                state.status = "success";
                console.log(action.payload);
                if (action.payload == null) {
                    state.status = "failed";
                    state.user = null
                } else if (action.payload == null) {
                    state.user = null;
                    state.status = "failed";

                }

                else {
                    state.user = { ...action.payload };

                }
            })
            .addCase(getUserInfo.rejected, (state, action) => {
                state.status = "failed";
            })
    },
    reducers: {
        logoutUser: (state, action) => {
            state.user = null
        }
    }
})

export const { logoutUser } = userSlice.actions



export default userSlice.reducer;