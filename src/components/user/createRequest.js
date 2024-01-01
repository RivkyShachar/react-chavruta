import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import requestReducer, { commonLanguages } from '../../redux/featchers/requestSlice';
import { API_URL, doApiMethod, TOKEN_NAME } from '../../services/apiService';
import { verifyToken } from '../../services/apiService';
import { getUserInfo } from '../../redux/featchers/userSlice';
import {
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

} from '../../redux/featchers/requestSlice';


const ProfileInput = () => {
    const dispatch = useDispatch();
    const requestStudy = useSelector((myStore) => myStore.requestSlice.request);

    const [showMoreInfo, setShowMoreInfo] = useState(false);
    const [ratings, setRatings] = useState({
        ageRange: '',
        levelOfStufy: '',
        educationRange: '',
        locationRange: '',
        friendListRange: ''
    });

    const [validationError, setValidationError] = useState('');

    const handleInputChange = (e, inputName) => {
        const ratingValue = e.target.value;
        setRatings((prevRatings) => ({
            ...prevRatings,
            [inputName]: ratingValue,
        }));
        const inputValue = e.target.value;
        switch (inputName) {
            case 'firstName':
                dispatch(setFirstName({ firstName: inputValue }));
                break;
            case 'lastName':
                dispatch(setLastName({ lastName: inputValue }));
                break;
            case 'email':
                dispatch(setEmail({ email: inputValue }));
                break;
            case 'password':
                dispatch(setPassword({ password: inputValue }));
                break;
            case 'verifyPassword':
                dispatch(setVerifyPassword({ verifyPassword: inputValue }));
                break;
            case 'phoneNumber':
                dispatch(setPhoneNumber({ phoneNumber: inputValue }));
                break;
            case 'gender':
                dispatch(setGender({ gender: inputValue }));
                break;
            case 'dateOfBirth':
                dispatch(setDateOfBirth({ dateOfBirth: inputValue }));
                break;

            case 'topic':
                dispatch(setTopics({ topic: inputValue }));
                break;
            case 'minDuration':
                const newMinDuration = parseInt(inputValue, 10);
                dispatch(setStudyDuration({ min: newMinDuration, max: requestStudy.studyDuration.max }));
                break;
            case 'maxDuration':
                const newMaxDuration = parseInt(inputValue, 10);
                dispatch(setStudyDuration({ min: requestStudy.studyDuration.min, max: newMaxDuration }));
                break;
            // Add more cases for other input names if needed
            default:
                // Handle default case or do nothing
                break;
        }
    };
    
  let user = useSelector(myStore=>myStore.userSlice.user)
  const userWithoutVerifyPassword = { ...user };
  const nav = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);


    const  handlePostButtonClick = async() => {
        setIsSubmitted(true);

        try {
            const token = localStorage.getItem(TOKEN_NAME);
            const url = API_URL + '/studyRequests';
            const method = 'POST';
            
            console.log("data", userWithoutVerifyPassword);

            const data = await doApiMethod(url, method, userWithoutVerifyPassword);

            if (data.data.token) {
                localStorage.setItem(TOKEN_NAME, data.data.token);

                const decodedToken = data.data.token;
                const vToken = verifyToken(decodedToken).then(verifiedToken => {
                    if (verifiedToken.role === "admin") {
                        console.log(verifiedToken.role);
                        nav("/admin");
                    } else if (verifiedToken.role === "user") {
                        console.log(verifiedToken.role);
                        nav("/user");
                    } else {
                        nav("/");
                    }

                    window.location.reload();

                });
            }
            dispatch(getUserInfo());
        } catch (error) {
            setIsSubmitted(false);
            alert(error.data ? error.data.data.msg : 'An error occurred');
        }
    };

return (
    <div className='container'>
        <div className='row'>
            < div className='col-8 border'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-7 ms-5 mt-5'>
                            <h2 className="mb-5">
                                Create Post
                            </h2>
                            <div className='row mb-3 '>

                                <label htmlFor='topic' className='col-3 col-form-label'>
                                    Topic:
                                </label>
                                <div className='col-2'>
                                    <select
                                        name='topic'
                                        className='form-control'
                                        id='topic'
                                        onChange={(e) => handleInputChange(e, 'topic')}
                                        value={requestStudy.topic}
                                    >
                                        <option value='Tanya'>Tanya</option>
                                        <option value='Chasidut'>Chasidut</option>
                                    </select>
                                </div>
                            </div>


                            <div className='row mb-3'>
                                <label htmlFor='duration' className='col-3 col-form-label ps-1'>
                                    Duration:
                                </label>
                                <div className="container mt-3">
                                    <label htmlFor="minDuration">Min Duration:</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="minDuration"
                                        min="5"
                                        max={requestStudy.studyDuration.max}
                                        value={requestStudy.studyDuration.min}
                                        onChange={(e) => handleInputChange(e, 'minDuration')}

                                    />
                                    <label htmlFor="maxDuration" className="mt-2">Max Duration:</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="maxDuration"
                                        min={requestStudy.studyDuration.min}
                                        max="40"
                                        value={requestStudy.studyDuration.max}
                                        onChange={(e) => handleInputChange(e, 'maxDuration')}
                                    />
                                </div>
                            </div>

                            <div className='row mb-3'>
                                <label htmlFor='startDate' className='col-3 col-form-label ps-1'>
                                    Start Date:
                                </label>
                                <div className='col-5'>
                                    <input
                                        name='startDate'
                                        onInput={(e) => handleInputChange(e, 'startDate')}
                                        className='form-control'
                                        type='datetime-local'
                                        id='startDate'
                                        value={requestStudy.startDate}
                                    />
                                </div>
                            </div>
                            <div className='row mb-3'>
                                <label htmlFor='languages' className='col-3 col-form-label ps-1'>
                                    Languages:
                                </label>
                                <div className='col-5'>
                                    <select
                                        name='languages'
                                        value={requestStudy.languages}
                                        className='form-control'
                                        id='languages'
                                        onChange={(e) => handleInputChange(e, 'languages')}
                                    >
                                        <option value='' disabled>Select a language</option>
                                        {commonLanguages.map((language) => (
                                            <option key={language} value={language}>
                                                {language}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>


                            <div className='row mb-3'>
                                <label htmlFor='notes' className='col-3 col-form-label ps-1'>
                                    Notes:
                                </label>
                                <div className='col-5'>
                                    <textarea
                                        name='notes'
                                        onInput={(e) => handleInputChange(e, 'notes')}
                                        className='form-control'
                                        id='notes'
                                        defaultValue={requestStudy.notes}
                                    />
                                </div>
                            </div>
                            {showMoreInfo && (
                                <>

                                    <div className='row mb-3'>
                                        <label htmlFor='visibility' className='col-5 col-form-label'>
                                            Who can see the post:
                                        </label>
                                        <div className='col-5'>
                                            <select
                                                name='visibility'
                                                className='form-control'
                                                id='visibility'
                                                onChange={(e) => handleInputChange(e, 'visibility')}
                                                value={requestStudy.visibility}
                                            >
                                                <option value='public'>Everyone</option>
                                                <option value='friends'>My Friends List</option>
                                            </select>
                                        </div>

                                        <label htmlFor='levelOfStufy' className='col-3 col-form-label ps-1'>
                                            levelOfStufy:
                                        </label>
                                        <div className='col-5'>
                                            <select
                                                name='levelOfStufy'
                                                value={ratings.levelOfStufy}
                                                className='form-control'
                                                id='levelOfStufy'
                                                onChange={(e) => handleInputChange(e, 'levelOfStufy')}
                                            >
                                                <option value='' disabled>Select rating</option>
                                                {[1, 2, 3, 4, 5].map((rating) => (
                                                    <option key={rating} value={rating}>
                                                        {rating}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    <div className='row mb-3'>
                                        <label htmlFor='ageRange' className='col-3 col-form-label ps-1'>
                                            Age range:
                                        </label>
                                        <div className='col-5'>
                                            <select
                                                name='ageRange'
                                                value={ratings.ageRange}
                                                className='form-control'
                                                id='ageRange'
                                                onChange={(e) => handleInputChange(e, 'ageRange')}
                                            >
                                                <option value='' disabled>Select rating</option>
                                                {[1, 2, 3, 4, 5].map((rating) => (
                                                    <option key={rating} value={rating}>
                                                        {rating}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    <div className='row mb-3'>
                                        <label htmlFor='educationRange' className='col-3 col-form-label ps-1'>
                                            education Range:
                                        </label>
                                        <div className='col-5'>
                                            <select
                                                name='educationRange'
                                                value={ratings.educationRange}
                                                className='form-control'
                                                id='educationRange'
                                                onChange={(e) => handleInputChange(e, 'educationRange')}
                                            >
                                                <option value='' disabled>Select rating</option>
                                                {[1, 2, 3, 4, 5].map((rating) => (
                                                    <option key={rating} value={rating}>
                                                        {rating}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    <div className='row mb-3'>
                                        <label htmlFor='locationRange' className='col-3 col-form-label ps-1'>
                                            location Range:
                                        </label>
                                        <div className='col-5'>
                                            <select
                                                name='locationRange'
                                                value={ratings.locationRange}
                                                className='form-control'
                                                id='locationRange'
                                                onChange={(e) => handleInputChange(e, 'locationRange')}
                                            >
                                                <option value='' disabled>Select rating</option>
                                                {[1, 2, 3, 4, 5].map((rating) => (
                                                    <option key={rating} value={rating}>
                                                        {rating}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    <div className='row mb-3'>
                                        <label htmlFor='friendListRange' className='col-3 col-form-label ps-1'>
                                            friendListRange:
                                        </label>
                                        <div className='col-5'>
                                            <select
                                                name='friendListRange'
                                                value={ratings.friendListRange}
                                                className='form-control'
                                                id='friendListRange'
                                                onChange={(e) => handleInputChange(e, 'friendListRange')}
                                            >
                                                <option value='' disabled>Select rating</option>
                                                {[1, 2, 3, 4, 5].map((rating) => (
                                                    <option key={rating} value={rating}>
                                                        {rating}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                </>
                            )}
                            <button
                                className="btn btn-primary"
                                onClick={() => setShowMoreInfo(!showMoreInfo)}
                            >
                                {showMoreInfo ? 'Hide More Info' : 'Show More Info'}
                            </button>
                            <br></br>
                            <button
                                className="btn btn-success"
                                type='button'
                                onClick={handlePostButtonClick}
                            >
                                Post
                            </button>

                        </div>
                    </div>
                </div>
            </div>

            <div className='col-4'>
                <img
                    src="https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=600"
                    style={{ maxWidth: '400px', height: '550px' }}
                    alt="Your Alt Text"
                />
            </div>


        </div>
    </div >

);
}
export default ProfileInput









