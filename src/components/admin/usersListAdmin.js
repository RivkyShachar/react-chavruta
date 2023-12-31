import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { API_URL, doApiGet, TOKEN_NAME } from '../../services/apiService';
const UsersListAdmin = () => {
    
    const [userList, setUserList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = API_URL + '/users/usersList';
                const response = await doApiGet(url, 'GET');
                console.log(response);

                // Handle the response as needed
                if (response.status === 200) {
                    setUserList([...response.data.data]);
                    console.log("response.data",response.data.data);
                    console.log("userList",userList);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData(); // Call the async function immediately
        // Empty dependency array means the effect runs once after the initial render
    }, []);
  

   

    return (
        <div className="container mt-4 w-50">
            <h2 className="mb-4">User List</h2>
            <ul className="list-group">
                {userList.map(user => (
                    // Wrap the entire list item with Link
                    <Link key={user._id} to={`/singleUserAdmin/${user._id}`} className="list-group-item list-group-item-action">
                        {user.firstName} {user.lastName}
                    </Link>
                ))}
            </ul>
        </div>
    );
};

export default UsersListAdmin;
