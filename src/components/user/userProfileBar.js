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
    <div className="container mt-4 py-3 mb-3 " style={backgroundColor}>
      <div className="container  col-10">

        <div className="row  justify-content-center">
          <div className=" col-5 col-lg-2 col-md-5 m-1 ">
            <div className="row justify-content-center">
              <div className="col-12">
                <img
                  src={user.profilePic}
                  alt={user.firstName}
                  className="img-fluid rounded-3 profile-image me-3 mb-3"
                />
              </div>
              <div className="col-12 text-center">
                <button className="btn" onClick={handleEditProfileClick} style={{ backgroundColor: '#fffd94' }}>
                  {translate('user.edit', language)}
                </button>
              </div>
            </div>

          </div>

          <div className=" col-5 col-lg-2 col-md-5 m-1">
            <h2 className="card-title my-2">
              {user.firstName} {user.lastName}
            </h2>
            <p>{user.email}</p>
            <strong>{translate('user.gender', language)}:</strong> {user.gender === false ? `${translate('user.female', language)}` : `${translate('user.male', language)}`}
            <br />
            <strong>{translate('user.phoneNumber', language)}:</strong> {user.phoneNumber}
            <br />
            <strong>{translate('user.location', language)}:</strong> {user.location}
            <br />
            <strong>{translate('user.timezone', language)}:</strong> {user.timezone}          </div>
          <div className=" col-5 col-lg-2 col-md-5 mx-1 my-3">
            <strong>{translate('user.education', language)}:</strong>
            {user.educations.map((education, index) => (
              <div key={index}>
                <strong>{education.name}</strong>
                <p>{education.degree}</p>
              </div>
            ))}          </div>
          <div className=" col-5 col-lg-2 col-md-5 mx-1 my-3">
            <strong>{translate('user.topics', language)}:</strong>
            <ul className="list-unstyled">
              {user.topics.map((topic, index) => (
                <li key={index}>{topic}</li>
              ))}
            </ul>

          </div>


        </div>
      </div>

    </div>
  );
};

export default UserProfileBar;
