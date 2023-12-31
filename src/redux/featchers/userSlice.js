import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { API_URL, doApiGet, TOKEN_NAME } from "../../services/apiService"



export const getUserInfo = createAsyncThunk(
    "user,getUserInfo", async (dispatch, getState) => {
        if (localStorage.getItem(TOKEN_NAME)) {
            let data = await doApiGet(API_URL + '/users/checkToken')
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
            ageRange: 0,
            educationRange: 0,
            locationRange: 0,
            friendListRange: 0
        }
    },
    reducers: {
        setFirstName: (state, actions) => {
            state.user.firstName = actions.payload.firstName;
        },
        setLastName: (state, actions) => {
            state.user.lastName = actions.payload.lastName;
        },
        setEmail: (state, actions) => {

            state.user.email = actions.payload.email;
        },
        setPassword: (state, actions) => {

            state.user.password = actions.payload.password;
        },
        setVerifyPassword: (state, actions) => {

            state.user.verifyPassword = actions.payload.verifyPassword;
        },
        setPhoneNumber: (state, actions) => {

            state.user.phoneNumber = actions.payload.phoneNumber;
        },
        setGender: (state, actions) => {
            const genderValue = actions.payload.gender === "true";
            state.user.gender = genderValue;
        },
        setDateOfBirth: (state, actions) => {

            state.user.dateOfBirth = actions.payload.dateOfBirth;
        },
        setProfilePic: (state, actions) => {

            state.user.profilePic = actions.payload.profilePic;
        },
        setEducationsInput: (state, actions) => {

            state.user.educations = [...state.user.educations, actions.payload.educations];
        },
        setLocation: (state, actions) => {

            state.user.location = actions.payload.location;
        },
        setTopics: (state, actions) => {

            state.user.topics = [actions.payload.topics];
        },
        setAgeRange: (state, actions) => {

            state.user.gender = actions.payload.gender;
        },
        setEducationRange: (state, actions) => {

            state.user.education = actions.payload.education;
        },
        setLocationRange: (state, actions) => {

            state.user.location = actions.payload.location;
        },
        setFriendListRange: (state, actions) => {

            state.user.friendListRange = actions.payload.friendListRange;
        }
    }
})

export const { setFirstName, setLastName, setEmail, setPassword, setVerifyPassword, setPhoneNumber, setGender,
    setDateOfBirth, setProfilePic, setEducationsInput, setLocation, setTopics, setAgeRange, setEducationRange, setLocationRange, setFriendListRange } = userSlice.actions



export default userSlice.reducer;