import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SmallSingleRequest from './smallSingleRequest';
import { API_URL, doApiGet } from '../../services/apiService';
import { useParams } from 'react-router-dom';

// Replace this with your actual API endpoint
// Fake list of requests
const fakeRequests = [
  { userId: '658d6184cb5d2dc16080157e', _id: 1, userName: 'John Doe', subject: 'Meeting Request', description: 'Lorem ipsum dolor sit amet.', startDate: '2023-01-15' },
  { userId: '658d6184cb5d2dc16080157e',_id: 2, userName: 'Jane Doe', subject: 'Collaboration Proposal', description: 'Consectetur adipiscing elit.', startDate: '2023-01-20' },
  { _id: 3, userName: 'Bob Smith', subject: 'Project Discussion', description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', startDate: '2023-01-25' },
];





function RequestList() {
  const [singleRequest, setSingleRequest] = useState({});
  const { idSingle1 } = useParams();
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = API_URL + `/studyRequest/requestsList`;
        const response = await doApiGet(url, 'GET');
        console.log(response);
        if (response.status === 200) {
          setSingleRequest(response.data.data);
        }
      } catch (error) {
      }
    };
  
    fetchData(); // Call the async function immediately
    // Empty dependency array means the effect runs once after the initial render
  }, []);
  
 

  return (
    <div className='container'>
      <h2 className='mb-4'>Request List</h2>
      <div className='row'>
        <SmallSingleRequest requests={singleRequest} />
      </div>
    </div>
  );
}




export default RequestList;
