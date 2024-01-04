import React from 'react'
import  UserProfileBar from './userProfileBar'
// import RequestList from './requestList'
import {  useSelector } from 'react-redux';
// import OtherUserRequestList from './otherUserRequestList';
import OtherUserRequestList1 from './otherUserRequestList1';

const UserProfile = () => {

  return (
    <div>
      <UserProfileBar/>
      {/* <OtherUserRequestList/> */}
      <OtherUserRequestList1/>
    </div>
  )
}

export default UserProfile