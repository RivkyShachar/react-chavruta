import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { API_URL, doApiRequest } from '../../services/apiService';
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

    useEffect(() => { console.log("re", requestList) }, [requestList]);



    return (
        <div className='container'>
            <h2 className='mb-4'>Request List</h2>
            <div className='row'>
                {requestList.length === 0 ? (
                    <div className='container  align-items-center mt-5'>
                        <div className='text-center'>
                            <h4 className='display-4'>No requests</h4>
                        </div>
                    </div>

                ) : (
                    <SmallSingleRequest requests={requestList} />
                )}
            </div>
        </div>
    );
};

export default UsersListAdmin;
