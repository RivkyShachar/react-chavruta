import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { setFirstName, setLastName, setEmail, setPassword, setVerifyPassword, setPhoneNumber, setGender, setDateOfBirth, setProfilePic } from '../../../redux/featchers/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { TOKEN_NAME } from '../../../services/apiService';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaArrowRight } from 'react-icons/fa';
import translate from '../../../utill/translator';

const ProfileInput = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const { register, handleSubmit, formState: { errors }, setValue } = useForm();
  const [formData, setFormData] = useState({});
  const user = useSelector((myStore) => myStore.userSlice.user);
  const language = useSelector((myStore) => myStore.languageSlice.language);
  const [image, setImage] = useState();
  const presetKey = "wiejdrdt";
  const cloudName = "dmxzrb6dq";

  useEffect(() => {
    // Update form values when user data changes (e.g., after fetching from API)
    setValue('firstName', user.firstName || '');
    setValue('lastName', user.lastName || '');
    setValue('email', user.email || '');
    setValue('phoneNumber', user.phoneNumber || '');
    setValue('dateOfBirth', user.dateOfBirth || '');
    setValue('gender', user.gender || '');

    // dispatch(setProfilePic({ profilePic: image }));
  }, [user, setValue]);

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

  const setData = ({ firstName, lastName, email, password, phoneNumber, gender, dateOfBirth }) => {
    if (!(firstName && firstName.length >= 2 && firstName.length < 99)) {
      return false;
    }
    dispatch(setFirstName({ firstName: firstName }));

    if (!(lastName && lastName.length >= 2 && lastName.length < 99)) {
      return false;
    }
    dispatch(setLastName({ lastName: lastName }));

    const isValidEmail = /\S+@\S+\.\S+/.test(email);
    if (!isValidEmail) {
      return false;
    }
    dispatch(setEmail({ email: email }));

    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d!@#$%^&*()_+{}\[\]:;<>,.?~\\-]{8,32}$/;
    const isValidPassword = passwordRegex.test(password);

    if (!isValidPassword) {
      return false;
    }
    dispatch(setPassword({ password: password }));

    if (!(phoneNumber && phoneNumber.length >= 3 && phoneNumber.length <= 12)) {
      return false;
    }
    dispatch(setPhoneNumber({ phoneNumber: phoneNumber }));

    if (gender) {
      dispatch(setGender({ gender: gender }));
    }
    else {
      return false
    }

    if (dateOfBirth) {
      dispatch(setDateOfBirth({ dateOfBirth: dateOfBirth }));
    }

    return true;
  }


  const validateField = (fieldName, value) => {
    switch (fieldName) {
      case 'firstName':
      case 'lastName':
        return value.trim().length >= 2;
      case 'email':
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      case 'dateOfBirth':
        return value !== ''; // You might want to add a more specific check for date format
      case 'password':
        return /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d!@#$%^&*()_+{}\[\]:;<>,.?~\\-]{8,32}$/.test(value);
      case 'verifyPassword':
        return value === formData.password;
      default:
        return true;
    }
  };

  const updateFormData = (name, value) => {
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    updateFormData(name, value);

    // Set the error message based on validation
    validateField(name, value);
  };

  const isValid = ({ firstName, lastName, email, gender, password }) => {
    if (firstName && lastName && email && gender && password) {
      return true
    }
    return false
  }

  const onSubmit = async (data) => {
    try {
      if (isValid(data)) {
        // Perform additional actions or navigation here
        console.log('Valid data:', data);
        if(setData(data)){
          nav("/signUp/loacaionInput")
        }

      }
      else {
        console.log('invalid data:', data);
      }
    } catch (validationError) {
      // Handle any additional error if needed
      console.error('Validation error:', validationError);
    }
  };

  return (
    <div className="d-flex justify-content-evenly mt-4">
      <div className="page-wrapper bg-gra-02 p-t-100 p-b-100 font-poppins container-register position-relative">
        <div className=" vh-100 wrapper wrapper--w680">
          <div className="card card-4">
            <div className="card-body">
              <div className="row row-space">
                <div className="col-2 text-center">
                  <div className="input-group">
                    <div className="title label mb-0 mx-auto font-weight-bold ">
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
                          Your Profile Picture
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='row row-space'>
                <div className='col-2'>
                  <div className="input-group">
                    <label className="label" htmlFor="firstName">
                      {translate('user.firstName', language)}
                    </label>
                    <input
                      {...register("firstName", { required: true })}
                      onChange={handleInputChange}
                      className={`input--style-4 ${errors.firstName && "input-error"}`}
                      type="text"
                      name="firstName"
                    />
                    {errors.firstName && (
                      <p className="error-message text-danger">
                        *{errors.firstName.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className='col-2'>
                  <div className="input-group">
                    <label className="label" htmlFor="lastName">
                      {translate('user.lastName', language)}
                    </label>
                    <input
                      {...register("lastName", { required: true })}
                      onChange={handleInputChange}
                      className={`input--style-4 ${errors.lastName && "input-error"}`}
                      type="text"
                      name="lastName"
                    />
                    {errors.lastName && (
                      <p className="error-message text-danger">
                        *{errors.lastName.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div className="row row-space">
                <div className="col-2">
                  <label className="label" htmlFor="dateOfBirth">
                    {translate('user.birthDay', language)}
                  </label>
                  <div className="input-group">
                    <input
                      {...register("dateOfBirth", { required: true })}
                      onChange={handleInputChange}
                      className={`input--style-4 ${errors.dateOfBirth && "input-error"}`}
                      type="date"
                      id="dateOfBirth"
                      name="dateOfBirth"
                    />
                    {errors.dateOfBirth && (
                      <p className="error-message text-danger">
                        *{errors.dateOfBirth.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="col-2">
                  <label className="label" htmlFor="gender">
                    {translate('user.gender', language)}
                  </label>
                  <div className="input-group">
                    <select
                      className={`input--style-4 gender-select ${errors.gender && "input-error"}`}
                      name="gender"
                      id="gender"
                      {...register("gender", { required: true })}
                    >
                      <option defaultValue="true" disabled hidden>
                        {translate('user.selectGender', language)}
                      </option>
                      <option defaultValue="true">{translate('user.male', language)}</option>
                      <option defaultValue="false">{translate('user.female', language)}</option>
                    </select>
                    {errors.gender && (
                      <p className="error-message text-danger">
                        *{errors.gender.message}
                      </p>
                    )}
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
                      className={`input--style-4 ${errors.email && "input-error"}`}
                      type="email"
                      name="email"
                      id="email"
                      onChange={handleInputChange}
                      {...register("email", { required: true })}
                    />
                    {errors.email && (
                      <p className="error-message text-danger">
                        *{errors.email.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="col-2">
                  <div className="input-group">
                    <label className="label" htmlFor="phoneNumber">
                      {translate('user.phoneNumber', language)}
                    </label>
                    <input
                      className={`input--style-4 ${errors.phoneNumber && "input-error"}`}
                      type="text"
                      name="phoneNumber"
                      id="phoneNumber"
                      defaultValue={user.phoneNumber}
                      onChange={handleInputChange}
                      {...register("phoneNumber", { required: true })}
                    />
                    {errors.phoneNumber && (
                      <p className="error-message text-danger">
                        *{errors.phoneNumber.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="col-2">
                  <div className="input-group">
                    <label className="label" htmlFor="password">
                      {translate('user.password', language)}
                    </label>
                    <input
                      className={`input--style-4 ${errors.password && "input-error"}`}
                      type="text"
                      name="password"
                      id="password"
                      defaultValue={user.password}
                      onChange={handleInputChange}
                      {...register("password", { required: true })}
                    />
                    {errors.password && (
                      <p className="error-message text-danger">
                        *{errors.password.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="col-2">
                  <div className="input-group">
                    <label className="label" htmlFor="verifyPassword">
                      {translate('user.verifyPassword', language)}
                    </label>
                    <input
                      className={`input--style-4 ${errors.verifyPassword && "input-error"}`}
                      type="text"
                      name="verifyPassword"
                      id="verifyPassword"
                      onChange={handleInputChange}
                      {...register("verifyPassword", { required: true })}
                    />
                    {errors.verifyPassword && (
                      <p className="error-message text-danger">
                        *{errors.verifyPassword.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Unified button for validation and additional actions */}
              <div className="position-absolute top-50 start-100 translate-middle d-flex justify-content-center me-5">
                <button
                  type="button"
                  className={`btn-continue`}
                  onClick={handleSubmit(onSubmit)}
                // disabled={!isValid}
                >
                  <FaArrowRight />
                </button>
              </div>


              {/* Unified button for validation and additional actions */}
              <div className="position-absolute top-50 start-100 translate-middle d-flex justify-content-center me-5">
                <button
                  type="button"
                  className={`btn-continue`}
                  onClick={handleSubmit(onSubmit)}
                // disabled={!isValid}
                >
                  <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInput;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useForm } from 'react-hook-form';
// import { useDispatch, useSelector } from 'react-redux';
// import { TOKEN_NAME } from '../../../services/apiService';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { FaArrowRight } from 'react-icons/fa';
// import translate from '../../../utill/translator';

// const ProfileInput = () => {
//   const dispatch = useDispatch();
//   const { register, handleSubmit, formState: { errors } } = useForm();
//   const [formData, setFormData] = useState({});
//   const user = useSelector((myStore) => myStore.userSlice.user);
//   const language = useSelector((myStore) => myStore.languageSlice.language);
//   const [image, setImage] = useState();
//   const presetKey = "wiejdrdt";
//   const cloudName = "dmxzrb6dq";

//   useEffect(() => {
//     // dispatch(setProfilePic({ profilePic: image }));
//   }, [image]);

//   function handleFile(e) {
//     const file = e.target.files[0];
//     const formData = new FormData();
//     formData.append('file', file);
//     formData.append("upload_preset", presetKey);
//     axios.post(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, formData)
//       .then(res => setImage(res.data.secure_url))
//       .catch(err => console.log(err));
//   }

//   const validateField = (fieldName, value) => {
//     console.log("in validate");
//     console.log(formData);
//     switch (fieldName) {
//       case 'firstName':
//       case 'lastName':
//         return value.trim().length >= 2;
//       case 'email':
//         return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
//       case 'dateOfBirth':
//         return value !== ''; // You might want to add a more specific check for date format
//       case 'password':
//         return /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d!@#$%^&*()_+{}\[\]:;<>,.?~\\-]{8,32}$/.test(value);
//       case 'verifyPassword':
//         return value === formData.password;
//       default:
//         return true;
//     }
//   };

//   const updateFormData = (name, value) => {
//     setFormData(prevData => ({
//       ...prevData,
//       [name]: value
//     }));
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     updateFormData(name, value);

//     // Set the error message based on validation
//     validateField(name, value);
//   };

//   const onSubmit = async () => {
//     try {
//       if (formData.firstName && formData.lastName && formData.email && formData.password && formData.gender) {
//         console.log("need now to set values and nav");
//         console.log('Valid data:', formData);
//       } else {
//         console.log('Invalid data:', formData);
//       }
//       // Perform additional actions or navigation here
//     } catch (validationError) {
//       // Handle any additional error if needed
//       console.error('Validation error:', validationError);
//     }
//   };


//   return (
//     <div className="d-flex justify-content-evenly mt-4">
//       <div className="page-wrapper bg-gra-02 p-t-100 p-b-100 font-poppins container-register position-relative">
//         <div className=" vh-100 wrapper wrapper--w680">
//           <div className="card card-4">
//             <div className="card-body">
//               <div className="row row-space">
//                 <div className="col-2 text-center">
//                   <div className="input-group">
//                     <div className="title label mb-0 mx-auto font-weight-bold ">
//                       {localStorage.getItem(TOKEN_NAME) ? "Edit Profile" : "Sign up"}
//                     </div>
//                   </div>
//                 </div>
//                 <div className="col-2 text-center">
//                   <div className="input-group">
//                     <div className="container">
//                       <div className="picture-container">
//                         <div className="picture">
//                           {user.profilePic ? (
//                             <img
//                               src={user.profilePic}
//                               alt="Profile"
//                               className="picture-src" id="wizardPicturePreview"
//                             />
//                           ) : image ? (
//                             <img
//                               src={image}
//                               alt="Profile"
//                               className="picture-src" id="wizardPicturePreview"
//                             />
//                           ) : (
//                             <div className="default-profile-pic ">
//                               <FontAwesomeIcon icon="user-circle" size="7x" />
//                             </div>
//                           )}
//                           <input type="file" id="wizard-picture" className="" onChange={handleFile} />
//                         </div>
//                         <label className="label mt-1 mb-0 " htmlFor="profilePic">
//                           Your Profile Picture
//                         </label>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className='row row-space'>
//                 <div className='col-2'>
//                   <div className="input-group">
//                     <label className="label" htmlFor="firstName">
//                       {translate('user.firstName', language)}
//                     </label>
//                     <input
//                       {...register("firstName", { required: true })}
//                       onChange={handleInputChange}
//                       className={`input--style-4 ${errors.firstName && "input-error"}`}
//                       type="text"
//                       name="firstName"
//                     />
//                     {errors.firstName && (
//                       <p className="error-message text-danger">
//                         *{errors.firstName.message}
//                       </p>
//                     )}
//                   </div>
//                 </div>
//                 <div className='col-2'>
//                   <div className="input-group">
//                     <label className="label" htmlFor="lastName">
//                       {translate('user.lastName', language)}
//                     </label>
//                     <input
//                       {...register("lastName", { required: true })}
//                       onChange={handleInputChange}
//                       className={`input--style-4 ${errors.lastName && "input-error"}`}
//                       type="text"
//                       name="lastName"
//                     />
//                     {errors.lastName && (
//                       <p className="error-message text-danger">
//                         *{errors.lastName.message}
//                       </p>
//                     )}
//                   </div>
//                 </div>
//               </div>
//               <div className="row row-space">
//                 <div className="col-2">
//                   <label className="label" htmlFor="dateOfBirth">
//                     {translate('user.birthDay', language)}
//                   </label>
//                   <div className="input-group">
//                     <input
//                       {...register("dateOfBirth", { required: true })}
//                       onChange={handleInputChange}
//                       className={`input--style-4 ${errors.dateOfBirth && "input-error"}`}
//                       type="date"
//                       id="dateOfBirth"
//                       name="dateOfBirth"
//                     />
//                     {errors.dateOfBirth && (
//                       <p className="error-message text-danger">
//                         *{errors.dateOfBirth.message}
//                       </p>
//                     )}
//                   </div>
//                 </div>
//                 <div className="col-2">
//                   <label className="label" htmlFor="gender">
//                     {translate('user.gender', language)}
//                   </label>
//                   <div className="input-group">
//                     <select
//                       className={`input--style-4 gender-select ${errors.gender && "input-error"}`}
//                       name="gender"
//                       id="gender"
//                       {...register("gender", { required: true })}
//                     >
//                       <option defaultValue="true" disabled hidden>
//                         {translate('user.selectGender', language)}
//                       </option>
//                       <option defaultValue="true">{translate('user.male', language)}</option>
//                       <option defaultValue="false">{translate('user.female', language)}</option>
//                     </select>
//                     {errors.gender && (
//                       <p className="error-message text-danger">
//                         *{errors.gender.message}
//                       </p>
//                     )}
//                   </div>
//                 </div>
//               </div>
//               <div className="row row-space ">
//                 <div className="col-2">
//                   <div className="input-group">
//                     <label className="label" htmlFor="email">
//                       Email
//                     </label>
//                     <input
//                       className={`input--style-4 ${errors.email && "input-error"}`}
//                       type="email"
//                       name="email"
//                       id="email"
//                       onChange={handleInputChange}
//                       {...register("email", { required: true })}
//                     />
//                     {errors.email && (
//                       <p className="error-message text-danger">
//                         *{errors.email.message}
//                       </p>
//                     )}
//                   </div>
//                 </div>
//                 <div className="col-2">
//                   <div className="input-group">
//                     <label className="label" htmlFor="phoneNumber">
//                       {translate('user.phoneNumber', language)}
//                     </label>
//                     <input
//                       className={`input--style-4 ${errors.phoneNumber && "input-error"}`}
//                       type="text"
//                       name="phoneNumber"
//                       id="phoneNumber"
//                       defaultValue={user.phoneNumber}
//                       onChange={handleInputChange}
//                       {...register("phoneNumber", { required: true })}
//                     />
//                     {errors.phoneNumber && (
//                       <p className="error-message text-danger">
//                         *{errors.phoneNumber.message}
//                       </p>
//                     )}
//                   </div>
//                 </div>
//                 <div className="col-2">
//                   <div className="input-group">
//                     <label className="label" htmlFor="password">
//                       {translate('user.password', language)}
//                     </label>
//                     <input
//                       className={`input--style-4 ${errors.password && "input-error"}`}
//                       type="text"
//                       name="password"
//                       id="password"
//                       defaultValue={user.password}
//                       onChange={handleInputChange}
//                       {...register("password", { required: true })}
//                     />
//                     {errors.password && (
//                       <p className="error-message text-danger">
//                         *{errors.password.message}
//                       </p>
//                     )}
//                   </div>
//                 </div>
//                 <div className="col-2">
//                   <div className="input-group">
//                     <label className="label" htmlFor="verifyPassword">
//                       {translate('user.verifyPassword', language)}
//                     </label>
//                     <input
//                       className={`input--style-4 ${errors.verifyPassword && "input-error"}`}
//                       type="text"
//                       name="verifyPassword"
//                       id="verifyPassword"
//                       onChange={handleInputChange}
//                       {...register("verifyPassword", { required: true })}
//                     />
//                     {errors.verifyPassword && (
//                       <p className="error-message text-danger">
//                         *{errors.verifyPassword.message}
//                       </p>
//                     )}
//                   </div>
//                 </div>
//               </div>

//               {/* Unified button for validation and additional actions */}
//               <div className="position-absolute top-50 start-100 translate-middle d-flex justify-content-center me-5">
//                 <button
//                   type="button"
//                   className={`btn-continue`}
//                   onClick={handleSubmit(onSubmit)}
//                 // disabled={!isValid}
//                 >
//                   <FaArrowRight />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfileInput;
