import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { API_URL, doApiGet } from '../../services/apiService';
import { setSearchValueName } from '../../redux/featchers/searchSlice';
import SmallSingleRequest from '../user/smallSingleRequest'
import SingleRequestStudyWithMe from '../user/singleRequestStudyWithMe'
import SingleRequestMyProfile from '../user/singleRequestMyProfile'
import FilterBarHome from './filterBarHome'
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
                const response = await doApiGet(url, 'GET');
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

                            <SmallSingleRequest requests={requestList} />
                        )}
                    </div>
        
        </div>
    );
};

export default OtherUserRequestList;
