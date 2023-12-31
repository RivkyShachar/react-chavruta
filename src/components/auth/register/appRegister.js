import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { API_URL, doApiMethodSignUpLogin, TOKEN_NAME } from '../../../services/apiService';
import { getUserInfo } from '../../../redux/featchers/userSlice';
import {  useSelector } from 'react-redux';
import Profile from './profileInput';
import Topic from './topicList';
import Education from './educationInput';
import Location from './locationInput';
import RangeQ1 from './rangeQuestion1';
import RangeQ2 from './rangeQuestion2';

const AppRegister = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { handleSubmit} = useForm();

  const steps = [
    { id: 'profile', component: <Profile /> },
    { id: 'location', component: <Location /> },
    { id: 'education', component: <Education /> },
    { id: 'topic', component: <Topic /> },
    { id: 'rangeQ1', component: <RangeQ1 /> },
    { id: 'rangeQ2', component: <RangeQ2 /> },
  ];

  let user = useSelector(myStore=>myStore.userSlice.user)
  const userWithoutVerifyPassword = { ...user };
  delete userWithoutVerifyPassword.verifyPassword;

  console.log("userWithoutVerifyPassword", userWithoutVerifyPassword);
  const onSubmit = async () => {
    setIsSubmitted(true);
    try {
      console.log("data",userWithoutVerifyPassword);
      const url = API_URL + '/auth/register';
      const response = await doApiMethodSignUpLogin(url, 'POST', userWithoutVerifyPassword);
  
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
    console.log("currentStep",currentStep);
    if (currentStep < 6) {
      setCurrentStep((prevStep) => prevStep + 1);
      console.log("user",user);
    } else {
      handleSubmit(onSubmit);
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
              {currentStep === 5 ? (
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
