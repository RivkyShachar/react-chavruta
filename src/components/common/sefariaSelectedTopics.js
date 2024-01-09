// SefariaSelectedTopics.jsx
import React, { useState } from 'react';

function SefariaSelectedTopics({ selectedTopics, setSelectedTopics }) {
  const [isMouseOver, setIsMouseOver] = useState(null);

  const handleRemoveTopic = (topic) => {
    setSelectedTopics((prevTopics) => prevTopics.filter((t) => t !== topic));
  };

  return (
    <div>
      {selectedTopics.length > 0 && (
        <div className='row'>
          <div className='col-12 d-flex flex-wrap align-items-center'>
            {selectedTopics.map((topic, index) => (
              <button 
                key={index}
                className='btn btn-light d-flex align-items-center m-2'
                onMouseEnter={() => setIsMouseOver(topic)}
                onMouseLeave={() => setIsMouseOver(null)}
              >
                <span className='mr-2'>{topic}</span>
                {isMouseOver === topic && (
                  <button
                    className='btn btn-danger btn-sm'
                    onMouseEnter={() => console.log('Mouse on remove icon')}
                    onClick={() => handleRemoveTopic(topic)}
                  >
                    X
                  </button>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default SefariaSelectedTopics;
