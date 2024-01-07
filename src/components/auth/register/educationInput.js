import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setEducationsInput } from "../../../redux/featchers/userSlice";
import "../../../css/main.css";

const EducationInput = () => {
  const dispatch = useDispatch();
  const [education, setEducation] = useState({ name: "", degree: "" });
  const [educations, setEducations] = useState([]);

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

  return (
    <div className="page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins container-register">
      <div className="wrapper wrapper--w680">
        <div className="card card-4">
          <div className="card-body">
            <div className="row row-space">
              <div className="col-5 ">
                <h2 className="title label ">What is your education</h2>
                <div className="education mt-3 input-group">
                  <label className="label">Education:</label>
                  <input
                    placeholder="School"
                    type="text"
                    className="input--style-4 js-datepicker"
                    value={education.name}
                    onChange={(e) =>
                      handleEducationChange("name", e.target.value)
                    }
                  />
                  <select
                    className="input--style-4 education-select"
                    defaultValue={education.degree}
                    onChange={(e) =>
                      handleEducationChange("degree", e.target.value)
                    }
                  >
                    <option value="">Select Degree</option>
                    <option value="High School Diploma">
                      High School Diploma
                    </option>
                    <option value="Bachelor's Degree">Bachelor's Degree</option>
                    <option value="Master's Degree">Master's Degree</option>
                  </select>

                  <button
                    type="button"
                    className=" btn-tl btn topic-list  "
                    onClick={handleAddEducation}
                  >
                    Add Education
                  </button>
                </div>
              </div>

              {/* Display the list of education on the right side */}
              <div className="col-5 ms-4 input--style-4">
                <h2 className="list">Education List</h2>
                <ul className="list-group custom-list">
                  {educations.map((edu, index) => (
                    <li
                      key={index}
                      className="list-group-item custom-list-item"
                    >
                      <strong>{edu.name}</strong> - {edu.degree}
                      <br />
                      Start Date: {edu.startDate} - End Date: {edu.endDate}
                      <button
                        type="button"
                        className="btn btn-outline-danger btn-sm float-end"
                        onClick={() => handleDeleteEducation(index)}
                      >
                        Delete
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationInput;
