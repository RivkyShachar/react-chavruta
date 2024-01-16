import React, { useState } from 'react';
import OtherUserRequestList1 from './otherUserRequestList1';
import translate from '../../utill/translator';
import { useSelector } from 'react-redux';

const FilterRequestButtns = () => {
  const [filterState, setFilterState] = useState("close");
  const language = useSelector((myStore) => myStore.languageSlice.language);

  const handleButtonClick = (filterValue) => {
    setFilterState(filterValue);
  };

  return (
    <div className='container'>
      <button
        className='btn btn-outline mx-2'
        style={{ color: '#95d6ff', borderColor: '#95d6ff' }}
        onClick={() => handleButtonClick("open")}
      >
        {translate('post.open', language)}
      </button>
      <button className='btn btn-outline mx-2'
        style={{ color: '#9aff94', borderColor: '#9aff95' }}
        onClick={() => handleButtonClick("close")}
      >
        {translate('post.close', language)}
      </button>
      <button className='btn btn-outline mx-2'
        style={{ color: '#fffd94', borderColor: '#fffd94' }}
        onClick={() => handleButtonClick("done")}>{translate('post.done', language)}</button>
      <button className='btn btn-outline mx-2'
        style={{ color: '#ff9b94', borderColor: '#ff9b94' }}
        onClick={() => handleButtonClick("past")}>{translate('post.past', language)}</button>

      <OtherUserRequestList1 state={filterState} />
    </div>
  );
};

export default FilterRequestButtns;
