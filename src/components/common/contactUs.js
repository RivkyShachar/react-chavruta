import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    // You can add your logic to send the form data to the server or perform other actions
  };

  return (
    <div id="contactUs" className='container col-4 mt-5 mb-5'>
      <div className=' justify-content-center text-center p-4 ' >
        <h3 className='display-3 mb-3'>Contact us</h3>
        <form onSubmit={handleSubmit}>
          <div className='form-group mt-2'>
            <label htmlFor='name'>Name:</label>
            <input
              type='text'
              className='form-control'
              id='name'
              name='name'
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className='form-group mt-2'>
            <label htmlFor='email'>Email:</label>
            <input
              type='email'
              className='form-control'
              id='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className='form-group mt-2'>
            <label htmlFor='message'>Message:</label>
            <textarea
              className='form-control'
              id='message'
              name='message'
              value={formData.message}
              onChange={handleChange}
              rows='4'
              required
            ></textarea>
          </div>
          <button type='submit' className='btn btn-outline-success mt-2'>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
