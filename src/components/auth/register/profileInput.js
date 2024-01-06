import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFirstName, setLastName, setEmail, setPassword, setVerifyPassword, setPhoneNumber, setGender, setDateOfBirth, setProfilePic } from '../../../redux/featchers/userSlice';
// import { handleUserInfo } from '../../../utill/authService';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./register.css";
import { TOKEN_NAME } from '../../../services/apiService';

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
        <div className="page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins container-register">
        <div className="wrapper wrapper--w680">
          <div className="card card-4">
            <div className="card-body">
              <form method="POST">
                <div className="row row-space">
                  <div className="col-2">
                    <div className="input-group">
                      <h2 className="title label ">
                        {localStorage.getItem(TOKEN_NAME)? "Edit Profile" : "Sign up"}
                      </h2>
                    </div>
                  </div>
                  <div className="col-2 text-center">
                    <div className="input-group">
                      <label className="label" htmlFor="profilePic">
                        Profile Picture
                      </label>
                      <div className="profile-pic-container m-1">
                        {selectedFile ? (
                          <img
                            src={URL.createObjectURL(selectedFile)}
                            alt="Profile"
                            className="profile-pic"
                          />
                        ) : user.profilePic ? (
                          <img
                            src={user.profilePic}
                            alt="Profile"
                            className="profile-pic"
                          />
                        ) : (
                          <div className="default-profile-pic">
                            <FontAwesomeIcon icon="user-circle" size="3x" />
                          </div>
                        )}
                      </div>
                      <input
                        type="file"
                        accept="image/*"
                        id="profileImage"
                        defaultValue={user.profilePic}
                        onInput={(e) => {
                          handleFileChange(e);
                          handleInputChange(e, "profilePic");
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="row row-space">
                  <div className="col-2">
                    <div className="input-group">
                      <label className="label" htmlFor="firstName">
                        First name
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
                  </div>
                  <div className="col-2">
                    <div className="input-group">
                      <label className="label" htmlFor="lastName">
                        Last name
                      </label>
                      <input
                        className="input--style-4"
                        onInput={(e) => handleInputChange(e, "lastName")}
                        type="text"
                        name="lastName"
                        id="lastName"
                      />
                    </div>
                  </div>
                </div>
                <div className="row row-space">
                  <div className="col-2">
                    <label className="label" htmlFor="dateOfBirth">
                      Birthday
                    </label>
                    <div className="input-group-icon">
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
                    <div className="input-group">
                      <label className="label" htmlFor="gender">
                        Gender
                      </label>
                      <div className="p-t-10">
                        <select
                          className="input--style-4 gender-select"
                          name="gender"
                          defaultValue={user.gender}
                          id="gender"
                          onInput={(e) => handleInputChange(e, "gender")}
                          required
                        >
                          <option defaultValue="true" disabled hidden>
                            Select Gender
                          </option>
                          <option defaultValue="true">Male</option>
                          <option defaultValue="false">Female</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row row-space">
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
                  </div>
                  <div className="col-2">
                    <div className="input-group">
                      <label className="label" htmlFor="phoneNumber">
                        Phone Number
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
                  </div>
                  <div className="col-2">
                    <div className="input-group">
                      <label className="label" htmlFor="password">
                        Password
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
                  </div>
                  <div className="col-2">
                    <div className="input-group">
                      <label className="label" htmlFor="verifyPassword">
                        Verify Password
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
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
}
export default ProfileInput









