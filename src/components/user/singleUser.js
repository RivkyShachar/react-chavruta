


import React, { useEffect, useState } from 'react';

import { API_URL, doApiRequest } from '../../services/apiService';
import { useParams } from 'react-router-dom';
import OtherUserRequestList from './otherUserRequestList' 
const SingleUser = () => {

    const [singleUser, setSingleUser] = useState({});
    const { idSingle1 } = useParams();

    useEffect(() => {
        console.log("in ");
        const fetchData = async () => {
            try {
                const url = API_URL + `/users/single/${idSingle1}`;
                const response = await doApiRequest(url, 'GET');
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
        <div className='container bg-info'>

            <div className='container col-7 '>
                <div className='row'>
                    <div className='col-4 mx-2 '>
                        <h5 className="card-title">{singleUser.firstName} {singleUser.lastName}</h5>
                        <p className="card-text text-right">
                            <strong>Gender:</strong> {singleUser.gender === false ? 'Female' : 'Male'}<br />
                            <strong>Phone Number:</strong> {singleUser.phoneNumber}<br />
                            <strong>Email:</strong> {singleUser.email}<br />
                            <strong>Location:</strong> {singleUser.location}<br />
                            <strong>timezone</strong> {singleUser.timezone}<br />
                            <strong>request List</strong> {singleUser.requestList}<br />
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
                            src={singleUser.profilePic}
                            style={{ height: '200px' }}
                            alt="Your Alt Text"
                            className="float-end"
                        />
                    </div>

                </div>
            </div>
            <div >
               <OtherUserRequestList userId={idSingle1} />
            </div>
        </div>
    )
}
export default SingleUser;
