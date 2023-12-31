import React, { useEffect, useState } from 'react';

import { API_URL, doApiGet } from '../../services/apiService';
import { useParams } from 'react-router-dom';

const SingleUserAdmin = () => {

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
                    console.log("response.data",response.data.data);
                    console.log("singleuser",singleUser);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData(); // Call the async function immediately
        // Empty dependency array means the effect runs once after the initial render
    }, []);
  // Sample user data


  return (
    <div className="container mt-4 text-center">
      <h2 className="mb-4">User Information</h2>
      <div className="card" style={{ width: '18rem', margin: 'auto' }}>
        <img src={singleUser.profilePic} className="card-img-top" alt="Profile" />
        <div className="card-body">
          <h5 className="card-title">{singleUser.firstName}</h5>
          <p className="card-text">
            <strong>Phone Number:</strong> {singleUser.lastName}<br />
            <strong>Location:</strong> {singleUser.location}<br />
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleUserAdmin;
