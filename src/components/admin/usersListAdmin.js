import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { API_URL, doApiRequest } from '../../services/apiService';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchValueName } from '../../redux/featchers/searchSlice';

const UsersListAdmin = () => {
    const [userList, setUserList] = useState([]);
    const searchV = useSelector((myStore) => myStore.searchSlice.searchValue);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = API_URL + '/users/usersList';
                const response = await doApiRequest(url, 'GET');

                if (response.status === 200) {
                    setUserList([...response.data.data]);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    // Filter the user list based on the search value using a similar approach to your server-side search
    const filteredUserList = userList.filter((user) => {
        const fullName = `${user.firstName} ${user.lastName}`;
        return fullName.toLowerCase().includes(searchV.toLowerCase());
    });

    return (
        <div className="container mt-4 w-50">
            <h2 className="mb-4">User List</h2>
            <ul className="list-group">
                {filteredUserList.map((user) => (
                    <Link
                        key={user._id}
                        to={`/admin/singleUserAdmin/${user._id}`} // Adjust the route as needed
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
