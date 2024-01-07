import React from 'react'
import  UserProfileBar from './userProfileBar'

import FilterRequestButtns from './filterRequestButtns'
import "../../css/main.css";

const UserProfile = () => {

  return (
    <div>
      <UserProfileBar/>
      <FilterRequestButtns/>
    </div>
  )
}

export default UserProfile