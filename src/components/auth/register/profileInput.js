import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFirstName, setLastName, setEmail, setPassword, setVerifyPassword, setPhoneNumber, setGender, setDateOfBirth, setProfilePic } from '../../../redux/featchers/userSlice';
// import { handleUserInfo } from '../../../utill/authService';

const ProfileInput = () => {
    const dispatch = useDispatch();
    const user = useSelector((myStore) => myStore.userSlice.user);

    //age over 12
    const [dateOfBirth, setDateOfBirth1] = useState('');
    const [validationError, setValidationError] = useState('');

    // useEffect(() => {
    //     handleUserInfo(dispatch);
    // }, [dispatch]);

    const handleDateChange = (e) => {
        const currentDate = new Date();
        const selectedDate = new Date(e.target.value);
        const twelveYearsAgo = new Date();
        twelveYearsAgo.setFullYear(currentDate.getFullYear() - 12);

        setDateOfBirth1(e.target.value);

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
        const file = e.target.files[0];
        setSelectedFile(file);
    };

    const handleInputChange = (e, inputName) => {
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
            case 'profilePic':
                dispatch(setProfilePic({ profilePic: inputValue }));
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
                                    {user.firstName ? 'Edit Profile' : 'Sign up'}
                                </h2>
                                <div className='row mb-3 '>
                                    <label htmlFor='firstName' className='col-3 col-form-label'>
                                        First name:
                                    </label>
                                    <div className='col-2'>
                                        <input name='firstName' onInput={(e) => handleInputChange(e, 'firstName')} className='form-control' type='string' id='firstName' defaultValue={user.firstName} />
                                    </div>
                                    <label htmlFor='lastName' className='col-3 col-form-label'>
                                        Last name:
                                    </label>
                                    <div className='col-2'>
                                        <input name='lastName' onInput={(e) => handleInputChange(e, 'lastName')} className='form-control' type='string' id='lastName'  defaultValue={user.lastName} />
                                    </div>

                                </div>

                                <div className='row mb-3'>
                                    <label htmlFor='email' className='col-3 col-form-label ps-1'>
                                        email:
                                    </label>
                                    <div className='col-5'>
                                        <input name='email' onInput={(e) => handleInputChange(e, 'email')} className='form-control' type='string' id='email' defaultValue={user.email} />
                                    </div>
                                </div>
                                <div className='row mb-3'>
                                    <label htmlFor='password' className='col-3 col-form-label ps-1'>
                                        Password:
                                    </label>
                                    <div className='col-5'>
                                        <input name='password' onInput={(e) => handleInputChange(e, 'password')} className='form-control' type='string' id='password' defaultValue={user.password} />
                                    </div>
                                </div>
                                <div className='row mb-3'>
                                    <label htmlFor='verifyPassword' className='col-3 col-form-label ps-1'>
                                        verifyPassword:
                                    </label>
                                    <div className='col-5'>
                                        <input name='verifyPassword' onInput={(e) => handleInputChange(e, 'verifyPassword')} className='form-control' type='string' id='verifyPassword' defaultValue={user.verifyPassword} />
                                    </div>
                                </div>
                                <div className='row mb-3'>

                                    <label htmlFor='phoneNumber' className='col-3 col-form-label ps-1'>
                                        Phone Number:
                                    </label>
                                    <div className='col-5'>
                                        <input name='phoneNumber' onInput={(e) => handleInputChange(e, 'phoneNumber')} className='form-control' type='string' id='phoneNumber' defaultValue={user.phoneNumber} />
                                    </div>
                                </div>
                                <div className='row mb-3'>
                                    <label htmlFor='gender' className='col-3 col-form-label ps-1'>
                                        Gender:
                                    </label>
                                    <div className='col-5'>
                                        <select name='gender' defaultValue={user.gender} className='form-control' id='gender' onInput={(e) => handleInputChange(e, 'gender')} required>
                                            <option defaultValue='true' disabled hidden>
                                                Select Gender
                                            </option>
                                            <option defaultValue='true'>Male</option>
                                            <option defaultValue='false'>Female</option>
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
                                            defaultValue={user.dateOfBirth}
                                            onInput={(e) => {
                                                handleDateChange(e);
                                                handleInputChange(e, 'dateOfBirth');
                                            }} />
                                        {validationError && (
                                            <div className='text-danger'>{validationError}</div>
                                        )}
                                    </div>
                                </div>

                            </div>
                            <div className='col-3 border m-4  h-75'>
                                <div className='row'>
                                    <div className='col-sm-10'>
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
                                            defaultValue={user.profilePic}
                                            onInput={(e) => {
                                                handleFileChange(e);
                                                handleInputChange(e, 'profilePic');
                                            }}
                                        />
                                    </div>
                                </div>
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









