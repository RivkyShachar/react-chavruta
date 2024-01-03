import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { API_URL, doApiGet } from '../../services/apiService';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchValueName } from '../../redux/featchers/searchSlice';
import SmallSingleRequest from '../admin/smallSingleRequest'
import FilterBarHome from './filterBarHome'
import { useParams } from 'react-router-dom';

const RequestList = () => {
    const [requestList, setRequestList] = useState([]);
    const dispatch = useDispatch();
    let { parameter } = useParams();

    useEffect(() => {
        const fetchData = async () => {

            try {
                if (!parameter){
                    parameter="relevantRequestsList";
                    console.log("Parametrt",parameter);
                }
                const url = API_URL + `/studyRequests/${parameter}`;
                const response = await doApiGet(url, 'GET');
                console.log(response);
                if (response.status === 200) {
                    setRequestList([...response.data.data]);
                    console.log("re", requestList);
                }
                else if (response.status === 404) {
                    setRequestList([]);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);



    return (
        <div className='container'>
            <FilterBarHome />
            <h2 className='mb-4'>Request List</h2>
            <div className='row'>
                {requestList.length === 0 ? (
                    <h2>No requests found</h2>
                ) : (
                    <SmallSingleRequest requests={requestList} />
                )}
            </div>
        </div>
    );
};

export default RequestList;
