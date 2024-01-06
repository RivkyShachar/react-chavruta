import { Link } from 'react-router-dom';
import FullRequestDetails from './singleRequest';
import { useSelector } from 'react-redux';
import React, { useState } from 'react';
import { API_URL, doApiRequest } from '../../services/apiService';
import { useNavigate} from 'react-router-dom';
import UserList from './userList';
import UserHome from './userHome';
import SingleUser from './singleUser';


const SmallSingleRequest = ({ requests, type }) => {
  const [isCardVisible, setIsCardVisible] = useState(null);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [maor, setMaor] = useState(true);
  const searchV = useSelector((myStore) => myStore.searchSlice.searchValue);
  const nav = useNavigate();

  const handleRequestClick = (request) => {
    setSelectedRequest(request);
    setMaor(true);
  };

  const handleRequestClick1 = (request) => {
    setIsCardVisible(request);
};

  const handleCloseDetails = () => {
    setSelectedRequest(null);
  };

  const handleRequestClickSingleUser = (request) => {

    nav(`/user/singleUser/${request.finalChavruta._id}`,{ replace: true })

};
const handleCloseDetails1 = () => {
  setIsCardVisible(null);
};


  const filteredRequestList = requests.filter((request) => {
    const topicsString = request.topics.join(' '); // Convert the topics array to a string
    console.log("topicsString", topicsString);
    return topicsString.toLowerCase().includes(searchV.toLowerCase());
  });

  const clickYes = async (request) => {
    try {
      const url = API_URL + `/event/markYes/${request._id}`;
      const data = await doApiRequest(url, "POST");
      if (data.status === 200) {
        console.log("added to yes");
        window.location.reload()
      }
    } catch (error) {
      console.error("error", error);
    }
  };


  const clickNo = async (request) => {
    try {
      setMaor(false)
      setSelectedRequest(request);
      console.log(request);
      const url = API_URL + `/event/markNo/${request._id}`;
      const data = await doApiRequest(url, "POST");
      if (data.status === 200) {
        console.log("no");
        window.location.reload()
      }
      setMaor(true)
      setSelectedRequest(null);
    } catch (error) {
      console.error("error", error);
    }
  };

  return (
    <div className="row">
      {filteredRequestList.map((request) => (
        <div key={request._id} className="col-md-4 mb-4">
          <div className={`card ${request.state === 'open' ? 'border-success border-5' :
            request.state === 'close' ? 'bg-info' :
              request.state === 'done' ? 'bg-secondary' : 'bg-warning'
            }`}>
            <div className="card-body">
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
                {(type === "myRequests" && (request.state === "open" && request.matchesList.length != 0) &&
                  <div className='col-3'>
                    <button className="  btn btn-info rounded-circle request-link" onClick={() => handleRequestClick1(request)}
                    >{request.matchesList.length}</button>
                  </div>
                )}
                {(type === "requestListMarkedYes" || type === "requestList") && (

                  <button className="btn btn-danger" onClick={() => clickNo(request)}>No</button>
                )}
                {(type === "requestListMarkedNo" || type === "requestList") && (
                  <button className="btn btn-warning" onClick={() => clickYes(request)}>
                    YES
                  </button>
                )}

              </div>
            </div>
          </div>
        </div>
      ))}

      {maor && <FullRequestDetails selectedRequest={selectedRequest} typeList={type} onClose={handleCloseDetails} />}
      {isCardVisible && <UserList selectedRequest={isCardVisible} onClose={handleCloseDetails1} />}
    </div>
  );
};

export default SmallSingleRequest;
