import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { ListGroup, InputGroup, FormControl } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import translate from '../../utill/translator';

function Sefaria({selectedTopics, setSelectedTopics}) {
  const language = useSelector((myStore) => myStore.languageSlice.language);
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
    <div className='row'>
      <div className='col-6 text-start'>
      <h5>{translate('post.chooseTopics', language)}</h5>
        <InputGroup className="mb-3">
          <FormControl
            placeholder= {translate('post.typeSearch', language)}
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
      <div className='col-6'>
        {selectedTopics.length > 0 && (
          <div>
            <h5>{translate('post.selectedTopics', language)}:</h5>
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
                    <button
                      className='btn btn-danger'
                      style={{ fontSize: '6px' }}
                      onMouseEnter={() => console.log('Mouse on remove icon')}
                      onClick={() => handleRemoveTopic(topic)}
                    >
                      X
                    </button>

                  )}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </div>
        )}
      </div>
    </div>
  );
}

export default Sefaria;
