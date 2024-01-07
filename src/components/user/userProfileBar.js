import React from "react";
import { useSelector } from "react-redux";
import "../../css/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate, Link } from 'react-router-dom';
import { formatDate } from '../../utill/dateFormat';

const UserProfileBar = () => {
    const nav = useNavigate();
    const user = useSelector((myStore) => myStore.userSlice.user);

    const handleEditProfileClick = () => {
        nav('/user/editProfile');
    }
   
    const backgroundColor = {
        backgroundColor: '#F6F6F6',
        border: '2px solid #e0e0e0',
    };

    return (
        <div className='container py-3 mb-3'  style={backgroundColor}>
            <div className='container col-10'>
                <div className='container'>
                    <div className='row'>
                        <h5 className="card-title mb-3">{user.firstName} {user.lastName}</h5>
                        <p className="card-text text-right">
                            <strong>Gender:</strong> {user.gender === 0 ? 'Male' : 'Female'}<br />
                            <strong>Phone Number:</strong> {user.phoneNumber}<br />
                            <strong>Email:</strong> {user.email}<br />
                        </p>
                        <p className="card-text text-right">
                            <strong>Location:</strong> {user.location}<br />
                            <strong>Timezone:</strong> {user.timezone}<br />
                        </p>
                        <strong>Educations:</strong>
                        {user.educations.map((education, index) => (
                            <div key={index}>
                                <p>Degree: {education.degree}</p>
                                <p>Name: {education.name}</p>
                                <p>Start Date: {formatDate(education.startDate)}</p>
                                {education.endDate && <p>End Date: {formatDate(education.endDate)}</p>}
                                <hr className="my-3" />
                            </div>
                        ))}
                        <strong>Topics:</strong>
                        <ul className="list-unstyled">
                            {user.topics.map((topic, index) => (
                                <li key={index}>{topic}</li>
                            ))}
                        </ul>
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
    );
};

export default UserProfileBar;
