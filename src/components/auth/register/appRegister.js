import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { API_URL, doApiRequest, TOKEN_NAME } from '../../../services/apiService';
import { verifyToken } from '../../../services/apiService';
import { handleUserInfo } from '../../../utill/authService';
import { setLocation } from '../../../redux/featchers/userSlice';
import Profile from './profileInput';
import Location from './locationInput';
import Education from './educationInput';
import Topic from './topicList';
import RangeQ1 from './rangeQuestion1';
import RangeQ2 from './rangeQuestion2';
import "../../../css/main.css";
import { FaArrowLeft, FaArrowRight, } from 'react-icons/fa';


const AppRegister = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const { handleSubmit } = useForm();

  const steps = [
    { id: "profile", component: <Profile /> },
    { id: "location", component: <Location /> },
    { id: "education", component: <Education /> },
    { id: "topic", component: <Topic /> },
    { id: "rangeQ1", component: <RangeQ1 /> },
    { id: "rangeQ2", component: <RangeQ2 /> },
  ];

  const selectedCountry = useSelector((state) => state.userSlice.location);

  const user = useSelector((myStore) => myStore.userSlice.user);
  const userWithoutVerifyPassword = { ...user };
  delete userWithoutVerifyPassword.verifyPassword;

  const onSubmit = async () => {
    try {
      const token = localStorage.getItem(TOKEN_NAME);
      const url = token
        ? API_URL + `/users/${localStorage.getItem("USER_ID")}`
        : API_URL + "/auth/register";

      const method = token ? 'PUT' : 'POST';
      let data;

      if (token) {
        delete userWithoutVerifyPassword._id;
        delete userWithoutVerifyPassword.dateCreated;
        delete userWithoutVerifyPassword.role;
        delete userWithoutVerifyPassword.__v;
        data = await doApiRequest(url, method, userWithoutVerifyPassword);
      } else {
        data = await doApiRequest(url, method, userWithoutVerifyPassword);
      }

      if (data.status === 201) {
        nav("/user");
        window.location.reload();
      } else if (data.status === 400) {
        console.log("status 400");
      }

      if (data.data.token) {
        localStorage.setItem(TOKEN_NAME, data.data.token);
        const decodedToken = data.data.token;
        verifyToken(decodedToken);
      }

      await handleUserInfo(dispatch);

      if (localStorage.getItem("ROLE") === "admin") {
        nav("/admin");
      } else if (localStorage.getItem("ROLE") === "user") {
        nav("/user");
      } else {
        nav("/");
      }
    } catch (error) {
    }
  };

  const handleContinueClick = () => {
    if (currentStep < 6) {
      setCurrentStep((prevStep) => prevStep + 1);
    } else {
      handleSubmit(onSubmit);
    }
  };

  const handleBackClick = () => {
    if (currentStep > 0) {
      setCurrentStep((prevStep) => prevStep - 1);
    }
  };

  const handleSubmitButtonClick = () => {
    handleSubmit(onSubmit)();
  };

  return (
    //     <div className='container-register'>
    //       <div className='row'>

    //         <form>
    //         <button type='button' className='btn btn-secondary col- mx-2' onClick={handleBackClick}>
    //                 Back
    //               </button>
    //           {steps.map((step, index) => (
    //             <div key={index} style={{ display: currentStep === index ? 'block' : 'none' }}>
    //               {step.component}
    //             </div>
    //           ))}

    //               {currentStep === 5 ? (
    //                 <button type='button' className='btn btn-success col-2 mx-2' onClick={handleSubmitButtonClick}>
    //                   Submit
    //                 </button>
    //               ) : (
    //                 <button type='button' className='btn btn-info col-2 mx-2' onClick={handleContinueClick}>
    //                   Continue
    //                 </button>
    //               )}
    //         </form>
    //         </div>

    //      </div >

    //   );
    // };

    <div className="container-register">
      <div className="row">
        <div className="col-md-12">
          <div className="d-flex justify-content-evenly mt-4 position-relative">
            {steps.map((step, index) => (
              <div
                key={index}
                style={{ display: currentStep === index ? "block" : "none" }}
              >
                {step.component}
              </div>
            ))}
            <div className="position-absolute top-50 start-0 translate-middle me-5 z-1">
              {currentStep !== 0 && (
                <button
                  type="button"
                  className=" btn-back"
                  onClick={handleBackClick}
                >
                  <FaArrowLeft />
                </button>
              )}
            </div>
            <div className="position-absolute top-50 start-100 translate-middle d-flex justify-content-center me-5">
              {currentStep !== 5 && (
                <button
                  type="button"
                  className="btn-continue"
                  onClick={handleContinueClick}
                >
                  <FaArrowRight />
                </button>
              )}
              {currentStep === 5 && (
                <div className="d-flex justify-content-center">
                  <button
                    type="button"
                    className="btn-continue "
                    onClick={handleSubmitButtonClick}
                  >
                    <FaArrowRight />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default AppRegister;




