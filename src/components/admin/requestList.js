import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { API_URL, doApiGet } from '../../services/apiService';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchValueName } from '../../redux/featchers/searchSlice';
import SmallSingleRequest from './smallSingleRequest'
const UsersListAdmin = () => {
    const [requestList, setRequestList] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = API_URL + '/studyRequests/requestsList';
                const response = await doApiGet(url, 'GET');
                if (response.status === 200) {
                    setRequestList([...response.data.data]);
                    console.log("re", requestList);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

  
    
    return (
        <div className='container'>
            <h2 className='mb-4'>Request List</h2>
            <div className='row'>
                <SmallSingleRequest requests={requestList} />
            </div>
        </div>
    );
};

export default UsersListAdmin;
