import React from 'react';
import SingleRangeQ from './singleRangeQ';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight, FaCheck } from 'react-icons/fa';
import "../../../css/main.css";
import translate from "../../../utill/translator";
import { useSelector } from 'react-redux';

const RangeQuestion = () => {
  const language = useSelector((myStore) => myStore.languageSlice.language);
  const nav = useNavigate();
  const handleContinueClick = () => {
    nav("/signUp/rangeQ2")
  }

  const handleBackClick = () => {
    nav("/signUp/topics")
  }

  return (
    <div className="d-flex justify-content-evenly mt-4">
      <div className="page-wrapper p-t-130 p-b-100 font-poppins container-register position-relative">
        <div className="wrapper wrapper--w680">
          <div className="card card-4">
            <div className="card-body">
              <div className="row row-space">
                <div className="col m-2">
                  <h2 className="title label ">
                    {translate('register.topicsQuestion', language)}
                  </h2>
                  <SingleRangeQ
                    title={translate('register.ageRangeQuestion', language)}
                    questionNumber="1"
                  /> <br />
                  <SingleRangeQ
                    title={translate('register.locationRangeQuestion', language)}
                    questionNumber="2"
                  />
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
    </div>
  );
};

export default RangeQuestion;
