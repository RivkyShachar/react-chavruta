import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { setFirstName, setLastName, setEmail, setPassword, setVerifyPassword, setPhoneNumber, setGender, setDateOfBirth, setProfilePic } from '../../../redux/featchers/userSlice';
// import { handleUserInfo } from '../../../utill/authService';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TOKEN_NAME } from '../../../services/apiService';
import translate from '../../../utill/translator';
import UploadFile from './uploadFile';
import { FaArrowRight  } from 'react-icons/fa';
const ProfileInput = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const user = useSelector((myStore) => myStore.userSlice.user);
  const language = useSelector((myStore) => myStore.languageSlice.language);
  const [formValid, setFormValid] = useState(false);
  const presetKey = "wiejdrdt";
  const cloudName = "dmxzrb6dq";
  const [image, setImage] = useState();
  useEffect(() => {
    dispatch(setProfilePic({ profilePic: image }));
  }, [image])
  function handleFile(e) {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    formData.append("upload_preset", presetKey);
    axios.post(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, formData)
      .then(res => setImage(res.data.secure_url))
      .catch(err => console.log(err));


  }

  const handleContinueClick = () => {
    //need to check if everything filled correct and if yes navigate to ...
    if(formValid){
      nav("/signUp/loacaionInput")
    }
  }

  //age over 12
  const [dateOfBirth, setDateOfBirth1] = useState('');
  const [validate, setValidate] = useState('false');
  const [validationError, setValidationError] = useState('');
  const [validatFirstName, setValidatFirstName] = useState('');
  const [validatLastName, setValidatLastName] = useState('');
  const [validatEmail, setValidatEmail] = useState('');
  const [validatPassword, setValidatPassword] = useState('');
  const [validatVerifyPassword, setValidatVerifyPassword] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [validatPhoneNumber, setValidatPhoneNumber] = useState('');


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
        if (inputValue.length < 2) {
          setValidatFirstName('First name must be at least 2 characters');
        } else if (inputValue.length >= 99) {
          setValidatFirstName('First name must be less than 99 characters');
        }
        else {
          dispatch(setFirstName({ firstName: inputValue }));
          setValidatFirstName('');
        }

        break;
      case 'lastName':
        if (inputValue.length < 2) {
          setValidatLastName('Last name must be at least 2 characters');
        } else if (inputValue.length >= 99) {
          setValidatLastName('Last name must be less than 99 characters');
        }
        else {
          dispatch(setLastName({ lastName: inputValue }));
          setValidatLastName('');
        }

        break;
      case 'email':
        const isValidEmail = /\S+@\S+\.\S+/.test(inputValue);
        if (!isValidEmail) {
          setValidatEmail('Please enter a valid email address');
        } else {
          dispatch(setEmail({ email: inputValue }));
          setValidatEmail('');
        }
        break;

      case 'password':
        const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d!@#$%^&*()_+{}\[\]:;<>,.?~\\-]{8,32}$/;
        const isValidPassword = passwordRegex.test(inputValue);

        if (!isValidPassword) {
          setValidatPassword('Password must contain at least one uppercase letter, one lowercase letter, one digit, and be 8-32 characters long');
        } else {
          setPasswordInput(inputValue);
          dispatch(setPassword({ password: inputValue }));
          setValidatPassword('');
        }
        break;

      case 'verifyPassword':
        if (inputValue !== passwordInput) {
          setValidatVerifyPassword('Passwords do not match');
        } else {
          dispatch(setVerifyPassword({ verifyPassword: inputValue }));
          setValidatVerifyPassword('');
        }
        break;
      case 'phoneNumber':
        if (inputValue.length < 3) {
          setValidatPhoneNumber('Phone number must be more than 3 digits');
        } else if (inputValue.length > 12) {
          setValidatPhoneNumber('Phone number must be less than 12 digits');
        }
        else {
          dispatch(setPhoneNumber({ phoneNumber: inputValue }));
          setValidatPhoneNumber('');
        }
        break;
      case 'gender':
        dispatch(setGender({ gender: inputValue }));
        break;
      case 'dateOfBirth':
        dispatch(setDateOfBirth({ dateOfBirth: inputValue }));
        break;

      // Add more cases for other input names if needed
      default:
        // Handle default case or do nothing
        break;
    }
  };

  useEffect(() => {
    const isValid = validateForm();
    console.log("isValid:", isValid);
    setFormValid(isValid);
  }, [validatFirstName, validatLastName, validatEmail, validatPhoneNumber, validatPassword, validatVerifyPassword, validationError]);
  
  const validateForm = () => {
    // Add your form validation logic here
    // Check if all required fields are filled correctly
    // Return true if form is valid, false otherwise
    // Example:
    return (
      !validatFirstName &&
      !validatLastName &&
      !validatEmail &&
      !validatPhoneNumber &&
      !validatPassword &&
      !validatVerifyPassword &&
      !validationError
    );
  };


  return (
    <div className="d-flex justify-content-evenly mt-4 position-relative">
      <div className="page-wrapper bg-gra-02 p-t-100 p-b-100 font-poppins container-register">
        <div className=" vh-100 wrapper wrapper--w680">
          <div className="card card-4">
            <div className="card-body">
              <form method="POST">
                <div className="row row-space">
                  <div className="col-2 text-center">
                    <div className="input-group">
                      <div className="title label mb-0 mx-auto  font-weight-bold ">
                        {localStorage.getItem(TOKEN_NAME) ? "Edit Profile" : "Sign up"}
                      </div>
                    </div>
                  </div>
                  <div className="col-2 text-center">
                    <div className="input-group">
                      <div className="container">
                        <div className="picture-container">
                          <div className="picture">
                            {user.profilePic ? (
                              <img
                                src={user.profilePic}
                                alt="Profile"
                                className="picture-src" id="wizardPicturePreview"
                              />
                            ) : image ? (
                              <img
                                src={image}
                                alt="Profile"
                                className="picture-src" id="wizardPicturePreview"
                              />
                            ) : (
                              <div className="default-profile-pic ">
                                <FontAwesomeIcon icon="user-circle" size="7x" />
                              </div>
                            )}
                            <input type="file" id="wizard-picture" className="" onChange={handleFile} />
                          </div>
                          <label className="label mt-1 mb-0 " htmlFor="profilePic">
                            {translate('user.profileImg', language)}
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row row-space ">
                  <div className="col-2 ">
                    <div className="input-group">
                      <label className="label" htmlFor="firstName">
                        {translate('user.firstName', language)}
                      </label>
                      <input
                        className="input--style-4"
                        onInput={(e) => handleInputChange(e, "firstName")}
                        type="text"
                        name="firstName"
                        id="firstName"
                        defaultValue={user.firstName}
                      />
                    </div>
                    {validatFirstName && (
                      <div className="text-danger">{validatFirstName}</div>
                    )}
                  </div>
                  <div className="col-2">
                    <div className="input-group">
                      <label className="label" htmlFor="lastName">
                        {translate('user.lastName', language)}
                      </label>
                      <input
                        className="input--style-4"
                        onInput={(e) => handleInputChange(e, "lastName")}
                        type="text"
                        name="lastName"
                        id="lastName"
                        defaultValue={user.lastName}
                      />
                    </div>
                    {validatLastName && (
                      <div className="text-danger">{validatLastName}</div>
                    )}
                  </div>
                </div>
                <div className="row row-space">
                  <div className="col-2">
                    <label className="label" htmlFor="dateOfBirth">
                      {translate('user.birthDay', language)}
                    </label>
                    <div className="input-group">
                      <input
                        name="dateOfBirth"
                        className="input--style-4 js-datepicker"
                        type="date"
                        id="dateOfBirth"
                        defaultValue={user.dateOfBirth}
                        onInput={(e) => {
                          handleDateChange(e);
                          handleInputChange(e, "dateOfBirth");
                        }}
                      />
                      {validationError && (
                        <div className="text-danger">{validationError}</div>
                      )}
                    </div>
                  </div>
                  <div className="col-2">
                    <label className="label" htmlFor="gender">
                      {translate('user.gender', language)}
                    </label>
                    <div className="input-group">
                      <select
                        className="input--style-4 gender-select"
                        name="gender"
                        defaultValue={user.gender}
                        id="gender"
                        onInput={(e) => handleInputChange(e, "gender")}
                        required
                      >
                        <option defaultValue="true" disabled hidden>
                          {translate('user.selectGender', language)}
                        </option>
                        <option defaultValue="true">{translate('user.male', language)}</option>
                        <option defaultValue="false">{translate('user.female', language)}</option>
                      </select>

                    </div>
                  </div>

                </div>
                <div className="row row-space ">
                  <div className="col-2">
                    <div className="input-group">
                      <label className="label" htmlFor="email">
                        Email
                      </label>
                      <input
                        className="input--style-4"
                        onInput={(e) => handleInputChange(e, "email")}
                        type="email"
                        name="email"
                        id="email"
                        defaultValue={user.email}
                      />
                    </div>
                    {validatEmail && (
                      <div className="text-danger">{validatEmail}</div>
                    )}
                  </div>
                  <div className="col-2">
                    <div className="input-group">
                      <label className="label" htmlFor="phoneNumber">
                        {translate('user.phoneNumber', language)}
                      </label>
                      <input
                        className="input--style-4"
                        type="text"
                        name="phoneNumber"
                        onInput={(e) => handleInputChange(e, "phoneNumber")}
                        id="phoneNumber"
                        defaultValue={user.phoneNumber}
                      />
                    </div>
                    {validatPhoneNumber && (
                      <div className="text-danger">{validatPhoneNumber}</div>
                    )}
                  </div>
                  <div className="col-2">
                    <div className="input-group">
                      <label className="label" htmlFor="password">
                        {translate('user.password', language)}
                      </label>
                      <input
                        className="input--style-4"
                        type="text"
                        name="password"
                        onInput={(e) => handleInputChange(e, "password")}
                        id="password"
                        defaultValue={user.password}
                      />
                    </div>
                    {validatPassword && (
                      <div className="text-danger">{validatPassword}</div>
                    )}
                  </div>
                  <div className="col-2">
                    <div className="input-group">
                      <label className="label" htmlFor="verifyPassword">
                        {translate('user.verifyPassword', language)}
                      </label>
                      <input
                        className="input--style-4"
                        type="text"
                        name="phoneNumber"
                        onInput={(e) => handleInputChange(e, "verifyPassword")}
                        id="verifyPassword"
                        defaultValue={user.verifyPassword}
                      />

                    </div>
                    {validatVerifyPassword && (
                      <div className="text-danger">{validatVerifyPassword}</div>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="position-absolute top-50 start-100 translate-middle d-flex justify-content-center me-5">  
          <button
            type="button"
            className="btn-continue"
            onClick={handleContinueClick}
            disabled={!formValid}
          >
            <FaArrowRight />
          </button>
      </div>
    </div>
  );
}
export default ProfileInput







