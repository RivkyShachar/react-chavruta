import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { API_URL, doApiRequest } from '../../services/apiService';
import translate from '../../utill/translator';
import { useSelector } from 'react-redux';

const UserList = ({ selectedRequest, onClose }) => {
    const [userList, setUserList] = useState([]);
    const language = useSelector((myStore) => myStore.languageSlice.language);

    useEffect(() => {
        if (!selectedRequest) {
            return; 
        }

        const fetchData = async () => {
            try {
                const url = API_URL + `/studyRequests/matchUsers/${selectedRequest._id}`;
                console.log(url);
                const response = await doApiRequest(url, 'GET');
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
        return null; 
    }
    const clickYesUser = async (user) => {
        console.log("yes user",user);
        try {
            const url = API_URL + `/event/finalizeRequest/${user._id}/${selectedRequest._id}/`;
            const data = await doApiRequest(url, "POST");
            if (data.status === 200) {
                onClose();
                alert("match created")
            }
        } catch (error) {
            console.error("error", error);
        }
    };
    const clickNo = async (user) => {
        try {
            const url = API_URL + `/event/markNoToUser/${selectedRequest._id}/${user._id}`;
            const data = await doApiRequest(url, "POST");
            if (data.status === 200) {
                onClose();
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
                                {translate('post.yes', language)}
                                </button>
                                <button className="btn btn-danger" onClick={() => clickNo(user)}>
                                {translate('post.no', language)}
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
