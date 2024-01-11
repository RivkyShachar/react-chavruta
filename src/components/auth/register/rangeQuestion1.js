import React from 'react';
import SingleRangeQ from './singleRangeQ';
import "../../../css/main.css";
import translate from "../../../utill/translator";
import { useSelector } from 'react-redux';

const RangeQuestion = () => {
  const language = useSelector((myStore) => myStore.languageSlice.language);
  return (
    <div className="page-wrapper p-t-130 p-b-100 font-poppins container-register">
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
                /> <br/>
                <SingleRangeQ
                  title={translate('register.locationRangeQuestion', language)}
                  questionNumber="2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RangeQuestion;
