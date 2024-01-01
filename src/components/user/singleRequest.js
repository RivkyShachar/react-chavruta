import React  from 'react';
import { Link } from 'react-router-dom';

const FullRequestDetails = ({ selectedRequest, onClose }) => {
  if (!selectedRequest) {
    return null; // Don't render anything if no request is selected
  }

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="container mt-4">
          <h2>Full Request Details</h2>
          <p>
            Name: <Link to={`/user/singleUser/${selectedRequest.userId}`}>{selectedRequest.userName}</Link>
          </p>
          <p>Subject: {selectedRequest.subject}</p>
          <p>Start Date: {selectedRequest.startDate}</p>
          <p>Description: {selectedRequest.description}</p>
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
