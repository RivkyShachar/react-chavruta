import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { API_URL, doApiRequest } from '../../services/apiService';
import { useDispatch } from 'react-redux';
import SmallSingleRequest from './smallSingleRequest';

const UsersListAdmin = () => {
    const [requestList, setRequestList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);

                const url = API_URL + '/studyRequests/requestsList';
                const response = await doApiRequest(url, 'GET');
                if (response.status === 200) {
                    setRequestList([...response.data.data]);
                }

                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        console.log("re", requestList);
    }, [requestList]);

    return (
        <div className='container'>
            <h2 className='mb-4'>Request List</h2>
            {loading ? (
                <div className='container align-items-center mt-5'>
                    <div className='text-center'>
                        <div className="d-flex align-items-center justify-content-center">
                            <div className="spinner-border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    </div>
                </div>
            ) : requestList.length === 0 ? (
                <div className='container align-items-center mt-5'>
                    <div className='text-center'>
                        <h4 className='display-4'>No requests</h4>
                    </div>
                </div>
            ) : (
                <div className='row'>
                    <SmallSingleRequest requests={requestList} />
                </div>
            )}
        </div>
    );
};

export default UsersListAdmin;
