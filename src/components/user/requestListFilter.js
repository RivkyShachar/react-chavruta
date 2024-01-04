import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { API_URL, doApiRequest } from '../../services/apiService';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchValueName } from '../../redux/featchers/searchSlice';
import SmallSingleRequest from './smallSingleRequest';
import { useParams } from 'react-router-dom';

const RequestListFilter = () => {
  const [requestList, setRequestList] = useState([]);
  const dispatch = useDispatch();
  const { idSingleRequest } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = API_URL + '/studyRequests/requestsList';
        const response = await doApiRequest(url, 'GET');
        if (response.status === 200) {
          setRequestList([...response.data.data]);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log("re", requestList);

    // Filter the requestList based on idSingleRequest
    const filteredList = requestList.filter(request => request.userId._id === idSingleRequest);

    console.log("FilteredList", filteredList);

    // Update the state with the filtered list
    setRequestList(filteredList);
  }, [requestList, idSingleRequest]);

  return (
    <div className='container'>
      <h2 className='mb-4'>Request List</h2>
      <div className='row'>
        {/* Render SmallSingleRequest with the filtered list */}
        <SmallSingleRequest requests={requestList} />
      </div>
    </div>
  );
};

export default RequestListFilter;
