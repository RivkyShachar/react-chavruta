import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { API_URL, doApiMethod, doApiGet, TOKEN_NAME } from '../../services/apiService';

const UserList = ({ selectedRequest, onClose }) => {
    const userRole = useSelector(store => store.authSlice.userRole);
    let filteredUserList = [{ firstName: "yaeli", lastName: "globerman", _id: "1" }, { firstName: "yaeli", lastName: "globerman" }, { firstName: "yaeli", lastName: "globerman" }]

    const [userList, setUserList] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        if (!selectedRequest) {
            return; // Don't fetch data if no request is selected
        }

        const fetchData = async () => {
            try {
                const url = API_URL + `/studyRequests/matchUsers/${selectedRequest._id}`;
                console.log(url);
                const response = await doApiGet(url, 'GET');
                console.log("response", response);
                if (response.status === 200) {
                    setUserList([...response.data.data]);
                }
                console.log("userList", userList);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);


    if (!selectedRequest) {
        return null; // Don't render anything if no request is selected
    }
    const clickYesUser = async (user) => {
        try {
            alert("clicked yes");
            const url = API_URL + `/event/finalizeRequest/${user._id}/${selectedRequest._id}/`;

            const data = await doApiMethod(url, "POST");
            if (data.status === 200) {
                console.log("matched ");
            }
        } catch (error) {
            console.error("error", error);
        }
    };
    const clickNo = async (_data) => {
        try {
            alert("clicked no");
            console.log(selectedRequest);
            const url = API_URL + `/event/markNo/${selectedRequest._id}`;
            const data = await doApiMethod(url, "POST");
            if (data.status === 200) {
                // nav("/")
                console.log("no");
            }
        } catch (error) {
            console.error("error", error);
        }
    };

    return (
        <div className="modal-overlay">
            <div className="modal-container">
                <div className="container mt-4 col-12 ">
                    <h2 className="mb-4">User List</h2>
                    <ul className="list-group">
                        {userList.map((user) => (
                            <div key={user._id} className="d-flex justify-content-between align-items-center mb-1">
                                <Link
                                    to={`/user/singleUser/${user._id}`} // Adjust the route as needed
                                    className="list-group-item list-group-item-action"
                                >
                                    {user.firstName} {user.lastName}
                                </Link>
                                <button className="btn border-success border-2 ms-5 me-2" onClick={() => clickYesUser(user)}>
                                    yes
                                </button>
                                <button className="btn btn-danger" onClick={() => clickNo(user)}>
                                    No
                                </button>
                            </div>
                        ))}
                    </ul>
                </div>
                <div className="d-flex justify-content-between mt-3">
                    <button className="btn btn-danger" onClick={onClose}>
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UserList;
