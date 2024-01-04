


import React, { useEffect, useState } from 'react';

import { API_URL, doApiGet } from '../../services/apiService';
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
                const response = await doApiGet(url, 'GET');
                console.log("---------------------",response.data.data);
                if (response.status === 200) {
                    setSingleUser(response.data.data);
                }
            } catch (error) {
                console.log(error);
            }
        };

        fetchData(); // Call the async function immediately
    }, [parameter]); // Include parameter in the dependency array

    return (

        <div className='container bg-info'>

        <div className='container col-7 '>
            <div className='row'>
                <div className='col-4 mx-2 '>
                    <h1>{singleUser.firstName} {singleUser.lastName}</h1>
                </div>
                <div className='col-6 py-2 px-5 text-end'>
                    <img
                        src={singleUser.profilePic}
                        style={{ height: '200px' }}
                        alt="Your Alt Text"
                        className="float-end"
                    />
                </div>

            </div>
        </div>
        
            <div className='bg-danger'>
               <OtherUserRequestList userId={parameter} />
            </div>
        </div>
    )
}
export default OtherSingleUser;
