import React from 'react'
import  UserProfileBar from './userProfileBar'
// import RequestList from './requestList'
import {  useSelector } from 'react-redux';
import OtherUserRequestList from './otherUserRequestList';

const UserProfile = () => {

  return (
    <div>
      <UserProfileBar/>
      <OtherUserRequestList/>
    </div>
  )
}

export default UserProfile