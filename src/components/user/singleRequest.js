import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { API_URL, doApiMethod, doApiGet, TOKEN_NAME } from '../../services/apiService';
import { verifyToken } from '../../services/apiService';

const FullRequestDetails = ({ selectedRequest, onClose }) => {
  const userRole = useSelector(store => store.authSlice.userRole);

  useEffect(() => {
    if (!selectedRequest) {
      return; // Don't fetch data if no request is selected
    }
    console.log("User Role:", userRole);

  }, []); // Make selectedRequest a dependency of useEffect

  if (!selectedRequest) {
    return null; // Don't render anything if no request is selected
  }
  const clickYes = async (_data) => {
    try {
      alert("clicked yes");
      const url = API_URL + `/event/markYes/${selectedRequest._id}`;
      const data = await doApiMethod(url, "POST");
      if (data.status === 200) {
        console.log("added to yes");
      }
    } catch (error) {
      console.error("error", error);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="container mt-4">
          <h2>Full Request Details</h2>
          <div>
            <Link
              key={selectedRequest.userId._id}
              to={userRole === "admin" ? `/admin/singleUserAdmin/${selectedRequest.userId._id}` : `/user/singleUser/${selectedRequest.userId._id}`}
              className="list-group-item list-group-item-action"
            >
              Name: {selectedRequest.userId.firstName} {selectedRequest.userId.lastName}
            </Link>
            <img src={selectedRequest.profilePic} alt={selectedRequest.profilePic}></img>
            <p className="card-text">Topics: {selectedRequest.topics.join(', ')}</p>
            <p className="card-text">Preferred Languages:: {selectedRequest.preferredLanguages.join(', ')}</p>
            <p className="card-text">level Of Study: {selectedRequest.preferredLanguages}</p>
            <p className="card-text">state: {selectedRequest.state}</p>
            <p className="card-text">Start Date: {selectedRequest.startDateAndTime}</p>
            <p className="card-text">Study Duration: {selectedRequest.studyDuration.max - selectedRequest.studyDuration.min} </p>
            <p className="card-text">Description: {selectedRequest.description}</p>
            <p className="card-text">id user: {selectedRequest.userId._id}</p>
            <p className="card-text">id request: {selectedRequest._id}</p>

            <div className="d-flex justify-content-between mt-3">
              <button className="btn btn-warning" onClick={() => clickYes(selectedRequest)}>
                YES
              </button>
              <button className="btn btn-danger" onClick={onClose}>
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullRequestDetails;
