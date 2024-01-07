import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { API_URL, doApiRequest } from '../../services/apiService';
import SmallSingleRequest from '../user/smallSingleRequest'

import { useParams } from 'react-router-dom';

const OtherUserRequestList = ( {userId}) => {
    const [requestList, setRequestList] = useState([]);
    const [response1, setResponse1] = useState([]);
    let { parameter } = useParams();

    useEffect(() => {
        const fetchData = async () => {

            try {
                console.log('parameter',parameter);

                const url = API_URL + `/studyRequests/getUserRequests/${parameter}`;
                const response = await doApiRequest(url, 'GET');
                setResponse1(response);
                console.log("response",response);
                if (response.status === 200) {
                    setRequestList([...response.data.data]);
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
        
                    <div >
                        {requestList.length === 0 ? (
                            <h2>No requests found</h2>
                        ) : (
                            <SmallSingleRequest requests={requestList} type={"requestList"} />
                        )}
                    </div>
        
        </div>
    );
};

export default OtherUserRequestList;
