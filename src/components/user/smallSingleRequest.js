// SmallSingleRequest.jsx
import { Link } from 'react-router-dom';
import FullRequestDetails from './singleRequest';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { API_URL, doApiMethod, doApiGet, TOKEN_NAME } from '../../services/apiService';
import { verifyToken } from '../../services/apiService';

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
    console.log("topicsString", topicsString);
    return topicsString.toLowerCase().includes(searchV.toLowerCase());
  });

  const clickYes = async (_data) => {
    try {
      alert("clicked yes");
      const url = API_URL + `/event/markYes/${selectedRequest._id}`;
      const data = await doApiMethod(url, "POST");
      if(data.status===200){
        // nav("/")
        console.log("yes");
      }
    } catch (error) {
      console.error("error", error);
    }
  };
  const clickNo = async (_data) => {
    try {
      alert("clicked no");
      console.log(selectedRequest);
      const url = API_URL + `/event/markNo/${selectedRequest._id}`;
      const data = await doApiMethod(url, "POST");
      if(data.status===200){
        // nav("/")
        console.log("no");
      }
    } catch (error) {
      console.error("error", error);
    }
  };
  return (
    <div className="row">
      {filteredRequestList.map((request) => (
        <div key={request._id} className="col-md-4 mb-4">
          <div className={`card ${request.state === 'open' ? 'border-success border-5' :
              request.state === 'closed' ? 'bg-secondary' :
                request.state === 'done' ? 'bg-secondary border-info border-5' : 'bg-warning'
            }`}>            <div className="card-body">
              <Link
                onClick={() => handleRequestClick(request)}
                className="request-link"
              >
                <p className="card-text">Topics: {request.topics.join(', ')}</p>
                <p className="card-text">Preferred Languages: {request.preferredLanguages.join(', ')}</p>
                <p className="card-text">Level Of Study: {request.preferredLanguages}</p>
                <p className="card-text">State: {request.state}</p>
                <p className="card-text">Start Date: {request.startDateAndTime}</p>
                <p className="card-text">Study Duration: {request.studyDuration.max - request.studyDuration.min}</p>
                <p className="card-text">Description: {request.description}</p>
              </Link>
              <div className="d-flex justify-content-between mt-3">
                <button className="btn btn-warning" onClick={() => clickYes(selectedRequest)}>
                  YES
                </button>
                <button className="btn btn-danger" onClick={() => clickNo(selectedRequest)}>No</button>
              </div>
            </div>
          </div>
        </div>
      ))}

      <FullRequestDetails selectedRequest={selectedRequest} onClose={handleCloseDetails} />
    </div>
  );
};

export default SmallSingleRequest;
