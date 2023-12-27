import React, { useState } from 'react';
import Education from './educationInput';
import Location from './locationInput';
import RangeQ from './rangeQuestion';

const EducationInput = () => {
    const [showEducation, setShowEducation] = useState(false);


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
    const [clickCount, setClickCount] = useState(0);

    const handleContinueClick = () => {
        setClickCount((prevCount) => prevCount + 1);
    };

    const renderComponent = () => {
        switch (clickCount) {
            case 1:
                return <Education />;
            case 2:
                return <Location />;
            case 3:
                return <RangeQ />;
            default:
                return renderLocationInputForm();
        }
    };

    const renderLocationInputForm = () => (
        <div className='col-8 border'>
            <div className='container'>
                <div className='row'>
                    <div className='col-7 ms-5 mt-5'>
                        <h2 className="mb-5">
                            Sign up
                        </h2>
                        <form>
                            <form>
                                <div className='row mb-3'>
                                    <label htmlFor='city' className='col-3 col-form-label ps-1'>
                                        city:
                                    </label>
                                    <div className='col-5'>
                                        <input name='city' className='form-control' type='city' id='city' />
                                    </div>
                                </div>
                                <div className='row mb-3'>
                                    <label htmlFor='state' className='col-3 col-form-label ps-1'>
                                        state:
                                    </label>
                                    <div className='col-5'>
                                        <input name='state' className='form-control' type='state' id='state' />
                                    </div>
                                </div>
                              

                                <div className='d-flex justify-content-center mt-5'>
                                    <button type='button' className='btn btn-info col-4 mx-2' onClick={handleContinueClick}>
                                        Continue
                                    </button>
                                </div>
                            </form>
                           
                        </form>
                    </div>
                   
                </div>
            </div>
        </div>
    );

    return (
        <div className='container m-5'>
            <div className='row'>
                {renderComponent()}

                <div className='col-4 bg-warning'>
                    <img src="https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=600" alt="background" />
                </div>
            </div>
        </div>
    );
};

export default EducationInput;
