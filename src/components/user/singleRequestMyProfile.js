import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FullRequestDetails from './singleRequest';
import UserList from './userList';
import { useSelector } from 'react-redux';
import { API_URL, doApiRequest } from '../../services/apiService';
import { useNavigate } from 'react-router-dom';
import { formatDate } from '../../utill/dateFormat'
import translate from '../../utill/translator';

const SingleRequestMyProfile = ({ requests }) => {
    const [isCardVisible, setIsCardVisible] = useState(null);
    const [selectedRequest, setSelectedRequest] = useState(null);
    // const [maor, setMaor] = useState(true);
    let maor = true;
    const searchV = useSelector((myStore) => myStore.searchSlice.searchValue);
    const language = useSelector((myStore) => myStore.languageSlice.language);

    const nav = useNavigate();



    const handleRequestClick = (request) => {
        setSelectedRequest(request);

    };
    const handleRequestClick1 = (request) => {
        setIsCardVisible(request);
    };
    const handleRequestClickSingleUser = (request) => {

        nav(`/user/singleUser/${request.finalChavruta._id}`, { replace: true })

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
            window.location.reload();

        } catch (error) {
            console.error("error", error);
        }
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

    const clickCancle = async (request) => {
        try {
            const url = API_URL + `/studyRequests/cancleMeeting/${request._id}`;
            const data = await doApiRequest(url, "PUT");
            if (data.status === 201) {

                window.location.reload();
                console.log("cancled");
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
                    <div className={`card ${request.state === 'open' ? 'border-success border-5' :
                        request.state === 'close' ? 'bg-info' :
                            request.state === 'done' ? 'bg-secondary' : 'bg-warning'
                        }`}>                        <div className="card-body">
                            <div className='row'>
                                <div className=' col-6'>
                                    <Link
                                        onClick={() => handleRequestClick(request)}
                                        className="request-link"
                                    >
                                        <p className="card-text">{translate('post.topics', language)}: {request.topics.join(', ')}</p>
                                        <p className="card-text">{translate('post.preferredLanguages', language)}: {request.preferredLanguages.join(', ')}</p>
                                        <p className="card-text">{translate('post.levelOfStudy', language)}: {request.preferredLanguages}</p>
                                        <p className="card-text">{translate('post.state', language)}: {request.state}</p>
                                        <p className="card-text">{translate('post.startDate', language)}: {formatDate(request.startDateAndTime, language)}</p>
                                        <p className="card-text">{translate('post.studyDuration', language)}: {request.studyDuration.min} - {request.studyDuration.max} {translate('general.minutes', language)} </p>
                                        <p className="card-text">{translate('post.description', language)}: {request.description}</p>
                                    </Link>
                                </div>
                                {(request.state === "open" && request.matchesList.length !== 0) &&

                                    <div className='col-3'>
                                        <button className="  btn btn-info rounded-circle request-link" onClick={() => handleRequestClick1(request)}
                                        >{request.matchesList.length}</button>
                                    </div>}
                                {
                                    request.state === "close" &&

                                    <div className='col-3'>
                                        <button
                                            className="btn  request-link"
                                            onClick={() => handleRequestClickSingleUser(request)}
                                        >
                                            <img
                                                src={request.finalChavruta.profilePic}
                                                alt="Chavruta Profile"
                                                style={{
                                                    width: '80px', // adjust the width and height as needed
                                                    height: '80px',
                                                    borderRadius: '50%', // this makes it a rounded circle
                                                }}
                                            />
                                        </button>

                                    </div>}
                            </div>
                        </div>
                        {(request.state === "open" || request.state === "done") &&
                            <div className='col-6 d-flex align-items-center justify-content-center flex-column'>
                                <button className="btn border-info border-2 mb-2" onClick={() => clickYes(request)}>
                                    Update
                                </button>
                                <button className="btn border-danger border-2" onClick={() => clickDelete(request)}>
                                    Delete
                                </button>
                            </div>}
                        {request.state === "close" &&
                            <div className='col-6 d-flex align-items-center justify-content-center flex-column'>
                                <h3>The meeting start in </h3>
                                <button className="btn border-info border-2 mb-2" >
                                    {calculateCountdown(request.startDateAndTime)}
                                </button>
                                <button className="btn border-danger border-2" onClick={() => clickCancle(request)}>
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
