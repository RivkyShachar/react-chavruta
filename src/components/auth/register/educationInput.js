import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setEducationsInput } from "../../../redux/featchers/userSlice";
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight, FaCheck } from 'react-icons/fa';
import "../../../css/main.css";
import translate from "../../../utill/translator";

const EducationInput = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const [education, setEducation] = useState({ name: "", degree: "" });
  const [educations, setEducations] = useState([]);
  const language = useSelector((myStore) => myStore.languageSlice.language);


  const handleAddEducation = () => {
    setEducations([...educations, education]);
    setEducation({ name: "", degree: "" });
    console.log("educations", educations);
    dispatch(setEducationsInput({ educations: [...educations, education] }));
  };

  const handleEducationChange = (field, value) => {
    setEducation({ ...education, [field]: value });
  };

  const handleDeleteEducation = (index) => {
    const updatedEducations = [...educations];
    updatedEducations.splice(index, 1);
    setEducations(updatedEducations);
  };

  const handleContinueClick = () => {
    nav("/signUp/topics")
  }

  const handleBackClick = () => {
    nav("/signUp/loacaionInput")
  }


  return (
    <div className="d-flex justify-content-evenly mt-4 position-relative">
      <div className="page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins container-register">
        <div className="wrapper wrapper--w680">
          <div className="card card-4">
            <div className="card-body">
              <div className="row row-space">
                <h2 className="title label mb-0 ">{translate('register.educationTitle', language)}</h2>
                <div className="col-6">
                  <div className="education mt-3 input-group" >
                    <label className="label">{translate('register.education', language)}:</label>
                    <input
                      placeholder="School"
                      type="text"
                      className="input--style-4  col-lg-12 js-datepicker"
                      value={education.name}
                      onChange={(e) => handleEducationChange("name", e.target.value)}
                    />

                    <div className=" col-lg-12">
                      <select
                        className="input--style-4 form-select mt-2"
                        aria-label="Default select example"
                        defaultValue={education.degree}
                        onChange={(e) => handleEducationChange("degree", e.target.value)}
                      >
                        <option selected>Degree</option>
                        <option value="High School Diploma">High School Diploma</option>
                        <option value="Bachelor's Degree">Bachelor's Degree</option>
                        <option value="Master's Degree">Master's Degree</option>
                      </select>
                    </div>

                    <button
                      type="button"
                      className="btn-tl  btn-sm py-2 mt-2 topic-list col-lg-12"
                      onClick={handleAddEducation}
                    >
                      {translate('register.addEducation', language)}
                    </button>


                  </div>

                </div>

                {/* Display the list of education on the right side */}
                <div className="col-6 mt-3 bg-light   ">
                  <h3 className="list ">{translate('register.eduactionList', language)}</h3>
                  <ul className="list-group custom-list">
                    {educations.map((edu, index) => (
                      <li key={index} className="list-group-item my-1 ">
                        <div className="row">
                          <div className="">
                            <strong>{edu.name}</strong>
                            <br /> {edu.degree}
                          </div>
                          <div className="col-auto">
                            <button
                              type="button"
                              className="btn-outline-danger btn-sm"
                              onClick={() => handleDeleteEducation(index)}
                            >
                              X
                            </button>
                          </div>
                        </div>
                      </li>
                    ))}

                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="position-absolute top-50 start-0 translate-middle me-5 z-1">
        <button
          type="button"
          className=" btn-back"
          onClick={handleBackClick}
        >
          <FaArrowLeft />
        </button>
      </div>
      <div className="position-absolute top-50 start-100 translate-middle d-flex justify-content-center me-5">
        <button
          type="button"
          className="btn-continue"
          onClick={handleContinueClick}
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default EducationInput;
