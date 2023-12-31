import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFirstName, setLastName, setEmail, setPassword, setVerifyPassword, setPhoneNumber, setGender, setDateOfBirth, setProfilePic } from '../../redux/featchers/userSlice';
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
    setStateType,
    setShowMoreOptions,
    setDurationMin, setDurationMax

} from '../../redux/featchers/requestSlice';
import requestReducer, { commonLanguages } from '../../redux/featchers/requestSlice';

const ProfileInput = () => {
    const dispatch = useDispatch();
    const requestStudy = useSelector((myStore) => myStore.requestSlice.request);

    const [showMoreInfo, setShowMoreInfo] = useState(false);
    const [ratings, setRatings] = useState({
        question1: '',
        question2: '',
        question3: '',
        question4: '',
      });
    
    const [validationError, setValidationError] = useState('');

    // useEffect(() => {
    //     dispatch(getUserInfo());
    //   }, [dispatch]);
  

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
            case 'durationMin':
                // Validate and dispatch only if the value is greater than or equal to 5
                if (inputValue >= 5 && inputValue <= requestStudy.durationMax) {
                    dispatch(setDurationMin({ durationMin: inputValue }));
                }
                break;
            case 'durationMax':
                // Validate and dispatch only if the value is less than or equal to 120
                if (inputValue <= 120 && inputValue >= requestStudy.durationMin) {
                    dispatch(setDurationMax({ durationMax: inputValue }));
                }
                break;
            // Add more cases for other input names if needed
            default:
                // Handle default case or do nothing
                break;
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
                                            <option value='A'>A</option>
                                            <option value='B'>B</option>
                                            <option value='C'>C</option>
                                        </select>
                                    </div>
                                </div>

                                <div className='row mb-3'>
                                    <label htmlFor='duration' className='col-3 col-form-label ps-1'>
                                        Duration:
                                    </label>
                                    <div className='col-2'>
                                        <input
                                            name='durationMin'
                                            onInput={(e) => handleInputChange(e, 'durationMin')}
                                            className='form-control'
                                            type='number'
                                            placeholder='Min'
                                            id='durationMin'
                                            value={requestStudy.durationMin}
                                        />
                                    </div>
                                    <div className='col-2'>
                                        <input
                                            name='durationMax'
                                            onInput={(e) => handleInputChange(e, 'durationMax')}
                                            className='form-control'
                                            type='number'
                                            placeholder='Max'
                                            id='durationMax'
                                            value={requestStudy.durationMax}
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
                                            type='date'
                                            id='startDate'
                                            value={requestStudy.startDate}
                                        />
                                    </div>
                                </div>
                                <div className='row mb-3'>
                                    <label htmlFor='endDate' className='col-3 col-form-label ps-1'>
                                        End Date:
                                    </label>
                                    <div className='col-5'>
                                        <input
                                            name='endDate'
                                            onInput={(e) => handleInputChange(e, 'endDate')}
                                            className='form-control'
                                            type='date'
                                            id='endDate'
                                            value={requestStudy.endDate}
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
                                     <label htmlFor='question1' className='col-3 col-form-label ps-1'>
                                       Question 1:
                                     </label>
                                     <div className='col-5'>
                                       <select
                                         name='question1'
                                         value={ratings.question1}
                                         className='form-control'
                                         id='question1'
                                         onChange={(e) => handleInputChange(e, 'question1')}
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
                                     <label htmlFor='question2' className='col-3 col-form-label ps-1'>
                                       Question 2:
                                     </label>
                                     <div className='col-5'>
                                       <select
                                         name='question2'
                                         value={ratings.question2}
                                         className='form-control'
                                         id='question2'
                                         onChange={(e) => handleInputChange(e, 'question2')}
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
                                     <label htmlFor='question3' className='col-3 col-form-label ps-1'>
                                       Question 3:
                                     </label>
                                     <div className='col-5'>
                                       <select
                                         name='question3'
                                         value={ratings.question3}
                                         className='form-control'
                                         id='question3'
                                         onChange={(e) => handleInputChange(e, 'question3')}
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
                                     <label htmlFor='question4' className='col-3 col-form-label ps-1'>
                                       Question 4:
                                     </label>
                                     <div className='col-5'>
                                       <select
                                         name='question4'
                                         value={ratings.question4}
                                         className='form-control'
                                         id='question4'
                                         onChange={(e) => handleInputChange(e, 'question4')}
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









