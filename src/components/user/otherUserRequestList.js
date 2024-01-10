import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { API_URL, doApiRequest } from '../../services/apiService';
import SmallSingleRequest from '../user/smallSingleRequest';
import { useParams } from 'react-router-dom';

const OtherUserRequestList = ({ userId }) => {
    const [requestList, setRequestList] = useState([]);
    const [response1, setResponse1] = useState([]);
    const [loading, setLoading] = useState(true);
    let { parameter } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);

                console.log('parameter', parameter);

                const url = API_URL + `/studyRequests/getUserRequests/${parameter}`;
                const response = await doApiRequest(url, 'GET');
                setResponse1(response);
                console.log("response", response);
                if (response.status === 200) {
                    setRequestList([...response.data.data]);
                } else if (response.status === 404) {
                    setRequestList([]);
                }

                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='container'>
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
                <div className='container  align-items-center mt-5'>
                    <div className='text-center'>
                        <h4 className='display-4'>No requests</h4>
                    </div>
                </div>
            ) : (
                <SmallSingleRequest requests={requestList} type={"requestList"} />
            )}
        </div>
    );
};

export default OtherUserRequestList;
