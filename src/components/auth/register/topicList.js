import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setTopics } from '../../../redux/featchers/userSlice';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight, FaCheck } from 'react-icons/fa';
import translate from "../../../utill/translator";
import "../../../css/main.css";

const Topics = () => {
  const language = useSelector((myStore) => myStore.languageSlice.language);
  const nav = useNavigate();
  const topicsListEn = [
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
  let topicsList = language === "en" ? [...topicsListEn] : [...topicsListHe];
  const dispatch = useDispatch();


  const [selectedTopics, setSelectedTopics] = useState([]);

  const handleButtonClick = (topic) => {
    if (selectedTopics.includes(topic)) {
      setSelectedTopics(selectedTopics.filter((selectedTopic) => selectedTopic !== topic));

    } else {
      setSelectedTopics([...selectedTopics, topic]);
    }

  };

  useEffect(() => {
    dispatch(setTopics({ topics: selectedTopics }));
  }, [selectedTopics, dispatch])

  const handleContinueClick = () => {
    nav("/signUp/rangeQ1")
  }

  const handleBackClick = () => {
    nav("/signUp/educationInput")
  }



  return (
    <div className="d-flex justify-content-evenly mt-4">
      <div className="page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins container-register position-relative">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="card card-4">
                <div className="card-body">
                  <div className="col-2">
                    <div className="input-group">
                      <h2 className="title label">
                        {translate('register.topicsTitle', language)}
                      </h2>
                    </div>
                  </div>
                  <div class="row">
                    {topicsList.map((topic, index) => (
                      <div className="col-md-4  ">
                        <button
                          type="button"
                          key={index}
                          className={`btn ${selectedTopics.includes(topic)
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

        <div className="position-absolute top-50 start-0 translate-middle me-5 z-1">
          <button
            type="button"
            className=" btn-back"
            onClick={handleBackClick}
          >
            <FaArrowLeft />
          </button>
        </div>
        <div className="position-absolute top-50 start-100 translate-middle d-flex justify-content-center me-5">
          <button
            type="button"
            className="btn-continue"
            onClick={handleContinueClick}
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Topics;
