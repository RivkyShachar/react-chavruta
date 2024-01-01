import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { API_URL, doApiGet } from '../../services/apiService';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchValueName } from '../../redux/featchers/searchSlice';

const UsersListAdmin = () => {
    const [requestList, setRequestList] = useState([]);
    const searchV = useSelector((myStore) => myStore.searchSlice.searchValue);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = API_URL + '/studyRequests/requestsList';
                const response = await doApiGet(url, 'GET');

                if (response.status === 200) {
                    setRequestList([...response.data.data]);
                    console.log("re",requestList);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    // Filter the user list based on the search value using a similar approach to your server-side search
    const filteredrequestList = requestList.filter((user) => {
        const fullName = `${user.firstName} ${user.lastName}`;
        return fullName.toLowerCase().includes(searchV.toLowerCase());
    });

    return (
        <div className="container mt-4 w-50">
            <h2 className="mb-4">Request list</h2>
            <ul className="list-group">
                {filteredrequestList.map((user) => (
                    <Link
                        key={user._id}
                        className="list-group-item list-group-item-action"
                        onClick={() => dispatch(setSearchValueName({ searchValue: '' }))} // Clear the search value when clicking on a user
                    >
                        {user.firstName} {user.lastName}
                    </Link>
                ))}
            </ul>
        </div>
    );
};

export default UsersListAdmin;
