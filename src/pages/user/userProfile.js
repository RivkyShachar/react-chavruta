import React from 'react'
import SingleUser from '../../components/user/singleUser'
import RequestListById from '../../components/admin/requestListById'
import RequestList from '../../components/admin/requestList'
import RequestListFilter from '../../components/admin/requestListFilter'

const UserProfile = () => {
    return (
        <div>
            <SingleUser />
            <RequestListFilter/>
            {/* <RequestList /> */}
        </div>
    )
}

export default UserProfile