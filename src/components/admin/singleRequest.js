import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { API_URL, doApiRequest } from '../../services/apiService';
import translate from '../../utill/translator';
import { useSelector } from 'react-redux';

import {formatDate} from '../../utill/dateFormat'
const FullRequestDetails = ({ selectedRequest, onClose }) => {
  const language = useSelector((myStore) => myStore.languageSlice.language);

  console.log("single");
  console.log(selectedRequest);


  useEffect(() => {
    if (!selectedRequest) {
      return; // Don't fetch data if no request is selected
    }

  }, [selectedRequest]); // Make selectedRequest a dependency of useEffect

  if (!selectedRequest) {
    return null; // Don't render anything if no request is selected
  }

  const clickYes = async (_data) => {
    try{
      const url = API_URL + `/event/markYes/${selectedRequest._id}`;
      const data = await doApiRequest(url, "POST");
      if(data.status===200){
        console.log("added to yes");
        window.location.reload();
        alert("added succesfully")

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

          <Link
            key={selectedRequest.userId._id}
            to={`/admin/singleUserAdmin/${selectedRequest.userId._id}`} // Adjust the route as needed
            className="list-group-item list-group-item-action"
          >
            Name: {selectedRequest.userId.firstName} {selectedRequest.userId.lastName}
          
          </Link>
          <img src={selectedRequest.profilePic} alt={selectedRequest.profilePic}></img>
          <p className="card-text">{translate('post.topics', language)}: {selectedRequest.topics.join(', ')}</p>
          <p className="card-text">{translate('post.PreferredLanguages', language)}: {selectedRequest.preferredLanguages.join(', ')}</p>
          <p className="card-text">{translate('post.levelOfStudy', language)}: {selectedRequest.preferredLanguages}</p>
          <p className="card-text">state: {selectedRequest.state}</p>
          <p className="card-text">Start Date: {formatDate(selectedRequest.startDateAndTime, language)}</p>
          <p className="card-text">Study Duration: {selectedRequest.studyDuration.min} - {selectedRequest.studyDuration.max} {translate('general.minutes', language)} </p>
          <p className="card-text">Description: {selectedRequest.description}</p>
          <p className="card-text">id user: {selectedRequest.userId._id}</p>
          <p className="card-text">id request: {selectedRequest._id}</p>

          <div className="d-flex justify-content-between mt-3">
            <button className="btn btn-warning" onClick={() => clickYes(selectedRequest)}>Send request</button>
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
