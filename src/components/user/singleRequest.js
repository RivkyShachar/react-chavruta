import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { API_URL, doApiGet } from '../../services/apiService';

const FullRequestDetails = ({ selectedRequest, onClose }) => {
  const [singleUser, setSingleUser] = useState({});

  useEffect(() => {
    if (!selectedRequest) {
      return; // Don't fetch data if no request is selected
    }

    const fetchData = async () => {
      try {
        const url = API_URL + `/users/single/${selectedRequest.userId}`;
        const response = await doApiGet(url, 'GET');
        console.log(response);
        if (response.status === 200) {
          setSingleUser(response.data.data);

        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData(); // Call the async function immediately
    // Include dependencies in the array if needed
  }, [selectedRequest]); // Make selectedRequest a dependency of useEffect

  if (!selectedRequest) {
    return null; // Don't render anything if no request is selected
  }


  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="container mt-4">
          <h2>Full Request Details</h2>

          <Link
            key={singleUser._id}
            to={`/user/singleUser/${selectedRequest.userId}`} // Adjust the route as needed
            className="list-group-item list-group-item-action"
          >
            Name: {singleUser.firstName} {singleUser.lastName}
          
          </Link>
          <img src={singleUser.profilePic} alt={singleUser.profilePic}></img>
          <p className="card-text">Topics: {selectedRequest.topics.join(', ')}</p>
          <p className="card-text">Preferred Languages:: {selectedRequest.preferredLanguages.join(', ')}</p>
          <p className="card-text">level Of Study: {selectedRequest.preferredLanguages}</p>
          <p className="card-text">state: {selectedRequest.state}</p>
          <p className="card-text">Start Date: {selectedRequest.startDateAndTime}</p>
          <p className="card-text">Study Duration: {selectedRequest.studyDuration.max - selectedRequest.studyDuration.min} </p>
          <p className="card-text">Description: {selectedRequest.description}</p>
          <p className="card-text">id: {selectedRequest.userId}</p>

          <div className="d-flex justify-content-between mt-3">
            <button className="btn btn-warning">YES</button>
            <button className="btn btn-danger" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullRequestDetails;
