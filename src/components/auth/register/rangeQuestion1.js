import React from 'react';
import SingleRangeQ from './singleRangeQ';
const RangeQuestion = () => {

  return (
    <div className="page-wrapper p-t-130 p-b-100 font-poppins container-register">
      <div className="wrapper wrapper--w680">
        <div className="card card-4">
          <div className="card-body">
            <div className="row row-space">
              <div className="col m-2">
                <h2 className="title label ">
                  We would like to know the topics that you are interested
                </h2>
                <SingleRangeQ
                  title="How important is it to you to study with someone in your age range?"
                  questionNumber="1"
                /> <br/>
                <SingleRangeQ
                  title="How important is it to you to study with something from your area?"
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
