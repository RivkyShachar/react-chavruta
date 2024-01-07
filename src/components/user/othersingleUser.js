


import React, { useEffect, useState } from 'react';

import { API_URL, doApiRequest } from '../../services/apiService';
import { useParams } from 'react-router-dom';
import OtherUserRequestList from './otherUserRequestList'
const OtherSingleUser = () => {

    const [singleUser, setSingleUser] = useState({});
    const { parameter } = useParams();

    useEffect(() => {
        console.log("in ");
        const fetchData = async () => {
            try {
                const url = API_URL + `/users/single/${parameter}`;
                const response = await doApiRequest(url, 'GET');
                console.log("---------------------", response.data.data);
                if (response.status === 200) {
                    setSingleUser(response.data.data);
                }
            } catch (error) {
                console.log(error);
            }
        };

        fetchData(); // Call the async function immediately
    }, [parameter]); // Include parameter in the dependency array
   
    const backgroundColor = {
        backgroundColor: '#F6F6F6', // Replace with your actual pink color code
        border: '2px solid #e0e0e0', // Add a 8px black border
    };
   
    return (

        <div className='container'>

            <div className='container col-12' style={backgroundColor}>
                <div className='row d-flex justify-content-center align-items-center'>
                    <div className='text-center col-5 '>
                        <h1>{singleUser.firstName} {singleUser.lastName}</h1>
                    </div>
                    <div className='py-2 col-3 me-5'>
                        <img
                            src={singleUser.profilePic}
                            style={{ width: '200px', height: '200px' }}
                            alt="Your Alt Text"
                        />
                    </div>
                </div>


            </div>
            <div className='bg-d'>
                <OtherUserRequestList userId={parameter} />
            </div>
        </div>
    )
}
export default OtherSingleUser;
