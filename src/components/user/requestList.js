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
    const [response1, setResponse1] = useState([]);
    const [requestListMarkedYes, setRequestListMarkedYes] = useState([]);
    const [requestListMarkedNo, setRequestListMarkedNo] = useState([]);
    const dispatch = useDispatch();
    let { parameter } = useParams();

    useEffect(() => {
        const fetchData = async () => {

            try {
                console.log("Parametrt", parameter);
                if (!parameter) {
                    parameter = "relevantRequestsList";
                }

                const url = API_URL + `/studyRequests/${parameter}`;
                const response = await doApiGet(url, 'GET');
                setResponse1(response);
                if (response.status === 200) {
                    setRequestList([...response.data.data]);
                }
                else if (response.status === 201) {
                    if (parameter === "marked") {
                        setRequestListMarkedYes([...response.data.data.markedYes]);
                        setRequestListMarkedNo([...response.data.data.markedNo]);
                    }
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
            {response1.status === 201 ? (
                <div className='row'>
                    {requestListMarkedYes.length === 0 ? (
                        <h2>No requests found</h2>
                    ) : (
                        <div>
                            <h2>Marked Yes</h2>
                            <SmallSingleRequest requests={requestListMarkedYes} />
                        </div>
                    )}
                    {requestListMarkedNo.length === 0 ? (
                        <h2>No requests found</h2>
                    ) : (
                        <div>
                            <h2>Marked No</h2>
                            <SmallSingleRequest requests={requestListMarkedNo}  />
                        </div>
                    )}

                </div>) : (
                <>

                    <div className='row'>
                        {requestList.length === 0 ? (
                            <h2>No requests found</h2>
                        ) : (
                            <SmallSingleRequest requests={requestList} />
                        )}
                    </div>
                </>
            )}
        </div>
    );
};

export default RequestList;
