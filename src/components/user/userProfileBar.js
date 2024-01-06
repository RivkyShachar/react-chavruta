import React from 'react';
import { useSelector } from 'react-redux';

const UserProfileBar = () => {
    const user = useSelector((myStore) => myStore.userSlice.user);

    return (
        <div className='container bg-secondary py-3 mb-3' >
            <div className='container col-10'>

                <div className='container'>
                    <div className='row'>
                        <div className='col-2 mx-2 my-2 card'>
                            <h5 className="card-title mb-3">{user.firstName} {user.lastName}</h5>
                            <p className="card-text text-right">
                                <strong>Gender:</strong> {user.gender === 0 ? 'Male' : 'Female'}<br />
                                <strong>Phone Number:</strong> {user.phoneNumber}<br />
                                <strong>Email:</strong> {user.email}<br />
                                <strong>Location:</strong> {user.location}<br />
                            </p>
                        </div>
                        <div className='col-2 mx-2 my-2 card'>
                            <p className="card-text text-right">
                                <strong>Location:</strong> {user.location}<br />
                                <strong>timezone</strong> {user.timezone}<br />
                            </p>
                        </div>
                        <div className='col-2 py-2 my-2 mx-2  card'>
                            <strong>Educations:</strong>
                            {user.educations.map((education, index) => (
                                <div key={index}>
                                    <p>Degree: {education.degree}</p>
                                    <p>Name: {education.name}</p>
                                    <p>Start Date: {education.startDate}</p>
                                    {education.endDate && <p>End Date: {education.endDate}</p>}
                                    <hr className="my-3" />
                                </div>
                            ))}
                        </div>
                        <div className='col-2 py-2 my-2 mx-2  card'>
                            <strong>Topics:</strong>
                            <ul className="list-unstyled">
                                {user.topics.map((topic, index) => (
                                    <li key={index}>{topic}</li>
                                ))}
                            </ul>
                        </div>
                        <div className='col-2 py-2 my-2 mx-2 card'>
                            <img
                                src={user.profilePic}
                                style={{ maxWidth: '100%', height: 'auto' }}
                                alt="Your Alt Text"
                                className="mx-auto d-block"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserProfileBar;
