import React from 'react';
import SingleRangeQ from './singleRangeQ';
const RangeQuestion = () => {

  return (
    <div className='col-8 border'>
      <div className='container'>
        <div className='ms-5 mt-5'>
          <h2 className="mb-5">We would like to know the topics that you are interested in</h2>
          <SingleRangeQ
            title="How important is it to you to study with someone in your age range?"
            questionNumber="1"
          />
           <SingleRangeQ
            title="How important is it to you to study with something from your area?"
            questionNumber="2"

          />          
        </div>
      </div>
    </div>
  );
};

export default RangeQuestion;
