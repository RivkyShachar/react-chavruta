import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import requestReducer, { commonLanguages } from '../../redux/featchers/requestSlice';
import { API_URL, doApiRequest, TOKEN_NAME } from '../../services/apiService';
import { verifyToken } from '../../services/apiService';
import Sefaria from '../common/sefaria';
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


const ProfileInput = () => {
    const dispatch = useDispatch();
    const requestStudy = useSelector((myStore) => myStore.requestSlice.request);
    const [selectedTopics, setSelectedTopics] = useState([]);
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



    useEffect(() => {
        dispatch(setTopics({ topics: [...selectedTopics] }));
        console.log("selectedTopics", selectedTopics);

    }, [selectedTopics])



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
            if (data.status === 201) {
                nav("/user");
            }
            // await handleUserInfo(dispatch);
        } catch (error) {
            setIsSubmitted(false);
            console.log(error.data ? error.data.data.msg : 'An error occurred' );
        }
    };


    return (

        <div className='container justify-content-center  col-5  mt-3 ' >
            < div className=' text-center bg-light'>
                <div className='container border border-4 border-info'>
                    <h2 className="mt-3 pt-2">
                        Create Post
                    </h2>
                    <div className='row'>
                        <div className=' ms-5 mt-4 '>
                            <div className='row col-10'>
                                <Sefaria selectedTopics={selectedTopics} setSelectedTopics={setSelectedTopics} />
                            </div>
                            <div className=' mb-3 col-10' >
                                <h2 htmlFor='duration' className='col-3 col-form-label ps-1'>
                                    Duration:
                                </h2>
                                <br></br>
                                    <div className='col-6'>
                                        <div className='row align-items-center'>
                                            <div className='col-3 pe-1 '>
                                                <label htmlFor="minDuration">Min:</label>
                                            </div>
                                            <div className='col-7'>
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    id="minDuration"
                                                    min="5"
                                                    max={requestStudy.studyDuration.max}
                                                    defaultValue={requestStudy.studyDuration.min}
                                                    onChange={(e) => handleInputChange(e, 'minDuration')}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-6'>
                                        <div className='row align-items-center'>
                                            <div className='col-3 pe-1 '>
                                                <label htmlFor="maxDuration">Max:</label>
                                            </div>
                                            <div className='col-7'>
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
                                    </div>
                            </div>

                            <div className='row mb-3'>
                                <label htmlFor='startDate' className='col-2 col-form-label'>
                                    Start Date:
                                </label>
                                <div className='col-4'>
                                    <input
                                        name='startDate'
                                        onInput={(e) => handleInputChange(e, 'startDate')}
                                        className='form-control'
                                        type='datetime-local'
                                        id='startDate'
                                        defaultValue={requestStudy.startDate}
                                    />
                                </div>
                            </div>
                            <div className='row mb-3'>
                                <label htmlFor='preferredLanguages' className='col-4 col-form-label '>
                                    Preferred Languages:
                                </label>
                                <div className='col-4'>
                                    <select
                                        name='preferredLanguages'
                                        defaultValue={requestStudy.preferredLanguages}
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
                                <label htmlFor='notes' className='col-2 col-form-label '>
                                    Notes:
                                </label>
                                <div className='col-7 me-2'>
                                    <textarea
                                        name='notes'
                                        onInput={(e) => handleInputChange(e, 'notes')}
                                        className='form-control'
                                        id='notes'
                                        defaultValue={requestStudy.notes}
                                    />
                                </div>
                            </div>
                           
                           
                            <br></br>
                            <button
                                className="btn btn-success my-2 d-flex justify-content-center mx-auto"
                                type='button'
                                onClick={handlePostButtonClick}
                            >
                                Post
                            </button>


                        </div>
                    </div>
                </div>
            </div>



            </div>


    );
}
export default ProfileInput









