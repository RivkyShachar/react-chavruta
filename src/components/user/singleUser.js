


import React, { useEffect, useState } from 'react';

import { API_URL, doApiGet } from '../../services/apiService';
import { useParams } from 'react-router-dom';

const SingleUser = () => {

    const [singleUser, setSingleUser] = useState({});
    const { idSingle1 } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = API_URL + `/users/single/${idSingle1}`;
                const response = await doApiGet(url, 'GET');
                console.log(response);
                if (response.status === 200) {
                    setSingleUser(response.data.data);

                }
            } catch (error) {
            }
        };

        fetchData(); // Call the async function immediately
        // Empty dependency array means the effect runs once after the initial render
    }, []);
    return (
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
                        <h5 className="card-title">{singleUser.firstName} {singleUser.lastName}</h5>
                        <p className="card-text text-right">
                            <strong>Gender:</strong> {singleUser.gender === 0 ? 'Male' : 'Female'}<br />
                            <strong>Phone Number:</strong> {singleUser.phoneNumber}<br />
                            <strong>Email:</strong> {singleUser.email}<br />
                            <strong>Location:</strong> {singleUser.location}<br />
                            <strong>timezone</strong> {singleUser.timezone}<br />
                            <strong>request List</strong> {singleUser.requestList}<br />
                            <strong>topics</strong> {singleUser.topics}<br />
                            <strong>educations</strong> {singleUser.educations}<br />
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default SingleUser;
