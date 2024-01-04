import React from 'react'
import RequestList from '../../components/user/requestList'
import UserProfileBar from '../../components/user/userProfileBar'

const UserProfile = () => {

  return (
    <div>
      <UserProfileBar/>
      <RequestList/>
    </div>
  )
}

export default UserProfile