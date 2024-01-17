import React, { useState, useMemo } from 'react'
import Select from 'react-select'
import countryList from 'react-select-country-list'
import { useDispatch } from 'react-redux';
import { setLocation } from '../../../redux/featchers/userSlice';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight,FaCheck  } from 'react-icons/fa';
// import "./register.css";
const LocationInput = () => {
  const [value, setValue] = useState('');
  const options = useMemo(() => countryList().getData(), []);
  const dispatch = useDispatch();
  const nav = useNavigate();

  const changeHandler = (selectedOption) => {
    setValue(selectedOption); // Use the selectedOption directly
    dispatch(setLocation({ location: selectedOption.label }));
  };

  const handleContinueClick = () => {
    // Need to check if everything is filled correctly
    if (value) {
      nav("/signUp/educationInput");
    } else {
      // Handle case where country is not selected
      // You can show a message or take appropriate action
      console.log("Please select a country");
    }
  };

  const handleBackClick = () => {
    nav("/signUp/profileInput");
  };

  return (
    <div className="d-flex justify-content-evenly mt-4">
      <div className="page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins container-register position-relative">
        <div className="wrapper wrapper--w680">
          <div className="card card-4">
            <div className="card-body">
              <div className="row row-space">
                <div className="col">
                  <h2 className="title label">
                    We would like to know where you live
                  </h2>
                  <form>
                    <div className="row mb-3 input-group">
                      <label htmlFor="state" className="lable">
                        Country:
                      </label>
                      <Select options={options} value={value} onChange={changeHandler} />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="position-absolute top-50 start-0 translate-middle me-5 z-1">
          <button type="button" className=" btn-back" onClick={handleBackClick}>
            <FaArrowLeft />
          </button>
        </div>
        <div className="position-absolute top-50 start-100 translate-middle d-flex justify-content-center me-5">
          <button
            type="button"
            className={`btn-continue ${!value ? 'disabled' : ''}`}
            onClick={handleContinueClick}
            disabled={!value}
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LocationInput;