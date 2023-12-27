import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { API_URL, doApiMethodSignUpLogin, TOKEN_NAME } from '../../../services/apiService';
import { getUserInfo } from '../../../redux/featchers/userSlice';

import Profile from './profileInput';
import Education from './educationInput';
import Location from './locationInput';
import RangeQ1 from './rangeQuestion1';
import RangeQ2 from './rangeQuestion2';

const AppRegister = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm();

  const steps = [
    { id: 'profile', component: <Profile /> },
    { id: 'location', component: <Location /> },
    { id: 'education', component: <Education /> },
    { id: 'rangeQ1', component: <RangeQ1 /> },
    { id: 'rangeQ2', component: <RangeQ2 /> },
  ];

  const onSubmit = async (data) => {
    setIsSubmitted(true);
    try {
      const url = API_URL + '/auth/signUp';
      console.log("data");
      const response = await doApiMethodSignUpLogin(url, 'POST', data);
  
      if (response && response.token) {
        localStorage.setItem(TOKEN_NAME, response.token);
  
        const decodedToken = response.token;
  
        if (decodedToken.role && decodedToken.role.includes('admin')) {
          navigate('/admin');
        } else if (decodedToken.role && decodedToken.role.includes('user')) {
          navigate('/user');
        } else {
          navigate('/');
        }
  
        window.location.reload();
      }
  
      dispatch(getUserInfo());
    } catch (error) {
      setIsSubmitted(false);
      alert(error.response ? error.response.data.msg : 'An error occurred');
    }
  };
  

  const handleContinueClick = () => {
    if (currentStep < 4) {
      setCurrentStep((prevStep) => prevStep + 1);
    } else {
      handleSubmit(onSubmit)();
    }
  };

  const handleBackClick = () => {
    if (currentStep > 0) {
      setCurrentStep((prevStep) => prevStep - 1);
    }
  };

  return (
    <div className='container '>
      <div className='row'>
        <form onSubmit={handleSubmit(onSubmit)}>
          {steps.map((step, index) => (
            <div key={index} style={{ display: currentStep === index ? 'block' : 'none' }}>
              {step.component}
            </div>
          ))}
          <div className='container'>
            <div className='row'>
              <button type='button' className='btn btn-secondary col-2 mx-2' onClick={handleBackClick}>
                Back
              </button>
              {currentStep === 4 ? (
                <button type='submit' className='btn btn-success col-2 mx-2' disabled={isSubmitted}>
                  Submit
                </button>
              ) : (
                <button type='button' className='btn btn-info col-2 mx-2' onClick={handleContinueClick}>
                  Continue
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AppRegister;
