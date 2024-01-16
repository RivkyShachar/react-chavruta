import React from "react";
import { useSelector } from "react-redux";
import "../../css/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import translate from "../../utill/translator";

const UserProfileBar = () => {
  const nav = useNavigate();
  const user = useSelector((myStore) => myStore.userSlice.user);
  const language = useSelector((myStore) => myStore.languageSlice.language);

  const handleEditProfileClick = () => {
    nav("/user/editProfile");
  };

  const backgroundColor = {
    backgroundColor: "#F6F6F6",
    border: "2px solid #95d6ff",
  };

  return (
    <div className="container mt-4 py-3 mb-3  " style={backgroundColor}>
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
              <strong>{translate('user.gender', language)}:</strong> {user.gender === false ? `${translate('user.female', language)}` : `${translate('user.male', language)}`}
              <br />
              <strong>{translate('user.phoneNumber', language)}:</strong> {user.phoneNumber}
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
              <button className="btn col-6 mx-auto" onClick={handleEditProfileClick} style={{ backgroundColor: '#fffd94' }}>
                {translate('user.edit', language)}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileBar;
