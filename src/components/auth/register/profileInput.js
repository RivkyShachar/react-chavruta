import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setFirstName,
  setLastName,
  setEmail,
  setPassword,
  setVerifyPassword,
  setPhoneNumber,
  setGender,
  setDateOfBirth,
  setProfilePic,
} from "../../../redux/featchers/userSlice";
// import { handleUserInfo } from '../../../utill/authService';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../../css/main.css";
import { TOKEN_NAME } from "../../../services/apiService";

const ProfileInput = () => {
  const dispatch = useDispatch();
  const user = useSelector((myStore) => myStore.userSlice.user);

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
      case 'profilePic':
        dispatch(setProfilePic({ profilePic: inputValue }));
        break;
      // Add more cases for other input names if needed
      default:
        // Handle default case or do nothing
        break;
        const newOverallValidation =
          validatFirstName || validatLastName || validatEmail || validatPassword || validatPhoneNumber || validatVerifyPassword || validationError ? "true" : "false";
        dispatch(setValidate({ value: newOverallValidation }));
        

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
                      {localStorage.getItem(TOKEN_NAME)
                        ? "Edit Profile"
                        : "Sign up"}
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
};
export default ProfileInput;
//   return (
//     <div className="page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins container-register">
//       <div className="wrapper wrapper--w680">
//         <div className="card card-4">
//           <div className="card-body">
//             <form method="POST">
//               <div className="row row-space">
//                 <div className="col-2">
//                   <div className="input-group">
//                     <h2 className="title label ">
//                       {localStorage.getItem(TOKEN_NAME) ? "Edit Profile" : "Sign up"}
//                     </h2>
//                   </div>
//                 </div>
//                 <div className="col-2 text-center">
//                   <div className="input-group">
//                     <label className="label" htmlFor="profilePic">
//                       Profile Picture
//                     </label>
//                     <div className="profile-pic-container m-1">
//                       {selectedFile ? (
//                         <img
//                           src={URL.createObjectURL(selectedFile)}
//                           alt="Profile"
//                           className="profile-pic"
//                         />
//                       ) : user.profilePic ? (
//                         <img
//                           src={user.profilePic}
//                           alt="Profile"
//                           className="profile-pic"
//                         />
//                       ) : (
//                         <div className="default-profile-pic">
//                           <FontAwesomeIcon icon="user-circle" size="3x" />
//                         </div>
//                       )}
//                     </div>
//                     <input
//                       type="file"
//                       accept="image/*"
//                       id="profileImage"
//                       defaultValue={user.profilePic}
//                       onInput={(e) => {
//                         handleFileChange(e);
//                         handleInputChange(e, "profilePic");
//                       }}
//                     />
//                   </div>
//                 </div>
//               </div>
//               <div className="row row-space">
//                 <div className="col-2">
//                   <div className="input-group">
//                     <label className="label" htmlFor="firstName">
//                       First name
//                     </label>
//                     <input
//                       className="input--style-4"
//                       onInput={(e) => handleInputChange(e, "firstName")}
//                       type="text"
//                       name="firstName"
//                       id="firstName"
//                       defaultValue={user.firstName}
//                     />
//                   </div>
//                   {validatFirstName && (
//                     <div className="text-danger">{validatFirstName}</div>
//                   )}
//                 </div>
//                 <div className="col-2">
//                   <div className="input-group">
//                     <label className="label" htmlFor="lastName">
//                       Last name
//                     </label>
//                     <input
//                       className="input--style-4"
//                       onInput={(e) => handleInputChange(e, "lastName")}
//                       type="text"
//                       name="lastName"
//                       id="lastName"
//                     />
//                   </div>
//                   {validatLastName && (
//                     <div className="text-danger">{validatLastName}</div>
//                   )}
//                 </div>
//               </div>
//               <div className="row row-space">
//                 <div className="col-2">
//                   <label className="label" htmlFor="dateOfBirth">
//                     Birth day
//                   </label>
//                   <div className="input-group-icon">
//                     <input
//                       name="dateOfBirth"
//                       className="input--style-4 js-datepicker"
//                       type="date"
//                       id="dateOfBirth"
//                       defaultValue={user.dateOfBirth}
//                       onInput={(e) => {
//                         handleDateChange(e);
//                         handleInputChange(e, "dateOfBirth");
//                       }}
//                     />
//                     {validationError && (
//                       <div className="text-danger">{validationError}</div>
//                     )}
//                   </div>
//                 </div>
//                 <div className="col-2">
//                   <div className="input-group">
//                     <label className="label" htmlFor="gender">
//                       Gender
//                     </label>
//                     <div className="p-t-10">
//                       <select
//                         className="input--style-4 gender-select"
//                         name="gender"
//                         defaultValue={user.gender}
//                         id="gender"
//                         onInput={(e) => handleInputChange(e, "gender")}
//                         required
//                       >
//                         <option defaultValue="true" disabled hidden>
//                           Select Gender
//                         </option>
//                         <option defaultValue="true">Male</option>
//                         <option defaultValue="false">Female</option>
//                       </select>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="row row-space">
//                 <div className="col-2">
//                   <div className="input-group">
//                     <label className="label" htmlFor="email">
//                       Email
//                     </label>
//                     <input
//                       className="input--style-4"
//                       onInput={(e) => handleInputChange(e, "email")}
//                       type="email"
//                       name="email"
//                       id="email"
//                       defaultValue={user.email}
//                     />
//                   </div>
//                   {validatEmail && (
//                     <div className="text-danger">{validatEmail}</div>
//                   )}
//                 </div>
//                 <div className="col-2">
//                   <div className="input-group">
//                     <label className="label" htmlFor="phoneNumber">
//                       Phone Number
//                     </label>
//                     <input
//                       className="input--style-4"
//                       type="text"
//                       name="phoneNumber"
//                       onInput={(e) => handleInputChange(e, "phoneNumber")}
//                       id="phoneNumber"
//                       defaultValue={user.phoneNumber}
//                     />
//                   </div>
//                   {validatPhoneNumber && (
//                     <div className="text-danger">{validatPhoneNumber}</div>
//                   )}
//                 </div>
//                 <div className="col-2">
//                   <div className="input-group">
//                     <label className="label" htmlFor="password">
//                       Password
//                     </label>
//                     <input
//                       className="input--style-4"
//                       type="text"
//                       name="password"
//                       onInput={(e) => handleInputChange(e, "password")}
//                       id="password"
//                       defaultValue={user.password}
//                     />
//                   </div>
//                   {validatPassword && (
//                     <div className="text-danger">{validatPassword}</div>
//                   )}
//                 </div>
//                 <div className="col-2">
//                   <div className="input-group">
//                     <label className="label" htmlFor="verifyPassword">
//                       Verify Password
//                     </label>
//                     <input
//                       className="input--style-4"
//                       type="text"
//                       name="phoneNumber"
//                       onInput={(e) => handleInputChange(e, "verifyPassword")}
//                       id="verifyPassword"
//                       defaultValue={user.verifyPassword}
//                     />

//                   </div>
//                   {validatVerifyPassword && (
//                     <div className="text-danger">{validatVerifyPassword}</div>
//                   )}
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default ProfileInput









