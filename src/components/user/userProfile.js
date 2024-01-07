import React from 'react'
import  UserProfileBar from './userProfileBar'
// import RequestList from './requestList'
// import OtherUserRequestList from './otherUserRequestList';
import OtherUserRequestList1 from './otherUserRequestList1';
import "../../css/main.css";

const UserProfile = () => {

  return (
    <div>
      <UserProfileBar/>
      <OtherUserRequestList1/>
    </div>
  )
}

export default UserProfile