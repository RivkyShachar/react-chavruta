import React from "react";
import { useSelector } from "react-redux";
import "../../css/main.css";
import "bootstrap/dist/css/bootstrap.min.css";

const UserProfileBar = () => {
  const user = useSelector((myStore) => myStore.userSlice.user);

  return (
    <div>
      {/* <div className='container col-10'>

                <div className='container'>
                    <div className='row'>
                        
                            <h5 className="card-title mb-3">{user.firstName} {user.lastName}</h5>
                            <p className="card-text text-right">
                                <strong>Gender:</strong> {user.gender === 0 ? 'Male' : 'Female'}<br />
                                <strong>Phone Number:</strong> {user.phoneNumber}<br />
                                <strong>Email:</strong> {user.email}<br />
                                <strong>Location:</strong> {user.location}<br />
                            </p>
                        
                  
                            <p className="card-text text-right">
                                <strong>Location:</strong> {user.location}<br />
                                <strong>timezone</strong> {user.timezone}<br />
                            </p>
                       
                            <strong>Educations:</strong>
                            {user.educations.map((education, index) => (
                                <div key={index}>
                                    <p>Degree: {education.degree}</p>
                                    <p>Name: {education.name}</p>
                                    <p>Start Date: {education.startDate}</p>
                                    {education.endDate && <p>End Date: {education.endDate}</p>}
                                    <hr className="my-3" />
                                </div>
                            ))}
                        
                            <strong>Topics:</strong>
                            <ul className="list-unstyled">
                                {user.topics.map((topic, index) => (
                                    <li key={index}>{topic}</li>
                                ))}
                            </ul>
                 
                            <img
                                src={user.profilePic}
                                style={{ maxWidth: '100%', height: 'auto' }}
                                alt="Your Alt Text"
                                className="mx-auto d-block"
                            />
                        </div>
                    </div>
                </div>
            </div> */}

      <div class="container">
        <div className="card">
        
            <div className="row row-space">
              <div className="col-2 w-40 m-5">
                <div className="col h-80">
                  <img
                    src={user.profilePic}
                    alt="profile-image"
                    className=" rounded-circle avatar-lg img-thumbnail p-5 w-100 h-75"
                  />

                  <div className="text-center p-3 h-10">
                    <h4 className="my-0">
                      {user.firstName} {user.lastName}
                    </h4>
                    <p class="text-muted">{user.email}</p>
                  </div>
                </div>
              </div>
              <div className="col-2  m-5 w-50">
                <div className="input-group">
                  <div class="col">
                    <div className="row row-space w-75">
                      <div className="col text-center">
                        <div className="w-30 p-2">
                          <strong>Topics</strong>
                          <p class="text-muted font-13 m-1">
                            <ul className="row col">
                              {user.topics.map((topic, index) => (
                                <li
                                  key={index}
                                  className="btn btn-tl topic-list "
                                >
                                  {topic}
                                </li>
                              ))}
                            </ul>
                          </p>
                        </div>
                      </div>
                      <div className="col text-center">
                        <div className="w-30 p-2">
                          <strong>Educations:</strong>
                          {user.educations.map((education, index) => (
                            <div key={index} className="btn">
                              <strong>{education.name}</strong>
                              <p>{education.degree}</p>

                              {/* <p>
                                {education.startDate}-
                                {education.endDate && (
                                  <p>{education.endDate}</p>
                                )}
                              </p> */}
                            </div>
                          ))}
                        </div>
                      </div>

                      <hr />
                      <div className="row row-space">
                        <div className="col-2 m-5 w-30">
                          <div className="input-group">
                            <p class="text-muted mb-2 font-13">
                              <strong>Mobile :</strong>
                              <span class="ms-2">{user.phoneNumber}</span>
                            </p>

                            <p class="text-muted mb-1 font-13">
                              <strong>Location :</strong>{" "}
                              <span class="ms-2">{user.location}</span>
                            </p>
                          </div>
                        </div>
                        <div className="col-2 m-5 w-30">
                          <div className="input-group">
                            <p class="text-muted mb-1 font-13">
                              <strong>Timezone :</strong>{" "}
                              <span class="ms-2">{user.timezone}</span>
                            </p>

                            <p class="text-muted mb-2 font-13">
                              <strong>Gender:</strong>{" "}
                              <span class="ms-2">
                                {user.gender === 0 ? "Male" : "Female"}
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    // </div>
  );
};

export default UserProfileBar;
