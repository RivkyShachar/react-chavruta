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
        user: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            verifyPassword: "",
            phoneNumber: "",
            gender: "",
            dateOfBirth: "",
            profilePic: "",
            educations: [],
            topics: [],
            location: "",
            genderRange: "",
            educationRange: "",
            locationRrange: "",
            friendList: "",
        }
    },
    reducers: {
        setFirstName: (state, actions) => {
            state.user.firstName = actions.payload.firstName;
        },
        setLastName: (state, actions) => {
            state.lastName = actions.payload.lastName;
        },
        setEmail: (state, actions) => {

            state.email = actions.payload.email;
        },
        setPassword: (state, actions) => {

            state.password = actions.payload.password;
        },
        setVerifyPassword: (state, actions) => {

            state.verifyPassword = actions.payload.verifyPassword;
        },
        setPhoneNumber: (state, actions) => {

            state.phoneNumber = actions.payload.phoneNumber;
        },
        setGender: (state, actions) => {

            state.gender = actions.payload.gender;
        },
        setDateOfBirth: (state, actions) => {

            state.dateOfBirth = actions.payload.dateOfBirth;
        },
        setProfilePic: (state, actions) => {

            state.profilePic = actions.payload.profilePic;
        },
        setEducationsInput: (state, actions) => {

            state.educations = actions.payload.educations;
        },
        setLocation: (state, actions) => {

            state.location = actions.payload.location;
        },
        setTopics: (state, actions) => {

            state.topics = actions.payload.topics;
        },
        setGenderRange: (state, actions) => {

            state.gender = actions.payload.gender;
        },
        setEducationRange: (state, actions) => {

            state.education = actions.payload.education;
        },
        setLocationRange: (state, actions) => {

            state.location = actions.payload.location;
        },
        setFriendList: (state, actions) => {

            state.friendList = actions.payload.friendList;
        }
    }
})

export const { setFirstName, setLastName, setEmail, setPassword, setVerifyPassword, setPhoneNumber, setGender,
    setDateOfBirth, setProfilePic, setEducationsInput, setLocation, setTopics, setGenderRange, setEducationRange, setLocationRange, setFriendList } = userSlice.actions



export default userSlice.reducer;