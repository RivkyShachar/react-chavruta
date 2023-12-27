import React, { useState } from 'react';

const Topics = () => {
  const topicsList = [
    "Torah Study",
    "Talmudic Studies",
    "Jewish History",
    "Jewish Philosophy",
    "Halakhah (Jewish Law)",
    "Kabbalah",
    "Hebrew Language",
    "Jewish Ethics",
    "Jewish Literature",
    "Rabbinic Literature",
    "Jewish Rituals and Traditions",
    "Jewish Holidays",
    "Zionism",
    "Holocaust Studies",
    "Jewish Art and Culture",
    "Comparative Religion",
    "Interfaith Dialogue",
    "Jewish Music",
    "Jewish Feminism",
    "Modern Jewish Thought"
  ];

  const [selectedTopics, setSelectedTopics] = useState([]);

  const handleButtonClick = (topic) => {
    if (selectedTopics.includes(topic)) {
      // Remove the topic if already selected
      setSelectedTopics(selectedTopics.filter((selectedTopic) => selectedTopic !== topic));
    } else {
      // Add the topic if not selected
      setSelectedTopics([...selectedTopics, topic]);
    }
  };

  return (
    <div className='col-8 border'>
      <div className='container'>
          <div className=' ms-5 mt-5'>
            <h2 className="mb-5">We would like to know the topics that you are interested in</h2>
            <div>
              {topicsList.map((topic, index) => (
                <button
                  key={index}
                  className={`btn ${selectedTopics.includes(topic) ? 'btn-secondary' : 'btn-warning'} m-2`}
                  onClick={() => handleButtonClick(topic)}
                >
                  {topic}
                </button>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topics;
