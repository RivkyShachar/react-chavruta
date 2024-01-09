import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { API_URL, doApiRequest } from '../../services/apiService';
import { setSearchValueName } from '../../redux/featchers/searchSlice';
import SmallSingleRequest from '../user/smallSingleRequest'
import SingleRequestMyProfile from '../user/singleRequestMyProfile'
import FilterBarHome from './filterBarHome'
import { useParams } from 'react-router-dom';

const oneYearFromToday = () => {
    const today = new Date();
    today.setFullYear(today.getFullYear() + 1);
    return today;
};

const RequestList = () => {
    const [requestList, setRequestList] = useState([]);
    const [response1, setResponse1] = useState([]);
    const [requestListMarkedYes, setRequestListMarkedYes] = useState([]);
    const [requestListMarkedNo, setRequestListMarkedNo] = useState([]);
    const [filterMinDuration, setFilterMinDuration] = useState(5);
    const [filterMaxDuration, setFilterMaxDuration] = useState(40);
    const [filterStartDate, setFilterStartDate] = useState(Date.now());
    const [filterEndDate, setFilterEndDate] = useState(oneYearFromToday);
    const [searchTopics, setSearchTopics] = useState([]);
    const [filterLang, setFilterLang] = useState("All");

    let { parameter } = useParams();

    useEffect(() => {
        const fetchData = async () => {

            try {
                if (!parameter) {
                    parameter = "relevantRequestsList";
                }

                let url = API_URL + `/studyRequests/${parameter}/?reverse=yes`;

                // Apply filters
                url += `&minDuration=${filterMinDuration}&maxDuration=${filterMaxDuration}`;
                url += `&startDate=${new Date(filterStartDate).toISOString()}&endDate=${new Date(filterEndDate).toISOString()}`;
                url += `&lang=${filterLang}`;
                let method;
                if(parameter==="relevantRequestsList"){
                    method="POST"
                }
                else{
                    method = "GET"
                }

                const response = await doApiRequest(url, method, {searchTopics});
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
    }, [parameter, filterMinDuration, filterMaxDuration, filterStartDate, filterEndDate, searchTopics, filterLang]);


    console.log("respon", response1);
    return (
        <div className='container-fluid'>
            <FilterBarHome
                setMin={setFilterMinDuration}
                setMax={setFilterMaxDuration}
                setStartDate={setFilterStartDate}
                setEndDate={setFilterEndDate}
                searchTopics={searchTopics}
                setSearchTopics={setSearchTopics}
                setLang={setFilterLang}
            />
            <div className='container'>
                {parameter === "userProfile" ? (
                    <div>
                        {requestList.length === 0 ? (
                            <div className='container  align-items-center mt-5'>
                                <div className='text-center'>
                                    <h4 className='display-4'>No requests</h4>
                                </div>
                            </div>) : (
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
                                <div className='container  align-items-center mt-5'>
                                    <div className='text-center'>
                                        <h4 className='display-4'>No requests</h4>
                                    </div>
                                </div>) : (
                                <SmallSingleRequest requests={requestList} type={"requestList"} />
                            )}
                        </div>
                    )}
            </div>

        </div>
    );
};

export default RequestList;