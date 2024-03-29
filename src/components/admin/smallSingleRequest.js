import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FullRequestDetails from './singleRequest';
import { useSelector } from 'react-redux';
import { API_URL, doApiRequest } from '../../services/apiService';
import { formatDate } from '../../utill/dateFormat'
import translate from '../../utill/translator';

const SmallSingleRequest = ({ requests }) => {

  const [selectedRequest, setSelectedRequest] = useState(null);
  const [maor, setMaor] = useState(true);
  const searchV = useSelector((myStore) => myStore.searchSlice1.searchValue1);
  const language = useSelector((myStore) => myStore.languageSlice.language);

  const handleRequestClick = (request) => {
    setSelectedRequest(request);
  };

  const handleCloseDetails = () => {
    setSelectedRequest(null);
  };


  const filteredRequestList = requests.filter((request) => {
    const topicsString = request.topics.join(' '); // Convert the topics array to a string
    return topicsString.toLowerCase().includes(searchV.toLowerCase());
  });


  const clickYes = async (request) => {
    try {
      window.location.reload();
      setSelectedRequest(request);
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
          <div className="card">
            <div className="card-body">
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
            <div className="d-flex justify-content-between mt-3">
              <button className="btn btn-warning" onClick={() => clickYes(request)}>
              {translate('post.yes', language)}
              </button>
              <button className="btn btn-danger" onClick={() => clickNo(request)}>No</button>
            </div>
          </div>
        </div>
      ))}
      {maor && <FullRequestDetails selectedRequest={selectedRequest} onClose={handleCloseDetails} />}
    </div>
  );

};

export default SmallSingleRequest;
