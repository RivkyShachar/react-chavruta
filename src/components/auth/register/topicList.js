import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setTopics } from '../../../redux/featchers/userSlice';
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
  const dispatch = useDispatch();


  const [selectedTopics, setSelectedTopics] = useState([]);

  const handleButtonClick = (topic) => {
    if (selectedTopics.includes(topic)) {
      setSelectedTopics(selectedTopics.filter((selectedTopic) => selectedTopic !== topic));

    } else {
      setSelectedTopics([...selectedTopics, topic]);
    }

  };

  useEffect(()=>{
    dispatch(setTopics({ topics: selectedTopics }));
  },[selectedTopics,dispatch])



  return (
    <div className="container-register">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="card card-4">
              <div className="card-body">
              <div className="col-2">
                <div className="input-group">
                <h2 className="title label">
                  Choose topics that you are interested
                    </h2>
                  </div>
                  </div>
                <div class="row">
                  {topicsList.map((topic, index) => (
                    <div className="col-md-4  ">
                      <button
                        type="button"
                        key={index}
                        className={`btn ${
                          selectedTopics.includes(topic)
                            ? "btn topic-list-2"
                            : "btn topic-list "
                        } m-1 btn btn-tl`}
                        
                        onClick={() => handleButtonClick(topic)}
                      >
                        {topic}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topics;
