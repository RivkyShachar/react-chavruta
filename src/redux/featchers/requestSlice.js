import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    request: {
        topics: [],
        studyDuration: {
            min: "",
            max: ""
        },
        preferredHours: {
            from: "",
            to: ""
        },
        levelOfStudy: "",
        description: "",
        ageRange: "",
        educationRange: "",
        locationRange: "",
        friendListRange: "",
        state: {
            type: "",
            enum: ['done', 'past', 'open', 'close'],
            default: 'open',
        },
        showMoreOptions: false,
    },
    langiages:''
};
export const commonLanguages = [
    'English',
    'Spanish',
    'French',
    'German',
    'Chinese',
    'Japanese',
    'Korean',
    'Arabic',
    'Russian',
    'Portuguese',
    'Hebrew',
    'Yiddish',
  ];
const requestSlice = createSlice({
    name: "request",
    initialState,
    reducers: {
        setShowMoreOptions: (state, action) => {
            state.showMoreOptions = action.payload.showMoreOptions;
          },
        setTopics: (state, action) => {
            state.request.topics = [action.payload.topics];
        },
        setStudyDuration: (state, action) => {
            state.request.studyDuration = { ...action.payload.studyDuration };
        },
        setDurationMax: (state, action) => { //לא טוב
            state.request.studyDuration = { ...action.payload.studyDuration };
        },
        setDurationMin: (state, action) => {
            state.request.studyDuration = { ...action.payload.studyDuration };
        },
        setPreferredHours: (state, action) => {
            state.request.preferredHours = { ...action.payload.preferredHours };
        },
        setLevelOfStudy: (state, action) => {
            state.request.levelOfStudy = action.payload.levelOfStudy;
        },
        setDescription: (state, action) => {
            state.request.description = action.payload.description;
        },
        setAgeRange: (state, action) => {
            state.request.ageRange = action.payload.ageRange;
        },
        setEducationRange: (state, action) => {
            state.request.educationRange = action.payload.educationRange;
        },
        setLocationRange: (state, action) => {
            state.request.locationRange = action.payload.locationRange;
        },
        setFriendListRange: (state, action) => {
            state.request.friendListRange = action.payload.friendListRange;
        },
        setStateType: (state, action) => {
            state.request.state.type = action.payload.stateType;
        },
    },
 
});

export const {
    setTopics,
    setStudyDuration,
    setPreferredHours,
    setLevelOfStudy,
    setDescription,
    setAgeRange,
    setEducationRange,
    setLocationRange,
    setFriendListRange,
    setStateType,
    setShowMoreOptions,    setDurationMin,setDurationMax

} = requestSlice.actions;
export default requestSlice.reducer;

