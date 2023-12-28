


import React, { useEffect, useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { setEducationsInput } from '../../../redux/featchers/userSlice';

const EducationInput = () => {
    const dispatch = useDispatch();
    let user = useSelector(myStore=>myStore.userSlice.user)


    const [education, setEducation] = useState({ name: '', startDate: '', endDate: '', degree: '' });
    const [educations, setEducations] = useState([]);
  
    const handleAddEducation = () => {
        setEducations([...educations, education]);
        setEducation({ name: '', startDate: '', endDate: '', degree: '' });
        dispatch(setEducationsInput({ educations: education }));
      
    };

    const handleEducationChange = (field, value) => {
        setEducation({ ...education, [field]: value });
    };

    const handleDeleteEducation = (index) => {
        const updatedEducations = [...educations];
        updatedEducations.splice(index, 1);
        setEducations(updatedEducations);
    };

    return (
        <div className='container m-5'>
            <div className='row'>
                <div className='col-5 '>
                    <h2 className='mb-5'>What is your education </h2>
                    <div className='education mt-3'>
                        <label>
                            <b>Education:</b>
                        </label>
                        <input
                            placeholder='School'
                            type='text'
                            className='form-control my-2'
                            value={education.name}
                            onChange={(e) => handleEducationChange('name', e.target.value)}
                        />
                        <select
                            className='form-control'
                            value={education.degree}
                            onChange={(e) => handleEducationChange('degree', e.target.value)}
                        >
                            <option value=''>Select Degree</option>
                            <option value="High School Diploma">High School Diploma</option>
                            <option value="Bachelor's Degree">Bachelor's Degree</option>
                            <option value="Master's Degree">Master's Degree</option>
                        </select>
                        <div className='row my-3'>
                            <div className='row'>
                                <div className='col-2 mt-1'>
                                    <label>Start Date:</label>
                                </div>
                                <div className='col-4'>
                                    <input
                                        type='date'
                                        className='form-control'
                                        value={education.startDate}
                                        onChange={(e) => handleEducationChange('startDate', e.target.value)}
                                    />
                                </div>
                                <div className='col-2 mt-1 '>
                                    <label>End Date:</label>
                                </div>
                                <div className='col-4 '>
                                    <input
                                        type='date'
                                        className='form-control'
                                        value={education.endDate}
                                        onChange={(e) => handleEducationChange('endDate', e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                        <button
                           type='button'
                           name='yaeli'
                           className='my-2 btn btn-outline-primary'
                           onClick={() => {
                               handleAddEducation();
                           }}
                       
                        >
                            Add Education
                        </button>
                    </div>
                </div>

                {/* Display the list of education on the right side */}
                <div className='col-5 ms-4 border'>
                    <h2 className='mb-4'>Education List</h2>
                    <ul className='list-group custom-list'>
                        {educations.map((edu, index) => (
                            <li key={index} className='list-group-item custom-list-item'>
                                <strong>{edu.name}</strong> - {edu.degree}<br />
                                Start Date: {edu.startDate} - End Date: {edu.endDate}
                                <button
                                    type='button'
                                    className='btn btn-outline-danger btn-sm float-end'
                                    onClick={() => handleDeleteEducation(index)}
                                >
                                    Delete
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default EducationInput;