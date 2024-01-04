


import React, { useEffect, useState } from 'react';

import { API_URL, doApiGet } from '../../services/apiService';
import { useParams } from 'react-router-dom';
<<<<<<< HEAD

=======
import OtherUserRequestList from './otherUserRequestList' 
>>>>>>> origin/otherUserProfile
const SingleUser = () => {

    const [singleUser, setSingleUser] = useState({});
    const { idSingle1 } = useParams();

    useEffect(() => {
        console.log("in ");
        const fetchData = async () => {
            try {
                const url = API_URL + `/users/single/${idSingle1}`;
                const response = await doApiGet(url, 'GET');
                console.log(response.data.data);
                if (response.status === 200) {
                    setSingleUser(response.data.data);
                }
            } catch (error) {
                console.log(error);
            }
        };

        fetchData(); // Call the async function immediately
    }, [idSingle1]); // Include idSingle1 in the dependency array

    return (
<<<<<<< HEAD
        <div>
            <div className="container mt-4 text-center">
                <h2 className="mb-4">User Information</h2>
                <div className="card" style={{ width: '18rem', margin: 'auto' }}>
                    <img
                        src={singleUser.profilePic}
                        className="card-img-top"
                        alt="Profile"
                        style={{ height: '100%' }}
                    />        <div className="card-body">
=======
        <div className='container bg-info'>

            <div className='container col-7 '>
                <div className='row'>
                    <div className='col-4 mx-2 '>
>>>>>>> origin/otherUserProfile
                        <h5 className="card-title">{singleUser.firstName} {singleUser.lastName}</h5>
                        <p className="card-text text-right">
                            <strong>Gender:</strong> {singleUser.gender === 0 ? 'Male' : 'Female'}<br />
                            <strong>Phone Number:</strong> {singleUser.phoneNumber}<br />
                            <strong>Email:</strong> {singleUser.email}<br />
                            <strong>Location:</strong> {singleUser.location}<br />
                            <strong>timezone</strong> {singleUser.timezone}<br />
                            <strong>request List</strong> {singleUser.requestList}<br />
<<<<<<< HEAD
                            <strong>topics</strong> {singleUser.topics}<br />
                            <strong>educations</strong> {singleUser.educations}<br />
                        </p>
                    </div>
                </div>
            </div>

=======
                            <strong>educations</strong> {singleUser.educations}<br />
                            <strong>topics</strong> {singleUser.topics}<br />
                        </p>
                    </div>
                    <div className='col-4 mx-2 '>

                        <p className="card-text text-right">

                            <strong>Location:</strong> {singleUser.location}<br />
                            <strong>timezone</strong> {singleUser.timezone}<br />
                            <strong>request List</strong> {singleUser.requestList}<br />
                            <strong>educations</strong> {singleUser.educations}<br />
                            <strong>topics</strong> {singleUser.topics}<br />
                        </p>
                    </div>

                    <div className='col-2 py-2 text-end'>
                        <img
                            src="https://images.pexels.com/photos/1499327/pexels-photo-1499327.jpeg?auto=compress&cs=tinysrgb&w=600"
                            style={{ height: '200px' }}
                            alt="Your Alt Text"
                            className="float-end"
                        />
                    </div>

                </div>
            </div>
            <div className='bg-danger'>
               <OtherUserRequestList userId={idSingle1} />
            </div>
>>>>>>> origin/otherUserProfile
        </div>
    )
}
export default SingleUser;
