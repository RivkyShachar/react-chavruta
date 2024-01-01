import { createSlice } from "@reduxjs/toolkit";

import { useSelector } from 'react-redux';
import UserSlice from '../../redux/featchers/userSlice';

import React from 'react'





const initialState = {

    request: {
        topics: [],
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
        privacy: "public"
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
            state.request.studyDuration = action.payload.studyDuration;
        },

        setPreferredHours: (state, action) => {
            state.request.preferredHours = action.payload.preferredHours;
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
    setPrivacyType,
    setShowMoreOptions

} = requestSlice.actions;
export default requestSlice.reducer;

