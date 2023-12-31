import React, { useState } from 'react'
import { API_URL, doApiGet, doApiMethodSignUpLogin, TOKEN_NAME } from '../../services/apiService';
import { verifyToken } from '../../services/apiService';


function EditUser() {
    const [singleUser, setSingleUser] = useState({});
    const handleEdit = () => {
        try{
            console.log(localStorage.getItem(TOKEN_NAME));
            //neet to get the token,sent it to the server to get the id 
            verifyToken(localStorage.getItem(TOKEN_NAME)).then(verifiedToken => {
                const { _id } = verifiedToken;
                fetchData(_id);
            })
        } catch(err){
            console.log(err);
        }
    }

    const fetchData = async (id) => {
        try {
            console.log("iddd",id);
            const url = API_URL + `/users/single/${id}`;
            const response = await doApiGet(url, 'GET');
            console.log(response);
            if (response.status === 200) {
                setSingleUser(response.data.data);
                console.log("response.data", response.data.data);
                console.log("singleuser", singleUser);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div>
            <button onClick={handleEdit}>edit</button>
            <div className="container mt-4 text-center">
                <h2 className="mb-4">User Information</h2>
                <div className="card" style={{ width: '18rem', margin: 'auto' }}>
                    <img src={singleUser.profilePic} className="card-img-top" alt="Profile" />
                    <div className="card-body">
                        <h5 className="card-title">{singleUser.firstName}</h5>
                        <p className="card-text">
                            <strong>Phone Number:</strong> {singleUser.lastName}<br />
                            <strong>Location:</strong> {singleUser.location}<br />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditUser