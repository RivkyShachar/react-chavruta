import React from 'react';

const LocationInput = () => {
  // You can replace these dummy data with the actual list of cities and states
  const cities = ['City A', 'City B', 'City C'];
  const states = ['State X', 'State Y', 'State Z'];

  return (
    <div className='col-8 border'>
      <div className='container'>
        <div className='row'>
          <div className='col-7 ms-5 mt-5'>
            <h2 className="mb-5">We would like to know where do you live</h2>
            <form>
              <div className='row mb-3'>
                <label htmlFor='city' className='col-3 col-form-label ps-1'>
                  City:
                </label>
                <div className='col-5'>
                  <select name='city' className='form-control' id='city'>
                    <option value=''>Select City</option>
                    {cities.map((city, index) => (
                      <option key={index} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className='row mb-3'>
                <label htmlFor='state' className='col-3 col-form-label ps-1'>
                  State:
                </label>
                <div className='col-5'>
                  <select name='state' className='form-control' id='state'>
                    <option value=''>Select State</option>
                    {states.map((state, index) => (
                      <option key={index} value={state}>
                        {state}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationInput;
