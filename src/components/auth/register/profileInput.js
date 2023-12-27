import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import { useForm } from 'react-hook-form';
// import { useDispatch } from 'react-redux';
// import { API_URL, doApiMethodSignUpLogin, TOKEN_NAME } from '../../services/apiService';
// import { getUserInfo } from '../../redux/featchers/userSlice';
// import { date } from 'joi';
import Education from './educationInput'

const ProfileInput = () => {
    const [showEducation, setShowEducation] = useState(false);

    const handleContinueClick = () => {

        setShowEducation(true);
    };

    //age over 12
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [validationError, setValidationError] = useState('');

    const handleDateChange = (e) => {
        const currentDate = new Date();
        const selectedDate = new Date(e.target.value);
        const twelveYearsAgo = new Date();
        twelveYearsAgo.setFullYear(currentDate.getFullYear() - 12);

        setDateOfBirth(e.target.value);

        if (selectedDate > twelveYearsAgo) {
            setValidationError('Birth date must be at least 12 years ago.');
        } else {
            setValidationError('');
        }
    };

    //img

    const [selectedFile, setSelectedFile] = useState(null);
    const defaultImageUrl = 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=600';

    const handleFileChange = (e) => {
        // Get the selected file
        const file = e.target.files[0];

        // You can perform additional checks/validation here if needed

        // Set the selected file to state
        setSelectedFile(file);
    };

    const handleUpload = () => {
        // Use the 'selectedFile' state for further processing
        console.log('Selected File:', selectedFile);
    };

    return (
        <div className='container m-5'>
            <div className='row'>
                {showEducation ? (<Education />) : (
                    < div className='col-8 border'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-7 ms-5 mt-5'>
                                    <h2 className="mb-5">
                                        Sign up
                                    </h2>
                                    <form>
                                        <div className='row mb-3 '>
                                            <label htmlFor='firstName' className='col-3 col-form-label'>
                                                First name:
                                            </label>
                                            <div className='col-2'>
                                                <input name='firstName' className='form-control' type='string' id='firstName' />
                                            </div>
                                            <label htmlFor='lastName' className='col-3 col-form-label'>
                                                Last name:
                                            </label>
                                            <div className='col-2'>
                                                <input name='lastName' className='form-control' type='string' id='lastName' />
                                            </div>
                                        </div>

                                        <div className='row mb-3'>
                                            <label htmlFor='email' className='col-3 col-form-label ps-1'>
                                                email:
                                            </label>
                                            <div className='col-5'>
                                                <input name='email' className='form-control' type='email' id='email' />
                                            </div>
                                        </div>
                                        <div className='row mb-3'>
                                            <label htmlFor='password' className='col-3 col-form-label ps-1'>
                                                Password:
                                            </label>
                                            <div className='col-5'>
                                                <input name='password' className='form-control' type='password' id='password' />
                                            </div>
                                        </div>
                                        <div className='row mb-3'>
                                            <label htmlFor='verifyPassword' className='col-3 col-form-label ps-1'>
                                                verifyPassword:
                                            </label>
                                            <div className='col-5'>
                                                <input name='verifyPassword' className='form-control' type='password' id='verifyPassword' />
                                            </div>
                                        </div>
                                        <div className='row mb-3'>
                                            <label htmlFor='phoneNumber' className='col-3 col-form-label ps-1'>
                                                Phone Number:
                                            </label>
                                            <div className='col-5'>
                                                <input name='phoneNumber' className='form-control' type='number' id='phoneNumber' />
                                            </div>
                                        </div>
                                        <div className='row mb-3'>
                                            <label htmlFor='gender' className='col-3 col-form-label ps-1'>
                                                Gender:
                                            </label>
                                            <div className='col-5'>
                                                <select name='gender' className='form-control' id='gender'>
                                                    <option value='male'>Male</option>
                                                    <option value='female'>Female</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className='row mb-3'>
                                            <label htmlFor='dateOfBirth' className='col-3 col-form-label ps-1'>
                                                Date of birth:
                                            </label>
                                            <div className='col-5'>
                                                <input
                                                    name='dateOfBirth'
                                                    className='form-control'
                                                    type='date'
                                                    id='dateOfBirth'
                                                    value={dateOfBirth}
                                                    onChange={handleDateChange}
                                                />
                                                {validationError && (
                                                    <div className='text-danger'>{validationError}</div>
                                                )}
                                            </div>
                                        </div>


                                        <div className='d-flex justify-content-center mt-5'>
                                            {/* Use type='button' to prevent form submission */}
                                            <button type='button' className='btn btn-info col-4 mx-2' onClick={handleContinueClick}>
                                                Continue
                                            </button>
                                        </div>
                                    </form>

                                </div>
                                <div className='col-3 bg-warning mt-5 h-75'>
                                    <div className='row'>
                                        <div className='col-sm-10'>
                                            {/* Center the image vertically and horizontally */}
                                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                                <img
                                                    src={selectedFile ? URL.createObjectURL(selectedFile) : defaultImageUrl}
                                                    alt='Profile'
                                                    style={{ width: '150px', height: '150px', marginBottom: '10px' }}
                                                />
                                            </div>
                                            <input
                                                type='file'
                                                accept='image/*'
                                                id='profileImage'
                                                onChange={handleFileChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                <div className='col-4 bg-warning'>
                    <img src="https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=600"></img>
                </div>

            </div>
        </div >

    );
}
export default ProfileInput









