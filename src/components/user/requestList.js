import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { API_URL, doApiRequest } from '../../services/apiService';
import SmallSingleRequest from '../user/smallSingleRequest';
import SingleRequestMyProfile from '../user/singleRequestMyProfile';
import FilterBarHome from './filterBarHome';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import translate from '../../utill/translator';

const oneYearFromToday = () => {
    const today = new Date();
    today.setFullYear(today.getFullYear() + 1);
    return today;
};

const RequestList = () => {
    const language = useSelector((myStore) => myStore.languageSlice.language);
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
    const [loading, setLoading] = useState(true);

    let { parameter } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);

                if (!parameter) {
                    parameter = "relevantRequestsList";
                }

                let url = API_URL + `/studyRequests/${parameter}/?reverse=yes`;

                // Apply filters
                url += `&minDuration=${filterMinDuration}&maxDuration=${filterMaxDuration}`;
                url += `&startDate=${new Date(filterStartDate).toISOString()}&endDate=${new Date(filterEndDate).toISOString()}`;
                url += `&lang=${filterLang}`;
                let method;
                if (parameter === "relevantRequestsList") {
                    method = "POST";
                } else {
                    method = "GET";
                }

                const response = await doApiRequest(url, method, { searchTopics });
                setResponse1(response);
                if (response.status === 200) {
                    setRequestList([...response.data.data]);
                } else if (response.status === 201) {
                    if (parameter === "marked") {
                        setRequestListMarkedYes([...response.data.data.markedYes]);
                        setRequestListMarkedNo([...response.data.data.markedNo]);
                        console.log("marked yes and no");
                        console.log(response.data.data.markedYes);
                        console.log(response.data.data.markedNo);
                    }
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
    }, [parameter, filterMinDuration, filterMaxDuration, filterStartDate, filterEndDate, searchTopics, filterLang]);

    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-lg-2 col-md-3 bg-light  ps-4  '>


                    <FilterBarHome
                        setMin={setFilterMinDuration}
                        setMax={setFilterMaxDuration}
                        setStartDate={setFilterStartDate}
                        setEndDate={setFilterEndDate}
                        searchTopics={searchTopics}
                        setSearchTopics={setSearchTopics}
                        setLang={setFilterLang}
                    />


                </div>
                <div className='col-lg-10  col-md-9 col-12'>
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
                        ) : parameter === "userProfile" ? (
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
                        ) : response1.status === 201 ? (
                            <div>
                                {requestListMarkedYes.length === 0 && requestListMarkedNo.length === 0 && (
                                    <div className='container  align-items-center mt-5'>
                                        <div className='text-center'>
                                            <h4 className='display-4'>No request marked</h4>
                                        </div>
                                    </div>
                                )}
                                {requestListMarkedYes.length !== 0 && (
                                    <div className='m-4'>
                                        <h2 style={{color:'#007ED2'}}>{translate('post.markedYes', language)}</h2>
                                        <SmallSingleRequest requests={requestListMarkedYes} type={"requestListMarkedYes"} />
                                    </div>
                                )}

                                {requestListMarkedNo.length !== 0 ? (
                                    <div className='m-4' >
                                        <h2 style={{color:'#007ED2'}}>{translate('post.markedNo', language)}</h2>
                                        <SmallSingleRequest requests={requestListMarkedNo} type={"requestListMarkedNo"} />
                                    </div>
                                ) : <p></p>}
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
            </div>
        </div>

    );
};

export default RequestList;
