import React, { useState } from 'react';
import OtherUserRequestList1 from './otherUserRequestList1';

const FilterRequestButtns = () => {
  const [filterState, setFilterState] = useState("close");

  const handleButtonClick = (filterValue) => {
    setFilterState(filterValue);
  };

  return (
    <div className='container'>
      <button className='btn btn-outline-primary mx-2' onClick={() => handleButtonClick("open")}>Open</button>
      <button className='btn btn-outline-success mx-2' onClick={() => handleButtonClick("close")}>Close</button>
      <button className='btn btn-outline-secondary mx-2' onClick={() => handleButtonClick("done")}>Done</button>
      <button className='btn btn-outline-dark mx-2' onClick={() => handleButtonClick("past")}>Past</button>

      <OtherUserRequestList1 state={filterState} />
    </div>
  );
};

export default FilterRequestButtns;
