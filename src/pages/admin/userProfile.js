import React from 'react'
import SingleUserAdmin from '../../components/admin/singleUserAdmin'
import RequestListById from '../../components/admin/requestListById'
import RequestList from '../../components/admin/requestList'
import RequestListFilter from '../../components/admin/requestListFilter'

const UserProfile = () => {
    return (
        <div>
            <SingleUserAdmin />
            <RequestListFilter/>
            {/* <RequestList /> */}
        </div>
    )
}

export default UserProfile