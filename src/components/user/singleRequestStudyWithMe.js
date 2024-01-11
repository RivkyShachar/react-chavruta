import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FullRequestDetails from './singleRequest';
import UserList from './userList';
import { useSelector } from 'react-redux';
import { API_URL, doApiRequest } from '../../services/apiService';
import {formatDate} from '../../utill/dateFormat'
import translate from '../../utill/translator';

const SingleRequestStudyWithMe = ({ requests }) => {
    const [isCardVisible, setIsCardVisible] = useState(null);
    const [selectedRequest, setSelectedRequest] = useState(null);
    const [maor, setMaor] = useState(true);
    const searchV = useSelector((myStore) => myStore.searchSlice.searchValue);
    const language = useSelector((myStore) => myStore.languageSlice.language);


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
            window.location.reload();

        } catch (error) {
            console.error("error", error);
        }
    };

    const clickNo = async (request) => {
        try {
            setMaor(false);
            setIsCardVisible(false);
            console.log(request);
            setSelectedRequest(request);
            setIsCardVisible(request);
            const url = API_URL + `/event/markNo/${request._id}`;
            const data = await doApiRequest(url, "POST");
            if (data.status === 200) {
                console.log("no");
            }
            setIsCardVisible(true);
            setSelectedRequest(null);
            setIsCardVisible(null);
        } catch (error) {
            console.error("error", error);
        }
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
                                        <p className="card-text">{translate('post.topics', language)}: {request.topics.join(', ')}</p>
                                        <p className="card-text">{translate('post.preferredLanguages', language)}: {request.preferredLanguages.join(', ')}</p>
                                        <p className="card-text">{translate('post.levelOfStudy', language)}: {request.preferredLanguages}</p>
                                        <p className="card-text">{translate('post.state', language)}: {request.state}</p>
                                        <p className="card-text">{translate('post.startDate', language)}: {formatDate(request.startDateAndTime, language)}</p>
                                        <p className="card-text">{translate('post.studyDuration', language)}: {request.studyDuration.min} - {request.studyDuration.max} {translate('general.minutes', language)} </p>
                                        <p className="card-text">{translate('post.description', language)}: {request.description}</p>
                                    </Link>
                                </div>
                                <Link
                                 onClick={() => handleRequestClick1(request)}
                                 className="request-link"
                                >
                                <div className='col-6'>
                                    <button className=" yaelu btn btn-info rounded-circle request-link" >{request.matchesList.length}</button>
                                </div>
                                </Link>
                            </div>
                        </div>
                        <div className='col-6 d-flex align-items-center justify-content-center flex-column'>
                            <button className="btn border-success border-2 mb-2" onClick={() => clickYes(request)}>
                                Ready to study
                            </button>
                            <button className="btn btn-danger" onClick={() => clickNo(request)}>
                                No
                            </button>
                        </div>
                    </div>
                </div>
            ))}
            {isCardVisible && <UserList selectedRequest={isCardVisible} onClose={handleCloseDetails1} />}
            {maor && <FullRequestDetails selectedRequest={selectedRequest} onClose={handleCloseDetails} />}

        </div>
    );
};

export default SingleRequestStudyWithMe;
