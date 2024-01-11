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
      <button className='btn btn-outline-primary mx-2' onClick={() => handleButtonClick("open")}>{translate('post.open', language)}</button>
      <button className='btn btn-outline-success mx-2' onClick={() => handleButtonClick("close")}>{translate('post.close', language)}</button>
      <button className='btn btn-outline-secondary mx-2' onClick={() => handleButtonClick("done")}>{translate('post.done', language)}</button>
      <button className='btn btn-outline-dark mx-2' onClick={() => handleButtonClick("past")}>{translate('post.past', language)}</button>

      <OtherUserRequestList1 state={filterState} />
    </div>
  );
};

export default FilterRequestButtns;
