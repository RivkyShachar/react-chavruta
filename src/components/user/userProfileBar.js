import React from 'react';
import { useSelector } from 'react-redux';

const UserProfileBar = () => {

    const user = useSelector((myStore) => myStore.userSlice.user);

    return (

        <div className='container bg-info'>

            <div className='container col-7 '>
                <div className='row'>
                    <div className='col-4 mx-2 '>
                        <h5 className="card-title">{user.firstName} {user.lastName}</h5>
                        <p className="card-text text-right">
                            <strong>Gender:</strong> {user.gender === 0 ? 'Male' : 'Female'}<br />
                            <strong>Phone Number:</strong> {user.phoneNumber}<br />
                            <strong>Email:</strong> {user.email}<br />
                            <strong>Location:</strong> {user.location}<br />
                            <strong>educations</strong> {user.educations}<br />
                            <strong>topics</strong> {user.topics}<br />
                        </p>
                    </div>
                    <div className='col-4 mx-2 '>

                        <p className="card-text text-right">

                            <strong>Location:</strong> {user.location}<br />
                            <strong>timezone</strong> {user.timezone}<br />
                            <strong>request List</strong> {user.requestList}<br />
                            <strong>educations</strong> {user.educations}<br />
                            <strong>topics</strong> {user.topics}<br />
                        </p>
                    </div>
                    <div className='col-2 py-2 text-end'>
                        <img
                            src={user.profilePic}
                            style={{ height: '200px' }}
                            alt="Your Alt Text"
                            className="float-end"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserProfileBar;


