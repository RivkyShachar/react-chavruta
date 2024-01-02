import React from 'react'
import  UserProfileBar from './userProfileBar'
import RequestList from './requestList'
import {  useSelector } from 'react-redux';

const UserProfile = () => {

  return (

    <div>
      <UserProfileBar/>
      <RequestList/>
    </div>
  )
}

export default UserProfile