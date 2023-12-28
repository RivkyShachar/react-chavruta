

import React, { useState, useMemo } from 'react'
import Select from 'react-select'
import countryList from 'react-select-country-list'
import { useDispatch } from 'react-redux';
import { setLocation } from '../../../redux/featchers/userSlice';
const LocationInput = () => {

  const [value, setValue] = useState('')
  const options = useMemo(() => countryList().getData(), [])
  const dispatch = useDispatch();

  const changeHandler = value => {
    setValue(value)
    dispatch(setLocation({ location: value.target.value }));
  }

  return (
    <div className='col-8 border'>
      <div className='container'>
        <div className='row'>
          <div className='col-7 ms-5 mt-5'>
            <h2 className="mb-5">We would like to know where do you live</h2>
            <form>
              <div className='row mb-3'>
                <label htmlFor='state' className='col-3 col-form-label ps-1'>
                  State:
                </label>
                <Select options={options} value={value} onChange={changeHandler} />
              </div>
            </form>
          </div>
        </div>
      </div >
    </div >
  );
};

export default LocationInput;

