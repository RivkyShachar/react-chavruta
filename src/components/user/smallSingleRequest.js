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


  const filteredRequestList = requests.filter((request) => {
    const topicsString = request.topics.join(' '); // Convert the topics array to a string
    console.log("topicsString",topicsString);
    return topicsString.toLowerCase().includes(searchV.toLowerCase());
});


  return (
    <div className="row">
      {filteredRequestList.map((request) => (
        <div key={request._id} className="col-md-4 mb-4 ">
          <div className="card border-success border-5">
            <div className="card-body">
              <Link
                onClick={() => handleRequestClick(request)}
                className="request-link"
              >
                <p className="card-text">Topics: {request.topics.join(', ')}</p>
                <p className="card-text">Preferred Languages:: {request.preferredLanguages.join(', ')}</p>
                <p className="card-text">level Of Study: {request.preferredLanguages}</p>
                <p className="card-text">state: {request.state}</p>
                <p className="card-text">Start Date: {request.startDateAndTime}</p>
                <p className="card-text">Study Duration: {request.studyDuration.max - request.studyDuration.min} </p>
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
