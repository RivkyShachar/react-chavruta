import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { API_URL, doApiGet, TOKEN_NAME } from '../../services/apiService';
import { setSearchValueName } from '../../redux/featchers/searchSlice';
import { useDispatch, useSelector } from 'react-redux';

const ProfileListImage = () => {
  const [profilePicList, setProfilePicList] = useState([]);
  const searchV = useSelector((myStore) => myStore.searchSlice.searchValue);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = API_URL + '/users/profileList';
        const response = await doApiGet(url, 'GET');

        // Handle the response as needed
        if (response.status === 200) {
          setProfilePicList([...response.data.data]);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const filteredProfilePicList = profilePicList.filter((user) => {
    const fullName = `${user.firstName} ${user.lastName}`;
    return fullName.toLowerCase().includes(searchV.toLowerCase());
  });

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Profile pic List</h2>
      <div className="row">
        {filteredProfilePicList.map(user => (
          <div key={user._id} className="col-2 m-4 border ">
            <Link to={`/singleUserAdmin/${user._id}`} className="list-group-item list-group-item-action"
              onClick={() => dispatch(setSearchValueName({ searchValue: '' }))} >
              <img src={user.profilePic} alt={user.firstName + ' ' + user.lastName} className="img-fluid" style={{ height: '100px' }} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileListImage;
