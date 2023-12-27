import React, { useState } from 'react';


const SingleRangeQ = ({ title }) => {
    const [selectedNumber, setSelectedNumber] = useState(null);
    const handleNumberSelection = (number) => {
        setSelectedNumber(number);
    };

    return (
        <div>
            <h4>{title}</h4>
            <div>
                {[1, 2, 3, 4, 5].map((number) => (
                    <button
                        key={number}
                        className={`btn ${selectedNumber === number ? 'btn-primary' : 'btn-outline-primary'}`}
                        onClick={() => handleNumberSelection(number)}
                    >
                        {number}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default SingleRangeQ;

