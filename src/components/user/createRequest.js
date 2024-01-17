import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { commonLanguages } from '../../redux/featchers/requestSlice';
import { API_URL, doApiRequest } from '../../services/apiService';
import Sefaria from '../common/sefaria';
import translate from '../../utill/translator'
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
    const language = useSelector((myStore) => myStore.languageSlice.language);
    const [selectedTopics, setSelectedTopics] = useState([]);
    // const [showMoreInfo, setShowMoreInfo] = useState(false);
    const [ratings, setRatings] = useState({
        ageRange: '',
        levelOfStufy: '',
        educationRange: '',
        locationRange: '',
        friendListRange: ''
    });

    // const [validationError, setValidationError] = useState('');

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
        } catch (error) {
            setIsSubmitted(false);
            console.log(error.data ? error.data.data.msg : 'An error occurred');
        }
    };


    return (
        <div className='container mt-5'>
            <div className=''>
                <div className='container col-lg-5 col-md-9 col-10 bg-light px-5 border-blue ' >
                    <h2 className=' pt-4 text-center display-5 text-with-border ' style={{ color: '#007ED2' }}>{translate('navbar.createPost', language)}</h2>

                    <div className='row '>
                        <div className='mt-4 col-12'>
                            <Sefaria selectedTopics={selectedTopics} setSelectedTopics={setSelectedTopics} />
                        </div>
                        <div className='my-3 col-12'>
                            <div className='row  '>
                                <div className='col-md-6  '>
                                    <div className='row align-items-center my-1'>
                                        <div className='col-6'>
                                            <label htmlFor='minDuration'>{translate('post.min', language)}:</label>
                                        </div>
                                        <div className='col-6'>
                                            <input
                                                type='number'
                                                className='form-control'
                                                id='minDuration'
                                                min='5'
                                                max={requestStudy.studyDuration.max}
                                                defaultValue={requestStudy.studyDuration.min}
                                                onChange={(e) => handleInputChange(e, 'minDuration')}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-6 '>
                                    <div className='row align-items-center my-1'>
                                        <div className='col-6'>
                                            <label htmlFor='maxDuration'>{translate('post.max', language)}:</label>
                                        </div>
                                        <div className='col-6'>
                                            <input
                                                type='number'
                                                className='form-control'
                                                id='maxDuration'
                                                min={requestStudy.studyDuration.min}
                                                max='40'
                                                value={requestStudy.studyDuration.max}
                                                onChange={(e) => handleInputChange(e, 'maxDuration')}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='row mb-3'>
                            <label htmlFor='startDate' className='col-lg-4 col-auto col-form-label'>
                                {translate('post.dateAndTime', language)}:
                            </label>
                            <div className='col-8'>
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
                            <label htmlFor='preferredLanguages' className='col-lg-4 col-sm-5   col-form-label'>
                                {translate('post.language', language)}:
                            </label>
                            <div className='col-8'>
                                <select
                                    name='preferredLanguages'
                                    defaultValue={requestStudy.preferredLanguages}
                                    className='form-control'
                                    id='preferredLanguages'
                                    onChange={(e) => handleInputChange(e, 'preferredLanguages')}
                                >
                                    <option value='' disabled>
                                        {translate('post.selectLanguage', language)}
                                    </option>
                                    {commonLanguages.map((preferredLanguages) => (
                                        <option key={preferredLanguages} value={preferredLanguages}>
                                            {preferredLanguages}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className='row mb-3'>
                            <label htmlFor='notes' className='col-lg-4 col-sm-5  col-form-label'>
                                {translate('post.notes', language)}:
                            </label>
                            <div className='col-8'>
                                <textarea
                                    name='notes'
                                    onInput={(e) => handleInputChange(e, 'notes')}
                                    className='form-control'
                                    id='notes'
                                    defaultValue={requestStudy.notes}
                                />
                            </div>
                        </div>

                        <br />
                        <button
                            className='btn my-3 col-1 d-flex justify-content-center mx-auto'
                            type='button'
                            onClick={handlePostButtonClick}
                            style={{ backgroundColor: '#fffd94', color: 'black' }}
                        >
                            {translate('post.post', language)}
                        </button>

                    </div>


                </div>
            </div>
        </div >




    );
}
export default ProfileInput









