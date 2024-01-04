import { createSlice } from "@reduxjs/toolkit";

import { useSelector } from 'react-redux';
import UserSlice from '../../redux/featchers/userSlice';

import React from 'react'





const initialState = {

    request: {
        topics: ["tanya"],
        studyDuration: {
            min: 5,
            max: 40
        },
        startDateAndTime: Date.now(),
        description: "",
        levelOfStudy: 0,
        ageRange: 0,
        educationRange: 0,
        locationRange: 0,
        friendListRange: 0,
        showMoreOptions: false,
        privacy: "public",
        preferredLanguages:[]
    },
    langiages: ''
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
            state.request.topics = action.payload.topics;
        },
        setStudyDuration: (state, action) => {
            console.log("set study duraton");
            console.log(action.payload.studyDuration);
            state.request.studyDuration = action.payload.studyDuration;
        },
        startDateAndTime: (state, action) => {
            state.request.startDateAndTime = action.payload.startDateAndTime;
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
        setPrivacyType: (state, action) => {
            state.request.privacy = action.payload.privacy;
        },
        setPreferredLanguages: (state, action) => {
            state.request.preferredLanguages = action.payload.preferredLanguages;
        },
    },

});

export const {
    setTopics,
    setStudyDuration,
    startDateAndTime,
    setLevelOfStudy,
    setDescription,
    setAgeRange,
    setEducationRange,
    setLocationRange,
    setFriendListRange,
    setPrivacyType,
    setShowMoreOptions,
    setPreferredLanguages

} = requestSlice.actions;
export default requestSlice.reducer;

