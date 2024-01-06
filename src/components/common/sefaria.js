import React, { useState } from 'react';
import axios from 'axios';
import { ListGroup, InputGroup, FormControl } from 'react-bootstrap';

function Sefaria() {
  const [searchTerm, setSearchTerm] = useState('');
  const [options, setOptions] = useState([]);
  const [selectedTopics, setSelectedTopics] = useState([]);
  const [isMouseOver, setIsMouseOver] = useState(null);

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

  return (
    <div>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Type to search..."
          value={searchTerm}
          onChange={handleInputChange}
        />
      </InputGroup>
      <ListGroup>
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
      <div>
        <h2>Selected Topics:</h2>
        <ListGroup>
          {selectedTopics.map((topic, index) => (
            <ListGroup.Item
              key={index}
              onMouseEnter={() => setIsMouseOver(topic)}
              onMouseLeave={() => setIsMouseOver(null)}
              style={{ cursor: 'pointer' }}
            >
              {topic}{' '}
              {isMouseOver === topic && (
                <span
                  style={{ marginLeft: '5px' }}
                  onMouseEnter={() => console.log('Mouse on remove icon')}
                  onClick={() => handleRemoveTopic(topic)}
                >
                  (remove)
                </span>
              )}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    </div>
  );
}

export default Sefaria;
