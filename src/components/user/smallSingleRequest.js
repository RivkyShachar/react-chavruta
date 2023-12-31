// SmallSingleRequest.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FullRequestDetails from './singleRequest';
import { useDispatch, useSelector } from 'react-redux';

const SmallSingleRequest = ({ requests }) => {
  const [selectedRequest, setSelectedRequest] = useState(null);
  const searchV = useSelector((myStore) => myStore.searchSlice.searchValue);
  const dispatch = useDispatch();

  const handleRequestClick = (request) => {
    setSelectedRequest(request);
  };

  const handleCloseDetails = () => {
    setSelectedRequest(null);
  };

  const filteredRequests = requests.filter((user) => {
    const fullName = `${user.subject} ${user.userName}`;
    return fullName.toLowerCase().includes(searchV.toLowerCase());
  });

  return (
    <div className="row">
      {filteredRequests.map((request) => (
        <div key={request._id} className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <Link
                to={`/singleRequest/${request._id}`}
                onClick={() => handleRequestClick(request)}
                className="request-link" // Add a class to the Link component
              >
                <p className="card-text">Subject: {request.subject}</p>
                <p className="card-text">username: {request.userName}</p>
                <p className="card-text">Start Date: {request.startDate}</p>
                <p className="card-text">Description: {request.description}</p>
                <div className="d-flex justify-content-between mt-3">
                  <button className="btn btn-warning">YES</button>
                  <button className="btn btn-danger">No</button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      ))}
      <FullRequestDetails selectedRequest={selectedRequest} onClose={handleCloseDetails} />
    </div>
  );
};

export default SmallSingleRequest;
