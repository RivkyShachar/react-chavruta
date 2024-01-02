import React from 'react';

const UserProfileBar = () => {
    return (
        <div className='container bg-info'>

            <div className='container col-8 '>
                <div className='row'>
                    <div className='col-4 mx-2 bg-warning h-100'>
                        <h1>Name</h1>
                        <img src="https://www.pexels.com/photo/profile-pic-of-woman-with-bouquet-on-her-arm-12169270/" 
                        height="100"
                        ></img>
                    </div>
                    <div className='col-6 bg-warning'>
                        <h1>Pic</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserProfileBar;


