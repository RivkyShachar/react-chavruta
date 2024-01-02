import React from 'react';

const UserProfileBar = () => {
    return (
        <div className='container bg-info'>

            <div className='container col-7 '>
                <div className='row'>
                    <div className='col-4 mx-2 '>
                        <h1>Yael Globerman</h1>
                    </div>
                    <div className='col-6 py-2 px-5 text-end'>
                        <img
                            src="https://images.pexels.com/photos/1499327/pexels-photo-1499327.jpeg?auto=compress&cs=tinysrgb&w=600"
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


