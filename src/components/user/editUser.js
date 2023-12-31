import React, { useState, useEffect } from 'react';
import { API_URL, doApiGet, TOKEN_NAME, verifyToken } from '../../services/apiService';

function EditUser() {
  const [singleUser, setSingleUser] = useState({});

  useEffect(() => {
    const handleEdit = async () => {
      try {
        const token = localStorage.getItem(TOKEN_NAME);

        if (token) {
          // Verify the token
          const verifiedToken = await verifyToken(token);

          if (verifiedToken) {
            const { _id } = verifiedToken;

            // Fetch user data using the verified token
            await fetchData(_id);
          } else {
            // Handle the case where the token is not valid
            console.error('Token verification failed');
          }
        } else {
          // Handle the case where the token does not exist
          console.error('Token is missing');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    const fetchData = async (id) => {
      try {
        const url = API_URL + `/users/single/${id}`;
        const response = await doApiGet(url, 'GET');

        if (response.status === 200) {
          setSingleUser(response.data.data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    handleEdit();
  }, []);

  return (
    <div>
      <div>
        <button>Edit</button>
      </div>
      <div className="container mt-4 text-center">
        <h2 className="mb-4">User Information</h2>
        <div className="card" style={{ width: '18rem', margin: 'auto' }}>
          <img src={singleUser.profilePic} className="card-img-top" alt="Profile" />
          <div className="card-body">
            <h5 className="card-title">{singleUser.firstName}</h5>
            <p className="card-text">
              <strong>Last Name:</strong> {singleUser.lastName}<br />
              <strong>Location:</strong> {singleUser.location}<br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditUser;
