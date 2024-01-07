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
        <div className='container py-3 mb-3  '  style={backgroundColor}>
            <div className='container col-10  ' >
                <div className='container'>
                    <div className='row'>
                        <div className="col-3">
                            <img
                                src={user.profilePic}
                                style={{ width: '200px', height: '200px' }}
                                alt={user.firstName}
                                className=" d-block "
                            />
                            <h2 className="card-title mt-3">{user.firstName} {user.lastName}</h2>
                        </div>
                        <div className="col-3">
                            <p className="card-text text-right">
                                <strong>Gender:</strong> {user.gender === 0 ? 'Male' : 'Female'}<br />
                                <strong>Phone Number:</strong> {user.phoneNumber}<br />
                                <strong>Email:</strong> {user.email}<br />
                            </p>
                            <p className="card-text text-right">
                                <strong>Location:</strong> {user.location}<br />
                                <strong>Timezone:</strong> {user.timezone}<br />
                            </p>
                        </div>
                        <div className="col-3">
                            <strong>Educations:</strong>
                            {user.educations.map((education, index) => (
                                <div key={index}>
                                    <p>Degree: {education.degree}</p>
                                    <p>Name: {education.name}</p>

                                    <hr className="my-3" />
                                </div>
                            ))}
                        </div>
                        <div className="col-3">
                            <strong>Topics:</strong>
                            <ul className="list-unstyled">
                                {user.topics.map((topic, index) => (
                                    <li key={index}>{topic}</li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
            </div>
            );
};

            export default UserProfileBar;
