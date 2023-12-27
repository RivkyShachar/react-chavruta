import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import { useForm } from 'react-hook-form';
// import { useDispatch } from 'react-redux';
// // import { API_URL, doApiMethodSignUpLogin, TOKEN_NAME } from '../../services/apiService';
// import { getUserInfo } from '../../redux/featchers/userSlice';
// import { date } from 'joi';
import Location from './locationInput'
import Education from './educationInput'
import Profile from './profileInput'
import RangeQ from './rangeQuestion'

const AppRegister = () => {
    return (
        <div>
            <Profile />
            <Location />
            <Education />
            <RangeQ />
        </div>)
}
export default AppRegister