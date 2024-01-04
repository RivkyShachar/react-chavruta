import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FullRequestDetails from './singleRequest';
import UserList from './userList';
import { useSelector } from 'react-redux';
import { API_URL, doApiMethod } from '../../services/apiService';

const SingleRequestMyProfile = ({ requests }) => {
    const [isCardVisible, setIsCardVisible] = useState(null);
    const [selectedRequest, setSelectedRequest] = useState(null);
    const [maor, setMaor] = useState(true);
    const searchV = useSelector((myStore) => myStore.searchSlice.searchValue);


    const handleRequestClick = (request) => {
        setSelectedRequest(request);

    };
    const handleRequestClick1 = (request) => {
        setIsCardVisible(request);
    };

    const handleCloseDetails = () => {
        setSelectedRequest(null);
        // setIsCardVisible(null);
    };
    const handleCloseDetails1 = () => {
        // setSelectedRequest(null);
        setIsCardVisible(null);
    };


    const filteredRequestList = requests.filter((request) => {
        const topicsString = request.topics.join(' ');
        return topicsString.toLowerCase().includes(searchV.toLowerCase());
    });

    const clickYes = async (request) => {
        try {
            setSelectedRequest(request);
            setIsCardVisible(request);
        } catch (error) {
            console.error("error", error);
        }
    };

    const clickDelete = async (request) => {
        try {
            const url = API_URL + `/studyRequests/${request._id}`;
            const data = await doApiMethod(url, "DELETE");
            if (data.status === 204) {

                window.location.reload();
                console.log("deleted");
            }
        } catch (error) {
            console.error("error", error);
        }
    };
    const calculateCountdown = (startDateAndTime) => {
        const currentTime = new Date();
    
        console.log('startDateAndTime:', startDateAndTime);
        console.log('currentTime:', currentTime);
    
        const timeDifference = startDateAndTime - currentTime;
    
        if (isNaN(timeDifference)) {
            console.error('Invalid date objects or subtraction operation.');
            return 'Invalid date calculation';
        }
    
        if (timeDifference <= 0) {
            return 'Meeting has started';
        }
    
        // Calculate days, hours, minutes, and seconds
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
    
        return `${days}d ${hours}h ${minutes}m ${seconds}s`;
    };
    

    return (
        <div className="row">
            {filteredRequestList.map((request) => (
                <div key={request._id} className="col-md-4 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <div className='row'>
                                <div className=' col-6'>
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
                                    </Link>
                                </div>
                                {request.state === "open" &&

                                    <div className='col-3'>
                                        <button className="  btn btn-info rounded-circle request-link" onClick={() => handleRequestClick1(request)}
                                        >{request.matchesList.length}</button>
                                    </div>}
                                {
                                    request.state === "close" &&

                                    <div className='col-3'>
                                        <button className="  btn btn-warning rounded-circle request-link" onClick={() => handleRequestClick1(request)}
                                        >{request.finalChavruta.firstName}</button>
                                    </div>}
                            </div>
                        </div>
                        {request.state==="open" && 
                        <div className='col-6 d-flex align-items-center justify-content-center flex-column'>
                            <button className="btn border-info border-2 mb-2" onClick={() => clickYes(request)}>
                                Update
                            </button>
                            <button className="btn border-danger border-2" onClick={() => clickDelete(request)}>
                                Delete
                            </button>
                        </div>}
                        {request.state==="close" && 
                        <div className='col-6 d-flex align-items-center justify-content-center flex-column'>
                            <h2>The meeting start in </h2>
                            <button className="btn border-info border-2 mb-2" >
                            {calculateCountdown(request.startDateAndTime)}
                            </button>
                            <button className="btn border-danger border-2" onClick={() => clickDelete(request)}>
                                Cancle meeting
                            </button>
                        </div>}

                    </div>
                </div>
            ))}
            {isCardVisible && <UserList selectedRequest={isCardVisible} onClose={handleCloseDetails1} />}
            {maor && <FullRequestDetails selectedRequest={selectedRequest} onClose={handleCloseDetails} />}

        </div>
    );
};

export default SingleRequestMyProfile;
