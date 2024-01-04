import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { API_URL, doApiGet } from '../../services/apiService';
import SmallSingleRequest from './smallSingleRequest'
import { useParams } from 'react-router-dom';

const RequestListById = () => {
    const [requestList, setRequestList] = useState([]);
    const { idSingleRequest } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = API_URL + `/studyRequests/single/${idSingleRequest}`;
                const response = await doApiGet(url, 'GET');
                if (response.status === 200) {
                    setRequestList([...response.data.data]);   
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    useEffect(()=>{
        console.log("111111111111111111111111111", requestList)},[requestList]);

  
    
    return (
        <div className='container'>
            <h2 className='mb-4'>Request List</h2>
            <div className='row'>
                <SmallSingleRequest requests={requestList} />
            </div>
        </div>
    );
};

export default RequestListById;
