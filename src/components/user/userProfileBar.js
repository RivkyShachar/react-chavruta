import React from 'react';
import { useSelector } from 'react-redux';

const UserProfileBar = () => {

    const user = useSelector((myStore)=>myStore.userSlice.user);

    return (
        <div className='container bg-info'>

            <div className='container col-7 '>
                <div className='row'>
                    <div className='col-4 mx-2 '>
                        <h1>{user.firstName} {user.lastName}</h1>
                    </div>
                    <div className='col-6 py-2 px-5 text-end'>
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


