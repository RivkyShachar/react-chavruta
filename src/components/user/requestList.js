import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { API_URL, doApiRequest } from '../../services/apiService';
import { setSearchValueName } from '../../redux/featchers/searchSlice';
import SmallSingleRequest from '../user/smallSingleRequest'
import SingleRequestMyProfile from '../user/singleRequestMyProfile'
import FilterBarHome from './filterBarHome'
import { useParams } from 'react-router-dom';

const RequestList = () => {
    const [requestList, setRequestList] = useState([]);
    const [response1, setResponse1] = useState([]);
    const [requestListMarkedYes, setRequestListMarkedYes] = useState([]);
    const [requestListMarkedNo, setRequestListMarkedNo] = useState([]);
    let { parameter } = useParams();

    useEffect(() => {
        const fetchData = async () => {

            try {
                if (!parameter) {
                    parameter = "relevantRequestsList";
                }

                const url = API_URL + `/studyRequests/${parameter}/?reverse=yes`;
                const response = await doApiRequest(url, 'GET');
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


    console.log("respon", response1);
    return (
        <div className='container'>
            <FilterBarHome />
            <div>
                {parameter === "userProfile" ? (
                    <div>
                        {requestList.length === 0 ? (
                            <h2>No requests found</h2>
                        ) : (
                            <SingleRequestMyProfile requests={requestList} type={"requestList"} />
                        )}
                    </div>
                ) :

                    response1.status === 201 ? (
                        <div>
                            {requestListMarkedYes.length === 0 && requestListMarkedNo.length === 0 && (
                                <div className='container  align-items-center mt-5'>
                                    <div className='text-center'>
                                        <h4 className='display-4'>No request marked</h4>
                                    </div>
                                </div>
                            )}
                            {requestListMarkedYes.length != 0 &&

                                <div>
                                    <h2>Marked Yes</h2>
                                    <SmallSingleRequest requests={requestListMarkedYes} type={"requestListMarkedYes"} />
                                </div>
                            }

                            {requestListMarkedNo.length != 0 ? (

                                <div>
                                    <h2>Marked No</h2>
                                    <SmallSingleRequest requests={requestListMarkedNo} type={"requestListMarkedNo"} />
                                </div>
                            ) :
                                <p></p>}
                        </div>
                    ) : (
                        <div>
                            {requestList.length === 0 ? (
                                <h2>No requests found</h2>
                            ) : (
                                <SmallSingleRequest requests={requestList} type={"requestList"} />
                            )}
                        </div>
                    )}
            </div>

        </div>
    );
};

export default RequestList;