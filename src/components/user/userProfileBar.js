import React from "react";
import { useSelector } from "react-redux";
import "../../css/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate, Link } from "react-router-dom";
import { formatDate } from "../../utill/dateFormat";

const UserProfileBar = () => {
  const nav = useNavigate();
  const user = useSelector((myStore) => myStore.userSlice.user);

  const handleEditProfileClick = () => {
    nav("/user/editProfile");
  };

  const backgroundColor = {
    backgroundColor: "#F6F6F6",
    border: "2px solid #e0e0e0",
  };

  return (
    <div className="container py-3 mb-3  " style={backgroundColor}>
      <div className="container col-10  ">
        <div className="container">
          <div className="row">
            <div className="col-3 w-75">
              <img
                src={user.profilePic}
                alt={user.firstName}
                className="d-block float-start rounded-3 profile-image me-3"
              />
              <h2 className="card-title">
                {user.firstName} {user.lastName}
              </h2>
              <p>{user.email}</p>
              <strong>Gender:</strong> {user.gender === false ? "Female" : "Male"}
              <br />
              <strong>Phone Number:</strong> {user.phoneNumber}
              <br />
              <strong>Location:</strong> {user.location}
              <br />
              <strong>Timezone:</strong> {user.timezone}
              <br />
            </div>

            <div className="col-3 mt-3">
              <strong>Educations:</strong>
              {user.educations.map((education, index) => (
                <div key={index}>
                  <strong>{education.name}</strong>
                  <p>{education.degree}</p>
                </div>
              ))}

              <strong>Topics:</strong>
              <ul className="list-unstyled">
                {user.topics.map((topic, index) => (
                  <li key={index}>{topic}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileBar;
