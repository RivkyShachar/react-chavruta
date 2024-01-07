import React from 'react'
import  UserProfileBar from './userProfileBar'
// import RequestList from './requestList'
// import OtherUserRequestList from './otherUserRequestList';
import OtherUserRequestList1 from './otherUserRequestList1';
import FilterRequestButtns from './filterRequestButtns'

const UserProfile = () => {

  return (
    <div>
      <UserProfileBar/>
      <FilterRequestButtns/>
      <OtherUserRequestList1/>
    </div>
  )
}

export default UserProfile