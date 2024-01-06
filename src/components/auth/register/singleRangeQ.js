import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setAgeRange, setEducationRange, setLocationRange, setFriendListRange } from '../../../redux/featchers/userSlice';

const SingleRangeQ = ({ title, questionNumber }) => {
    const dispatch = useDispatch();

    const [selectedNumber, setSelectedNumber] = useState(null);
    const handleNumberSelection = (inputValue, questionNumber) => {
        setSelectedNumber(inputValue);
        switch (questionNumber) {
            case '1':
                dispatch(setAgeRange({ ageRange: inputValue }));
                break;
            case '2':
                dispatch(setEducationRange({ educationRange: inputValue }));
                break;
            case '3':
                dispatch(setLocationRange({ locationRange: inputValue }));
                break;
            case '4':
                dispatch(setFriendListRange({ friendListRange: inputValue }));
                break;
            default:;
        }
        console.log("update", inputValue, questionNumber);

        // dispatch(setAgeRange({ educations: inputValue }));
    };


 


    return (
        <div>
            <h4>{title}</h4>
            <div className="row" >
                {[1, 2, 3, 4, 5].map((number) => (
                    <button type='button'
                        key={number}
                        className={`btn ${selectedNumber === number ? 'btn topic-list-2' : 'btn topic-list'} m-1 col-1 btn btn-tl`}
                        onClick={() => handleNumberSelection(number, questionNumber)}
                    >
                        {number}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default SingleRangeQ;

