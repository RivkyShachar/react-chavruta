import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setTopics } from '../../../redux/featchers/userSlice';
const Topics = () => {
  const topicsList = [
    "Tanakh",
    "Mishnha",
    "Talmud",
    "Midrash",
    "Halakhah",
    "Kabbalah",
    "Liturgy",
    "Jewish Thought",
    "Tosefta",
    "Chasidut",
    "Musar",
    "Reponsa",
    "Second Temple",
    "Reference",
  ];
  const topicsListHe = [
    `תנ"ך`,
    "משנה",
    "תלמוד",
    "מדרש",
    "הלכה",
    "קבלה",
    "סדר התפילה",
    "מחשבת ישראל",
    "תוספתא",
    "חסידות",
    "ספרי מוסר",
    `שו"ת`,
    "בית שני",
    "מילונים וספרי יעץ",
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
