import React, { useState } from 'react';
import Education from './educationInput';
import Location from './locationInput';
import RangeQ from './rangeQuestion';

const AppRegister = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleContinueClick = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const renderComponent = () => {
    switch (currentStep) {
      case 1:
        return <Education />;
      case 2:
        return <Location />;
      case 3:
        return <RangeQ />;
      default:
        return null;
    }
  };

  return (
    <div className='container m-5'>
      <div className='row'>
        {renderComponent()}

        <div className='col-4 bg-warning'>
          {/* Additional content or image for the background */}
        </div>
        
        <div className='d-flex justify-content-center mt-5'>
          <button type='button' className='btn btn-info col-4 mx-2' onClick={handleContinueClick}>
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppRegister;
