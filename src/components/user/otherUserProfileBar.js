import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

const OtherUserProfileBar = ({user}) => {

    return (
        <div className='container bg-info '>
            <div className='container col-7 '>
                <div className='row'>
                    <div className='col-4 mx-2 '>
                        <h1>{user.userId.firstName} {user.userId.lastName}</h1>
                    </div>
                    <div className='col-6 py-2 px-5 text-end'>
                        <img
                            src={user.userId.profilePic}
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

export default OtherUserProfileBar;


