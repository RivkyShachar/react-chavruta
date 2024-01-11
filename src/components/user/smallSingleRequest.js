import { Link } from 'react-router-dom';
import FullRequestDetails from './singleRequest';
import { useSelector } from 'react-redux';
import React, { useState } from 'react';
import { API_URL, doApiRequest } from '../../services/apiService';
import { useNavigate } from 'react-router-dom';
import UserList from './userList';
import UserHome from './userHome';
import SingleUser from './singleUser';
import { formatDate } from '../../utill/dateFormat'
import UsersList from './usersList'
import translate from '../../utill/translator';



const SmallSingleRequest = ({ requests, type, stateRequest }) => {
  const language = useSelector((myStore) => myStore.languageSlice.language);

  if (!stateRequest) {
    stateRequest = "open";
  }
  const [isCardVisible, setIsCardVisible] = useState(null);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [maor, setMaor] = useState(true);
  const nav = useNavigate();

  const closeDone = {
    // backgroundColor: '#ffcccc',
    border: '5px solid #ffcccc', // Add a 5px black border

  };
  const open = {
    // backgroundColor: '#ccffcc', // Replace with your actual pink color code
    // backgroundColor: '#ccffcc', // Replace with your actual pink color code
    border: '5px solid #ccffcc', // Add a 5px black border
  };

  // const open = {
  //   backgroundColor: '#ccffcc', // Replace with your actual pink color code
  // };
  const past = {
    // backgroundColor: '#e0e0e0', // Replace with your actual pink color code
    border: '5px solid #e0e0e0', // Add a 5px black border

    // backgroundColor: '#e0e0e0', // Replace with your actual pink color code
  };
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

  console.log("requests", requests);
  const handleRequestClickSingleUser = (request) => {

    nav(`/user/singleUser/${request.finalChavruta._id}`, { replace: true })

  };
  const handleCloseDetails1 = () => {
    setIsCardVisible(null);
    window.location.reload()
  };
  const clickDelete = async (request) => {
    try {
      const url = API_URL + `/studyRequests/${request._id}`;
      const data = await doApiRequest(url, "DELETE");
      if (data.status === 204) {

        window.location.reload();
        console.log("deleted");
      }
    } catch (error) {
      console.error("error", error);
    }
  };


  const filteredRequestList = requests.filter((request) => {
    const topicsString = request.topics.join(' '); // Convert the topics array to a string
    return (
      // topicsString.toLowerCase().includes(searchV.toLowerCase()) &&
      request.state === stateRequest
    );
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
  const getRequestClass = (state) => {
    switch (state) {
      case 'open':
        return 'border border-4 border-info';
      case 'close':
        return 'border border-4 border-success ';
      case 'done':
        return 'border border-4 border-secondary ';
      case 'past':
        return 'bg-secondary ';
      default:
        return '';
    }
  };
  return (
    <div className="row mt-4">
      {filteredRequestList.map((request) => (
        <div key={request._id} className={`col-md-4 mb-4 position-relative }`}>
          <div className="card d-flex flex-column h-100"
          //  style={
          //   request.state === 'open'
          //     ? open
          //     : request.state === 'close' || request.state === 'done'
          //       ? closeDone
          //       : past
          >

            <div className={`card-body ${getRequestClass(request.state)}`}>

              <Link
                onClick={() => handleRequestClick(request)}
                className="request-link"
              >
                <p className='card-text'><strong>{request.userId.firstName} {request.userId.lastName}</strong></p>
                <p className="card-text">{translate('post.topics', language)}: {request.topics.join(', ')}</p>
                <p className="card-text">{translate('post.preferredLanguages', language)}: {request.preferredLanguages.join(', ')}</p>
                <p className="card-text">{translate('post.state', language)}: {request.state}</p>
                <p className="card-text">{translate('post.startDate', language)}: {formatDate(request.startDateAndTime, language)}</p>
                <p className="card-text">{translate('post.studyDuration', language)}: {request.studyDuration.min} - {request.studyDuration.max} {translate('general.minutes', language)} </p>
                <p className="card-text">{translate('post.description', language)}: {request.description}</p>
              </Link>
              <div className="mt-auto">
                <div className="d-flex justify-content-center mt-5">
                  {(type === "requestListMarkedNo" || type === "requestList") && (
                    <button className="btn btn-outline-success mx-3" onClick={() => clickYes(request)}>
                      {translate('post.yes', language)}
                    </button>
                  )}

                  {(type === "requestListMarkedYes" || type === "requestList") && (
                    <button className="btn btn-outline-danger mx-3" onClick={() => clickNo(request)}>
                      {translate('post.no', language)}
                    </button>
                  )}
                </div>

              </div>




              {(type === "myRequests" && (request.state === "open" && request.matchesList.length !== 0) &&
                <div className='position-absolute top-0 end-0 mt-2 me-2'>
                  <button className=" btn-lightblue" onClick={() => handleRequestClick1(request)}>
                    {request.matchesList.length}
                  </button>
                </div>
              )}
              <div className="mt-auto">
                <div className="d-flex justify-content-center my-3">
                  {(type === "myRequests") &&
                    (request.zoomLink ?
                      <a className='btn btn-warning' href={request.zoomLink} target="_blank" rel="noopener noreferrer">
                        Start meeting
                      </a> :
                      (request.state === 'close') ?
                        <button className='btn btn-danger' onClick={() => clickDelete(request)}>Cancel meeting</button> :
                        <button className='btn btn-danger' onClick={() => clickDelete(request)}>Delete</button>
                    )
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      ))
        // )
      }

      {maor && <FullRequestDetails selectedRequest={selectedRequest} typeList={type} onClose={handleCloseDetails} />}
      {isCardVisible && <UserList selectedRequest={isCardVisible} onClose={handleCloseDetails1} />}
    </div>
  );
};

export default SmallSingleRequest;
