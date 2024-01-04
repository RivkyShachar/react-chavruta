import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import requestReducer, { commonLanguages } from '../../redux/featchers/requestSlice';
import { API_URL, doApiRequest, TOKEN_NAME } from '../../services/apiService';
import { verifyToken } from '../../services/apiService';
import {
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
    setPreferredLanguages

} from '../../redux/featchers/requestSlice';
// import { handleUserInfo } from '../../utill/authService';


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

    let user = useSelector(myStore => myStore.userSlice.user)
    const requestWithoutShowMoreOptions = { ...requestStudy };
    delete requestWithoutShowMoreOptions.showMoreOptions;
  
    const handleInputChange = (e, inputName) => {
        const ratingValue = e.target.value;
        setRatings((prevRatings) => ({
            ...prevRatings,
            [inputName]: ratingValue,
        }));
        const inputValue = e.target.value;
        switch (inputName) {
            case 'minDuration':
                const newMinDuration = parseInt(inputValue, 10);
                const currentMaxDuration = requestStudy.studyDuration.max;
                console.log("currentMaxDuration", currentMaxDuration);

                if (!isNaN(newMinDuration) && newMinDuration <= currentMaxDuration) {
                    dispatch(setStudyDuration({ studyDuration: { min: newMinDuration, max: currentMaxDuration } }));
                } else {
                    console.error('Invalid minDuration input');
                }
                break;
            case 'maxDuration':
                const newMaxDuration = parseInt(inputValue, 10);
                const currentMinDuration = requestStudy.studyDuration.min;

                if (!isNaN(newMaxDuration) && newMaxDuration >= currentMinDuration) {
                    dispatch(setStudyDuration({ studyDuration: { min: currentMinDuration, max: newMaxDuration } }));

                } else {
                    console.error('Invalid maxDuration input');
                }
                break;
            case 'topic':
                dispatch(setTopics({ topic: [inputValue] }));
                console.log("request",requestStudy.topics);
                break;
            case 'startDate':
                dispatch(startDateAndTime({ startDateAndTime: inputValue }));
                break;
            case 'preferredLanguages':
                const selectedLanguages = inputValue || user.preferredLanguages;
                dispatch(setPreferredLanguages({ preferredLanguages: [selectedLanguages] }));
                break;
            case 'friendListRange':
                const selectedFriendListRange = inputValue || user.friendListRange;
                dispatch(setFriendListRange({ friendListRange: selectedFriendListRange }));
                break;
            case 'locationRange':
                const selectedLocationRange = inputValue || user.locationRange;
                dispatch(setLocationRange({ locationRange: selectedLocationRange }));
                break;
            case 'educationRange':
                const selectedEducationRange = inputValue || user.educationRange;
                dispatch(setEducationRange({ educationRange: selectedEducationRange }));
                break;
            case 'ageRange':
                const selectedAgeRange = inputValue || user.ageRange;
                dispatch(setAgeRange({ ageRange: selectedAgeRange }));
                break;
            case 'levelOfStufy':
                dispatch(setLevelOfStudy({ levelOfStufy: inputValue }));
                break;
            case 'visibility':
                const selectedVisibility = inputValue || user.visibility;
                dispatch(setPrivacyType({ privacy: selectedVisibility }));
                break;
            case 'notes':
                dispatch(setDescription({ description: inputValue }));
                break;

            default:
                // Handle default case or do nothing
                break;
        }
    };


    const nav = useNavigate();
    const [isSubmitted, setIsSubmitted] = useState(false);


    const handlePostButtonClick = async () => {
        setIsSubmitted(true);

        try {
            const url = API_URL + '/studyRequests';
            const method = 'POST';

            console.log("data", requestWithoutShowMoreOptions);

            const data = await doApiRequest(url, method, requestWithoutShowMoreOptions);
            console.log("post created?");
            console.log(data);
            alert(data.data.msg);
            if(data.status===201){
                nav("/user");
            }
            // await handleUserInfo(dispatch);
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
                                    {/* <div className='col-2'>
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
                                    </div> */}
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
                                    <label htmlFor='preferredLanguages' className='col-3 col-form-label ps-1'>
                                    preferredLanguages:
                                    </label>
                                    <div className='col-5'>
                                        <select
                                            name='preferredLanguages'
                                            value={requestStudy.preferredLanguages}
                                            className='form-control'
                                            id='preferredLanguages'
                                            onChange={(e) => handleInputChange(e, 'preferredLanguages')}
                                        >
                                            <option value='' disabled>Select a language</option>
                                            {commonLanguages.map((preferredLanguages) => (
                                                <option key={preferredLanguages} value={preferredLanguages}>
                                                    {preferredLanguages}
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









