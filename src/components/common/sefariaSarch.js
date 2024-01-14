// SefariaSearch.jsx
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { ListGroup, InputGroup, FormControl } from 'react-bootstrap';

function SefariaSearch({ selectedTopics, setSelectedTopics }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [options, setOptions] = useState([]);
  const [isMouseOver, setIsMouseOver] = useState(null);
  const dropdownRef = useRef(null);

  const handleInputChange = async (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    try {
      const response = await axios.get(`https://www.sefaria.org.il/api/name/${term}`);
      setOptions(response.data.completions || []);
    } catch (error) {
      console.error('Error fetching data from Sefaria API:', error);
    }
  };

  const handleAddTopic = (topic) => {
    if (!selectedTopics.includes(topic)) {
      setSelectedTopics((prevTopics) => [...prevTopics, topic]);
    }
  };

  const handleRemoveTopic = (topic) => {
    setSelectedTopics((prevTopics) => prevTopics.filter((t) => t !== topic));
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setSearchTerm('');
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div >
      <label className='my-2' >Choose Topics</label>
      <InputGroup className="mb-1">
        <FormControl
          placeholder="Type to search..."
          defaultValue={searchTerm}
          onChange={handleInputChange}
        />
      </InputGroup>
      {searchTerm && (
        <ListGroup ref={dropdownRef}>
          {options.map((option, index) => (
            <ListGroup.Item
              key={index}
              action
              onClick={() => handleAddTopic(option)}
              style={{ cursor: 'pointer' }}
            >
              {option}
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </div>
  );
}

export default SefariaSearch;
