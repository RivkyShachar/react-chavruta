import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { API_URL, doApiRequest, TOKEN_NAME } from "../../services/apiService"



export const getUserInfo = createAsyncThunk(
    "user,getUserInfo", async (dispatch, getState) => {
        if (localStorage.getItem(TOKEN_NAME)) {
            let data = await doApiRequest(API_URL + '/users/myInfo')
            if (data.status == 201) {
                return data.data;
            } else {
                return null
            }


        } else {
            return null;
        }
    }
)

const initialState = {
    user: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        verifyPassword: "",
        phoneNumber: "",
        gender: true,
        dateOfBirth: "",
        profilePic: "",
        educations: [],
        topics: [],
        location: "",
        ageRange: 0,
        educationRange: 0,
        locationRange: 0,
        friendListRange: 0
    },
}

const userSlice = createSlice({
    name: "user",
    initialState,
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
            state.user.educations = actions.payload.educations;
            console.log(' state.user.educations', state.user.educations);
        },
        setLocation: (state, actions) => {

            state.user.location = actions.payload.location;
        },
        setTopics: (state, actions) => {
            state.user.topics = [...actions.payload.topics];
        },
        setAgeRange: (state, actions) => {

            state.user.ageRange = actions.payload.ageRange;
        },
        setEducationRange: (state, actions) => {

            state.user.educationRange = actions.payload.educationRange;
        },
        setLocationRange: (state, actions) => {

            state.user.locationRange = actions.payload.locationRange;
        },
        setFriendListRange: (state, actions) => {

            state.user.friendListRange = actions.payload.friendListRange;
        },
        setUserInfo: (state, action) => {
            state.userId = action.payload.userId;
            state.role = action.payload.role;
          },
    },
    extraReducers: (builder) => {
        builder.addCase(getUserInfo.fulfilled, (state, action) => {
          if (action.payload) {
            // Use the fetched data as the initial state
            state.user = {
              ...action.payload.data
            };
          }
        });
      }
})

export const { setFirstName, setLastName, setEmail, setPassword, setVerifyPassword, setPhoneNumber, setGender,
    setDateOfBirth, setProfilePic, setEducationsInput, setLocation, setTopics, setAgeRange, setEducationRange, setLocationRange, setFriendListRange,setUserInfo } = userSlice.actions



export default userSlice.reducer;