import React, { useEffect, useState } from 'react';

import { API_URL, doApiRequest } from '../../services/apiService';
import { useParams } from 'react-router-dom';
import translate from '../../utill/translator';
import { useSelector } from 'react-redux';

const SingleUserAdmin = () => {

  const [singleUser, setSingleUser] = useState({});
  const { idSingle1 } = useParams();
  const language = useSelector((myStore) => myStore.languageSlice.language);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = API_URL + `/users/single/${idSingle1}`;
        const response = await doApiRequest(url, 'GET');
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
            <strong>role</strong> {singleUser.role}<br />
            <strong>id</strong> {singleUser._id}<br />
            <strong>Gender:</strong> {singleUser.gender === false ? 'Female' : 'Male'}<br />
            <strong>Phone Number:</strong> {singleUser.phoneNumber}<br />
            <strong>Email:</strong> {singleUser.email}<br />
            <strong>Location:</strong> {singleUser.location}<br />
            <strong>timezone</strong> {singleUser.timezone}<br />
            <strong>Date created:</strong> {singleUser.dateCreated}<br />
            <strong>Date of birth:</strong> {singleUser.dateOfBirth}<br />
            <strong>request List</strong> {singleUser.requestList}<br />
            <strong>{translate('post.topics', language)}</strong> {singleUser.topics}<br />
            <strong>educations</strong> {singleUser.educations}<br />
            <br></br>
            <strong>followers</strong> {singleUser.followers}<br />
            <strong>following</strong> {singleUser.following}<br />
            <strong>blocked</strong> {singleUser.blocked}<br />
            <br></br>

            <strong>Question range</strong><br />
            <strong>education Range</strong> {singleUser.educationRange}<br />
            <strong>friend List Range</strong> {singleUser.friendListRange}<br />
            <strong>location Range</strong> {singleUser.locationRange}<br />
            <strong>age Range</strong> {singleUser.ageRange}<br />
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleUserAdmin;
