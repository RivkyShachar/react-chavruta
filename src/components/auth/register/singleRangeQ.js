import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setGenderRange, setEducationRange, setLocationRange, setFriendList } from '../../../redux/featchers/userSlice';

const SingleRangeQ = ({ title }) => {
    const dispatch = useDispatch();

    const [selectedNumber, setSelectedNumber] = useState(null);
    const handleNumberSelection = (number) => {
        setSelectedNumber(number);
        
        dispatch(setGenderRange({ educations: number.target.value }));

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

