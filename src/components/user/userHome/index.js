import React, { useEffect } from 'react'
import RequestList from '../requestList'
import { useDispatch, useSelector } from 'react-redux';
import UsersList from '../usersList';

const UserHome = () => {


  const searchV = useSelector((myStore) => myStore.searchSlice.searchValue);


  useEffect(() => {
    console.log("searchV", searchV);
    // console.log("searchV",searchV1);
  }, [])

  return (
    <div>
      {searchV ? <UsersList /> :
        <RequestList />}
    </div>
  )
}

export default UserHome