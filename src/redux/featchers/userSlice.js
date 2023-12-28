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
        firstName: "",
        lastName:"",
        phoneNumber:"",
        topics:[]
    },    
    reducers: {
        // logoutUser: (state, action) => {
        //     state.user = null
        // }
        setFirstName:(state,actions)=>{

            state.firstName=actions.payload.firstName;
        }


    }
})

export const { setFirstName } = userSlice.actions



export default userSlice.reducer;