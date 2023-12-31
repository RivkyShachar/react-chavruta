import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SmallSingleRequest from './smallSingleRequest';
// Replace this with your actual API endpoint
const API_URL = 'https://api.example.com';
// Fake list of requests
const fakeRequests = [
  { _id: 1, userName: 'John Doe', subject: 'Meeting Request', description: 'Lorem ipsum dolor sit amet.', startDate: '2023-01-15' },
  { _id: 2, userName: 'Jane Doe', subject: 'Collaboration Proposal', description: 'Consectetur adipiscing elit.', startDate: '2023-01-20' },
  { _id: 3, userName: 'Bob Smith', subject: 'Project Discussion', description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', startDate: '2023-01-25' },
];

function RequestList() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    // Simulating fetching data from the API
    setRequests(fakeRequests);
  }, []);

  return (
    <div className='container'>
      <h2 className='mb-4'>Request List</h2>
      <div className='row'>
        <SmallSingleRequest requests={requests} />
      </div>
    </div>
  );
}




export default RequestList;
